
//定义三维变量
 var globe = null;
 var framework = null;
 var gMenuManager = null;
 var ActivateMode;
 var retStart;
 var retStop;
//三维场景初始化
// Ext.onReady(function init() {
//     try {
//         //debugger;
//         globe = new SGWorld("3dmap", onInitFinished);
//         globe._createTree("infotree");
//         globe.attachEvent("onLoadFinished", myOnLoadFinished);
//         globe.attachEvent("onLButtonDown", myOnLButtonDown);
//         //globe.attachEvent("onLButtonUp", myOnLButtonUp);
//     }
//     catch (e) { alert(e.description); }

//     try {

//         objTE = document.getElementById("SGAPITEObj");

//         ITerraExplorer = objTE.interface("ITerraExplorer5");

//         if (ITerraExplorer.Type == "Pro" && ITerraExplorer.Type == "Basic") {
//             return;
//         }

//     }
//     catch (e) {

//         alert("您机器上未安装三维插件,请安装后刷新网页!");
//         //location.href = "3dRes/Download/Setup.exe";
//     }

// });

 function onInitFinished() {

     alert("三维地图加载中请您耐心等待...");
     //globe.teCore.ITerraExplorer.Load("http://10.51.51.10/3dRes/skyline/3DGY.fly");
     globe.teCore.ITerraExplorer.Load("D:\\Public\\广元三维单机版\\mywork\\gycq\\gycq.mpt");
     //globe.teCore.ITerraExplorer.Load("D:\\0Job\\2010job\\Skyline\\三维室内\\Default.fly");
 }

 function myOnLoadFinished() {
   globe.root.load("myWork");
}

 function myOnLButtonDown(flags, x, y) {

     if (ActivateMode == 0)
         return;
//     var group = globe.creator.createGroup("Path");
     //     globe.root.appendChild(group);

     retStart = globe.window.pixelToWorld(x, y);
     retStop = globe.window.pixelToWorld(x, y);
     if ((retStart == null) || (retStop == null))
         return;
     var pos = globe.navigate.getPosition();

     if (ActivateMode == 1) // 起点
     {
         var icon = globe.creator.createImageLabel(retStart.coord, "http://10.51.51.10/assets/skins/default/images/start.png", "起点");
         globe.root.appendChild(icon);
         icon.innerObj.ScaleFactor = Math.max(1, pos.height / 200);
         icon.innerObj.LimitGrowth = 1;
         PA.mp_start = new scgc.geometry.Point(retStart.coord.x, retStart.coord.y);
     }

     if (ActivateMode == 2) // 终点
     {
         var icon = globe.creator.createImageLabel(retStop.coord, "http://10.51.51.10/assets/skins/default/images/end.png", "终点");
         globe.root.appendChild(icon);
         icon.innerObj.ScaleFactor = Math.max(1, pos.height / 200);
         icon.innerObj.LimitGrowth = 1;
         PA.mp_end = new scgc.geometry.Point(retStop.coord.x, retStop.coord.y);
     }

 }


 function LoadAndPlayObj(layerURL, ObjName) {

     //    globe.root.load(layerURL);
     ObjName = "test";

     var a = globe.creator.createLayer(layerURL);
     globe.root.appendChild(a);
     //    layerName = layerURL.substring(0, layerURL.length - 4);
     //    alert(layerName);
     node = globe.root.selectSingleNode(ObjName);
     if (node != null)
         globe.navigate.flyTo(node);
 }

 //三维功能函数

 function SwitchUndergroundMode()  {globe.teCore.IMenu.Invoke(33372);}

 function SwitchDateTimeSlider() {
     if ((globe.window.getControls() & 0x40) == 0)
         globe.window.showControls(globe.window.getControls() | 0x40);
     else
         globe.window.showControls(globe.window.getControls() & 0xFFFFFFBF);
 }

 function North() { globe.teCore.IMenu.Invoke(7008); }
 function Full() { globe.teCore.IMenu.Invoke(32775); }
 function Point() { globe.teCore.IMenu.Invoke(33325);}
 function Area() { globe.teCore.IMenu.Invoke(33350); }
 function Line() { globe.teCore.IMenu.Invoke(33326); }
 function aLine() { globe.teCore.IMenu.Invoke(33327); }
 function High() { globe.teCore.IMenu.Invoke(33330); }
 function Pan() { ActivateMode = 0;  globe.teCore.IRender.SetMouseInputMode(0); globe.teCore.IMenu.Invoke(1022); }
 function Roate() { globe.teCore.IMenu.Invoke(34026); }


 function Contour() { globe.teCore.IMenu.Invoke(33331); }
 function Profile() { globe.teCore.IMenu.Invoke(33329); }
 function BestPath() { globe.teCore.IMenu.Invoke(33333); }
 function Sight() { globe.teCore.IMenu.Invoke(33328); }
 function Viewshed() { globe.teCore.IMenu.Invoke(33334); }
 function Threat() { globe.teCore.IMenu.Invoke(33332); }

 function TextLabel() { globe.teCore.IMenu.Invoke(33318); }
 function ImageLabel() { globe.teCore.IMenu.Invoke(33319); } 
 function Polyline() { globe.teCore.IMenu.Invoke(33300); }
 function Polygon() { globe.teCore.IMenu.Invoke(33301); }
 function Rectangle() { globe.teCore.IMenu.Invoke(33302); }
 function Regular() { globe.teCore.IMenu.Invoke(33303); }
 function Arrow() { globe.teCore.IMenu.Invoke(33304); }
 function Circle() { globe.teCore.IMenu.Invoke(33305); }
 function Ellipse() { globe.teCore.IMenu.Invoke(33306); }
 function Arc() { globe.teCore.IMenu.Invoke(33307); }

 function Model() { globe.teCore.IMenu.Invoke(33321); }
 function Building() { globe.teCore.IMenu.Invoke(33317);}
 function Poly() { globe.teCore.IMenu.Invoke(33316); }
 function Box() { globe.teCore.IMenu.Invoke(33310); }
 function Cylinder() { globe.teCore.IMenu.Invoke(33312); }
 function Sphere() { globe.teCore.IMenu.Invoke(33313); }
 function Cone() { globe.teCore.IMenu.Invoke(33314); }
 function Pyramid() { globe.teCore.IMenu.Invoke(33311); }
 function Arrow() { globe.teCore.IMenu.Invoke(33315); }

 function Layer() { globe.teCore.IMenu.Invoke(45200); }
 function Image() { globe.teCore.IMenu.Invoke(33361); }
 function DEM() { globe.teCore.IMenu.Invoke(33362); }
 function Modify() { globe.teCore.IMenu.Invoke(33370); }
 function Hole() { globe.teCore.IMenu.Invoke(33371); }
 function Video() { globe.teCore.IMenu.Invoke(33309); }
 function Hide() { globe.teCore.IMenu.Invoke(34416); }
 function Ground() { globe.teCore.IMenu.Invoke(33322); }
 function Aerial() { globe.teCore.IMenu.Invoke(33437); }
 function Snap() {
     globe.window.getSnapShot("400", "500", "C:\Inetpub\wwwroot\3DSky\df.jpg");
 }


    function showMyUrl() {

           var popup = new SGPopup("My popup", "http://www.126.com");

             globe.showPopup(popup);


    }
    function showNotification() {

        var popup = new SGNotification("测绘生产！");

        globe.showPopup(popup);

    }
    function getPosition() { 
    
        var pos = globe.navigate.getPosition();

        alert("Current Position:\n\nX: " + pos.x + "\nY: " + pos.y + "\nHeight: " + pos.height + "\nYaw: " + pos.yaw + "\nPitch: " + pos.pitch);
    }


