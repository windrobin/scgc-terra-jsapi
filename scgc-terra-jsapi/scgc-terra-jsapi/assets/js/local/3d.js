
//定义三维变量
 var globe = null;
 var framework = null;
 var gMenuManager = null;
 var ActivateMode;
 var retStart;
 var retStop;
//三维场景初始化
 Ext.onReady(function init() {
     try {
         globe = new SCSG("3dmap",onInitFinished);
         globe.createTree("infotree");
         SCSG.teCore.ITerraExplorer.attachEvent("onLoadFinished", myOnLoadFinished);
         //SCSG.teCore.ITerraExplorer.attachEvent("onLButtonDown", myOnLButtonDown);
         //SCSG.teCore.ITerraExplorer.attachEvent("onLButtonUp", myOnLButtonUp);
     }
     catch (e) { alert(e.description); }

     try {
         if (SCSG.teCore.ITerraExplorer.Type == "Pro" || SCSG.teCore.ITerraExplorer.Type == "Basic") {
             return;
         }
     }
     catch (e) {

         alert("您机器上未安装三维插件,请安装后刷新网页!");
         //location.href = "3dRes/Download/Setup.exe";
     }

 });

 function onInitFinished() {

     alert("三维地图加载中请您耐心等待...");
     SCSG.teCore.ITerraExplorer.Load(CST.flyPath);
 }

 function myOnLoadFinished() {
   //SCSG.root.load("myWork");
}

 function myOnLButtonDown(flags, x, y) {

     if (ActivateMode == 0)
         return;
//     var group = SCSG.creator.createGroup("Path");
     //     SCSG.root.appendChild(group);

     retStart = SCSG.window.pixelToWorld(x, y);
     retStop = SCSG.window.pixelToWorld(x, y);
     if ((retStart == null) || (retStop == null))
         return;
     var pos = SCSG.navigate.getPosition();

     if (ActivateMode == 1) // 起点
     {
         var icon = SCSG.creator.createImageLabel(retStart.coord, "http://10.51.51.10/assets/skins/default/images/start.png", "起点");
         SCSG.root.appendChild(icon);
         icon.innerObj.ScaleFactor = Math.max(1, pos.height / 200);
         icon.innerObj.LimitGrowth = 1;
         PA.mp_start = new scgc.geometry.Point(retStart.coord.x, retStart.coord.y);
     }

     if (ActivateMode == 2) // 终点
     {
         var icon = SCSG.creator.createImageLabel(retStop.coord, "http://10.51.51.10/assets/skins/default/images/end.png", "终点");
         SCSG.root.appendChild(icon);
         icon.innerObj.ScaleFactor = Math.max(1, pos.height / 200);
         icon.innerObj.LimitGrowth = 1;
         PA.mp_end = new scgc.geometry.Point(retStop.coord.x, retStop.coord.y);
     }

 }


 function LoadAndPlayObj(layerURL, ObjName) {

     //    SCSG.root.load(layerURL);
     ObjName = "test";

     var a = SCSG.creator.createLayer(layerURL);
     SCSG.root.appendChild(a);
     //    layerName = layerURL.substring(0, layerURL.length - 4);
     //    alert(layerName);
     node = SCSG.root.selectSingleNode(ObjName);
     if (node != null)
         SCSG.navigate.flyTo(node);
 }

 //三维功能函数

 function SwitchUndergroundMode()  {SCSG.teCore.IMenu.Invoke(33372);}

 function SwitchDateTimeSlider() {
     if ((SCSG.window.getControls() & 0x40) == 0)
         SCSG.window.showControls(SCSG.window.getControls() | 0x40);
     else
         SCSG.window.showControls(SCSG.window.getControls() & 0xFFFFFFBF);
 }

 function North() { SCSG.teCore.IMenu.Invoke(7008); }
 function Full() { SCSG.teCore.IMenu.Invoke(32775); }
 function Point() { SCSG.teCore.IMenu.Invoke(33325);}
 function Area() { SCSG.teCore.IMenu.Invoke(33350); }
 function Line() { SCSG.teCore.IMenu.Invoke(33326); }
 function aLine() { SCSG.teCore.IMenu.Invoke(33327); }
 function High() { SCSG.teCore.IMenu.Invoke(33330); }
 function Roate() { SCSG.teCore.IMenu.Invoke(34026); }


 function Contour() { SCSG.teCore.IMenu.Invoke(33331); }
 function Profile() { SCSG.teCore.IMenu.Invoke(33329); }
 function BestPath() { SCSG.teCore.IMenu.Invoke(33333); }
 function Sight() { SCSG.teCore.IMenu.Invoke(33328); }
 function Viewshed() { SCSG.teCore.IMenu.Invoke(33334); }
 function Threat() { SCSG.teCore.IMenu.Invoke(33332); }

 function TextLabel() { SCSG.teCore.IMenu.Invoke(33318); }
 function ImageLabel() { SCSG.teCore.IMenu.Invoke(33319); } 
 function Polyline() { SCSG.teCore.IMenu.Invoke(33300); }
 function Polygon() { SCSG.teCore.IMenu.Invoke(33301); }
 function Rectangle() { SCSG.teCore.IMenu.Invoke(33302); }
 function Regular() { SCSG.teCore.IMenu.Invoke(33303); }
 function Arrow() { SCSG.teCore.IMenu.Invoke(33304); }
 function Circle() { SCSG.teCore.IMenu.Invoke(33305); }
 function Ellipse() { SCSG.teCore.IMenu.Invoke(33306); }
 function Arc() { SCSG.teCore.IMenu.Invoke(33307); }

 function Model() { SCSG.teCore.IMenu.Invoke(33321); }
 function Building() { SCSG.teCore.IMenu.Invoke(33317);}
 function Poly() { SCSG.teCore.IMenu.Invoke(33316); }
 function Box() { SCSG.teCore.IMenu.Invoke(33310); }
 function Cylinder() { SCSG.teCore.IMenu.Invoke(33312); }
 function Sphere() { SCSG.teCore.IMenu.Invoke(33313); }
 function Cone() { SCSG.teCore.IMenu.Invoke(33314); }
 function Pyramid() { SCSG.teCore.IMenu.Invoke(33311); }
 function Arrow() { SCSG.teCore.IMenu.Invoke(33315); }

 function Layer() { SCSG.teCore.IMenu.Invoke(45200); }
 function Image() { SCSG.teCore.IMenu.Invoke(33361); }
 function DEM() { SCSG.teCore.IMenu.Invoke(33362); }
 function Modify() { SCSG.teCore.IMenu.Invoke(33370); }
 function Hole() { SCSG.teCore.IMenu.Invoke(33371); }
 function Video() { SCSG.teCore.IMenu.Invoke(33309); }
 function Hide() { SCSG.teCore.IMenu.Invoke(34416); }
 function Ground() { SCSG.teCore.IMenu.Invoke(33322); }
 function Aerial() { SCSG.teCore.IMenu.Invoke(33437); }
 
 function ZoomIn(delta){
    try
    {
        var ret = SCSG.window.pixelToWorld();
        if (ret == null) { throw "Zoom point is not defined"; }
        var pos = SCSG.window.getPosition();
        if (delta == null)
            delta = pos.distanceTo(ret.coord) / 3.0;
        else
            delta = pos.distanceTo(ret.coord) - delta;        
        SCSG.teCore.IPlane.Zoom(delta,0);
    }
    catch(e) {return false; }                    
    return true;
 }

 function ZoomOut(delta){
    try
    {
        var ret = SCSG.window.pixelToWorld();
        if (ret == null) { throw "Zoom point is not defined"; }
        var pos = SCSG.window.getPosition();
        if (delta == null)
            delta = pos.distanceTo(ret.coord) * 3.0;
        else
            delta = pos.distanceTo(ret.coord) + delta;        
        SCSG.teCore.IPlane.Zoom(delta,0);
    }
    catch(e) {return false; }                    
    return true;
 } 
 function Pan() { ActivateMode = 0;  SCSG.teCore.IRender.SetMouseInputMode(0); SCSG.teCore.IMenu.Invoke(1022); }
 function Stop(){
    try
    {
        //if (this._flyThrough != null) this._flyThrough.finish();            
        // Temp non-elegant implementation of stop (due to lack of an appropriate interface in TE)
        pos = SCSG.window.getPosition();
        pos.distance = 1;
        //this.jumpTo(pos);
        //this.setPosition(pos);
    }
    catch(e) {return false; }                    
    return true;        
 }
 
 function Snap() {
     SCSG.window.getSnapShot("400", "500", "C:\Inetpub\wwwroot\3DSky\df.jpg");
 }


