
var scsgAPIURL="http://localhost:52235/assets/js/SCSGAPI/";
function $LoadSCSGAPIScript(){
    document.write("<script language='vbscript' src='"+scsgAPIURL+"scsg.vbs'></script>");
    document.write("<script language='jscript' src='"+scsgAPIURL+"scsg.constants.js'></script>");
}$LoadSCSGAPIScript();


function SCSG(divId,clientOnInitFinishedHandler){
    SCSG.args.TE3DDivID=divId;
    
    var TE3DWindow = document.createElement("object");
    TE3DWindow.onreadystatechange = function()
    {
        if (TE3DWindow.readyState == 4)
        {
            SCSG.teCore=new _$SGCore();
            SCSG.window=new _$SGWindow();
            clientOnInitFinishedHandler();
        }
    }
    document.getElementById(SCSG.args.TE3DDivID).appendChild(TE3DWindow);
    TE3DWindow.name     = SCSG.args.TE3DID;
    TE3DWindow.id       = SCSG.args.TE3DID;
    TE3DWindow.classid  = "clsid:3a4f9192-65a8-11d5-85c1-0001023952c1";
    TE3DWindow.width    = "100%";
    TE3DWindow.height   = "100%";
    TE3DWindow.BorderStyle = 0;
    TE3DWindow.Caption  = SCSG.args.TE3DDivID;
    
    
}

SCSG.args={
    TE3DID:"SGAPITE3DWindow",
    TE3DDivID:"body"
}

SCSG.prototype.createTree=function(divID){
    var TEInformationWindow = document.createElement("object");
    document.getElementById(divID).appendChild(TEInformationWindow);
    TEInformationWindow.name     = "SGAPI_TEInformationWindow";
    TEInformationWindow.id       = "SGAPI_TEInformationWindow";
    TEInformationWindow.classid  = "clsid:3a4f9193-65a8-11d5-85c1-0001023952c1";
    TEInformationWindow.width    = "100%";
    TEInformationWindow.height   = "100%";    
    TEInformationWindow.BorderStyle = 0;
}




function _$SGCreateTEObj() {
    var obj = window.document.getElementById("TE");
    if (obj == null) {
        obj = document.createElement('object');
        document.body.appendChild(obj);
        obj.name = "TE";
        obj.id = "TE";
        obj.classid = "CLSID:3a4f9191-65a8-11d5-85c1-0001023952c1";
    }
    return obj;
}

function _$SGCore(){
    try
    {
        var TE=_$SGCreateTEObj();
        this.ITerraExplorer   = TE.Interface("ITerraExplorer51");
        this.IInformationTree = TE.Interface("IInformationTree5");    
        this.IPlane           = TE.Interface("IPlane5");
        this.ITerrain         = TE.Interface("ITerrain4");
        this.IObjectManager   = TE.Interface("IObjectManager51");
        this.IRender          = TE.Interface("IRender5");
        this.IContainer       = TE.Interface("IContainer2");
        this.ICoordSys        = TE.Interface("ICoordSys3");
        this.ISnapShot        = TE.Interface("ISnapShot2");
        this.IMenu            = TE.Interface("IMenu");
        //this.IScriptEngine    = TE.Interface("IScriptEngine5");
        this.IDateTime = TE.Interface("IDateTime5");
    }
    catch (e) { }     
}

