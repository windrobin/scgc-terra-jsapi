
function SCSG(divId,clientOnInitFinishedHandler){
    SCSG.args.TE3DDivID=divId;
    
    var TE3DWindow = document.createElement("object");
    TE3DWindow.onreadystatechange = function()
    {
        if (TE3DWindow.readyState == 4)
        {
            SCSG.teCore=new _$SGCore();
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

SCSG.prototype.createTree=function(divID)
{
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
function _$SGCore()
{
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
        //this.ICoordSys        = TE.Interface("ICoordSys3");
        this.ISnapShot        = TE.Interface("ISnapShot2");
        this.IMenu            = TE.Interface("IMenu");
        //this.IScriptEngine    = TE.Interface("IScriptEngine5");
        this.IDateTime = TE.Interface("IDateTime5");
    }
    catch (e) { }     
}