function showMyUrl() {

       var popup = new SGPopup("My popup", "http://www.126.com");

         SCSG.showPopup(popup);


}
function showNotification() {

    var popup = new SGNotification("测绘生产！");

    SCSG.showPopup(popup);

}
function getPosition() { 

    var pos = SCSG.navigate.getPosition();

    alert("Current Position:\n\nX: " + pos.x + "\nY: " + pos.y + "\nHeight: " + pos.height + "\nYaw: " + pos.yaw + "\nPitch: " + pos.pitch);
}

function addWMSLayer(){
    //SCSG.teCore.IMenu.Invoke(33361);
    var wmsFile ="[INFO]\nMeters=0\nMPP=2.68220901489258E-06\nUrl="+CST.dommapUrl2+"wms?request=GetMap&Version=1.1.1&Service=WMS&SRS=EPSG:4326&BBOX=96.8,25.7,109,34.7&HEIGHT=256&WIDTH=256&Layers=0&Styles=&Format=image/png&token="+CST.token+"\nxul=96.8\nylr=25.7\nxlr=109\nyul=34.7\n";
    wmsFile="<EXT><ExtInfo><![CDATA[" +wmsFile+ "]]></ExtInfo><ExtType>wms</ExtType></EXT>";
    //SCSG.teCore.IObjectManager.CreateImageryLayer("wms",96.8,34.7,109,25.7,wmsFile,null,0,"scwms");alert(1);
    debugger;
    var left,top,width,height;
    var tt=typeof(SCSG.teCore.IRender.GetRenderRect);
    var re=SCSG.teCore.IRender.GetRenderRect(left,top,width,height);
    var ss=left+top;
}