//----------------SGWindow----------------------
_$SGWindow.prototype.getRect=function(){
    try{
        var rect = new Object();
        rect.left = 0; rect.top = 0; rect.width = 0; rect.height = 0;
        vbGetRenderRect(rect);
        return rect;
    }
    catch(e) {}
    return null;
};
_$SGWindow.prototype.getPosition=function(heightType){
    var pos = new SGPosition();
    try{                    
        pos.heightType = (heightType == undefined) ? sgHeightRelative : heightType;
        vbPlaneGetPosition(pos);
    }
    catch(e) {return null; }    
    return pos;
}
_$SGWindow.prototype.pixelToWorld=function(pixelX,pixelY, type){
    try
    {
        if (type == null) type = sgPixelToWorldTypeAll;
        var rect = this.getRect();
        if (pixelX == undefined) pixelX = rect.width / 2;
        if (pixelY == undefined) pixelY = rect.height / 2;
        var coord3D = new SGCoord3D();
        var objID = vbScreenToWorld(pixelX,pixelY, type, coord3D);
        if (objID == "sky") throw "the pixel hit the sky";
       
        var ret = new Object();
        ret.coord = coord3D;
        ret.distance = this.getPosition().distanceTo(coord3D);
        ret.node = null;
        //if (objID != "") ret.node = new SGNode(SGAPI.SGWorld.teCore.IObjectManager.GetObject(objID));
        return ret;
    }    
    catch(e) { }
    return null;
}
function _$SGWindow(){
    
}


//--------------SCSGPosition class-----------------------------------
SGPosition.prototype.copy=function(pos){
    if (pos == null) return;
    
    this.x = pos.x; 
    this.y = pos.y;
    this.height = pos.height;
    this.yaw = pos.yaw;
    this.pitch = pos.pitch;
    this.roll = pos.roll;        
    this.distance = pos.distance;
    this.heightType = pos.heightType;
}
SGPosition.prototype.distanceTo=function(to){
    try{
        var from=this;
        var fromX = from.x,fromY = from.y, fromH = 0;
        var toX = to.x,toY = to.y, toH = 0;    
        if (from instanceof SGCoord3D || from instanceof SGPosition) { fromH = (from.heightType != sgHeightAbsolute) ? _SGCoord_convertHeight(fromX,fromY,from.height, sgHeightAbsolute) : from.height; }
        if (to instanceof SGCoord3D || to instanceof SGPosition) { toH = (to.heightType != sgHeightAbsolute) ? _SGCoord_convertHeight(toX,toY,to.height, sgHeightAbsolute) : to.height; }        
        return SCSG.teCore.ICoordSys.GetDistanceEx(fromX,fromY,fromH, toX,toY,toH);
    }        
    catch(e) {}                    
    return null;           
}
function SGPosition(x,y,height,yaw,pitch,distance,heightType, roll){
    
    if (x instanceof SGPosition){
        this.copy(x); 
        return;
    }
    else if (x instanceof SGCoord3D){
        this.x = x.x; 
        this.y = x.y;
        this.height = x.height;
        this.heightType = x.heightType;
        this.yaw = undefined;
        this.pitch = undefined;
        this.roll = 0.0;
        this.distance = undefined;
        return;
    }
//    else if (x instanceof SGCoord2D)
//    {
//        this.x = x.x; 
//        this.y = x.y;    
//        this.height = 0;
//        this.heightType = sgHeightAbsolute;
//        this.yaw = undefined;
//        this.pitch = undefined;
//        this.roll = 0.0;
//        this.distance = undefined;    
//        return;
//    }
//    else if (x instanceof Array)
//    {
//        var pos = _SGCoord_fromArray(x);
//        this.copy(pos);
//        return;
//    }

    this.x = parseFloat(x);
    this.y = parseFloat(y);
    this.height = parseFloat(height);
    this.yaw = parseFloat(yaw);
    this.pitch = parseFloat(pitch);
    this.roll = (roll == null) ? 0.0 : parseFloat(roll);
    this.distance = parseFloat(distance);
    this.heightType = (heightType == undefined) ? sgHeightRelative : heightType;
}

//-------------------SGCoord3D class-------------------
function SGCoord3D(x,y,height,heightType)
{
    this.x = parseFloat(x);
    this.y = parseFloat(y);
    this.height = parseFloat(height);
    this.heightType = heightType;
}

//-----------------------util------------------------------
function _SGCoord_convertHeight(x,y,height, toHeightType)
{
    try
    {
        var groundHeight = SCSG.teCore.ITerrain.GetGroundHeight(x, y, $groundHeightAccuracyConversion);
        return (toHeightType == sgHeightAbsolute) ? (height+groundHeight) : (height-groundHeight);
    }
    catch(e) { }
    return 0;
}

