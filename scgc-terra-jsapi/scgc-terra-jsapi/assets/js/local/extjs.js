
/// <reference path="../plugs/extjs/vswd-ext.js" />

Ext.onReady(function() {
    var mapwin;
    Ext.QuickTips.init();
    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
    try {
            var viewport = new Ext.Viewport({
                layout: 'border',
                items: [
                    new Ext.BoxComponent({
                        region: 'north',
                        height: 0
                    }),
                 {
                    region: 'west',
                    collapsible: true,
                    title: '左边功能',
                    split: true,
                    width: 320,
                    minSize:175,
                    maxSize:350,
                    margins: '0 0 0 5',
                    autoScroll: true,
                    layout: {
                        type: 'accordion',
                        animate: true
                    },
                    items: [
                        new Ext.Panel({ title: '图层控制',
                             html: '<div id="infotree"style="width:100%; height:100%;"></div>'
                         }),
                         new Ext.Panel({ title: '地名搜索',
                             html: '<div id="nameSearch"></div>'
                         }),
                         new Ext.Panel({ title: '路径分析',
                             html: '<div id="shortPath"></div>'
                         }),
                         new Ext.Panel({ title: '三维功能',
                             autoShow: true,
                             autoScroll: true,
                             layout: 'border',
                             items: [
                                { 
                                 xtype: 'toolbar',
                                 region: 'north',
                                 items: [{ xtype: 'splitbutton',
                                     text: '3D分析',
                                     tooltip: '三维分析',
                                     menu: [{ text: '剖面',
                                         icon: '3dRes/images/049.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Profile
                                     }, { text: '通视',
                                         icon: '3dRes/images/051.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Sight
                                     }, { text: '高程',
                                         icon: '3dRes/images/048.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Contour
                                     }, { text: '路径',
                                         icon: '3dRes/images/050.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: BestPath
                                     }, { text: '视域',
                                         icon: '3dRes/images/052.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Viewshed
                                     }, { text: '范围',
                                         icon: '3dRes/images/053.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Threat
                                     }, { text: '地形',
                                         icon: '3dRes/images/047.gif',
                                         handler: Modify
                                     }, { text: '挖坑',
                                         icon: '3dRes/images/EditingLayerTarget16.png',
                                         handler: Hole
                                     }, { text: '视频',
                                         icon: '3dRes/images/video.gif',
                                         handler: Video
                                     }, { text: '动态',
                                         icon: '3dRes/images/Bex16.png',
                                         handler: Ground
                                     }]
                                 }, 
                                 { 
                                     xtype: 'splitbutton',
                                     text: '2D标注',
                                     tooltip: '二维标注',
                                     iconCls: 'x-btn-text-icon',
                                     menu: [{ text: '文字',
                                         icon: '3dRes/images/013.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: TextLabel
                                     }, { text: '图像',
                                         icon: '3dRes/images/014.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: ImageLabel
                                     }, { text: '画线',
                                         tooltip: '画线',
                                         icon: '3dRes/images/ElementLine16.png',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Polyline
                                     }, { text: '画面',
                                         icon: '3dRes/images/ElementPolygon16.png',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Polygon
                                     }, { text: '箭头',
                                         icon: '3dRes/images/019.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Arrow
                                     }, { text: '正多边形',
                                         icon: '3dRes/images/018.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Regular
                                     }, { text: '圆形',
                                         icon: '3dRes/images/020.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Circle
                                     }, { text: '椭圆',
                                         icon: '3dRes/images/021.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Ellipse
                                     }, { text: '圆弧',
                                         icon: '3dRes/images/022.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Arc
                                     }]
                                 }, 
                                 { 
                                     xtype: 'splitbutton',
                                     text: '3D标注',
                                     tooltip: '三维标注',
                                     iconCls: 'x-btn-text-icon',
                                     menu: [{ text: '模型',
                                         icon: '3dRes/images/054.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Model
                                     }, { text: '建筑',
                                         icon: '3dRes/images/057.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Building
                                     }, { text: '球体',
                                         tooltip: '球体',
                                         icon: '3dRes/images/061.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Sphere
                                     }, { text: '盒子',
                                         icon: '3dRes/images/059.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Box
                                     }, { text: '多面体',
                                         icon: '3dRes/images/058.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Poly
                                     }, { text: '圆柱体',
                                         icon: '3dRes/images/060.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Cylinder
                                     }, { text: '圆锥体',
                                         icon: '3dRes/images/062.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Cone
                                     }, { text: '多锥体',
                                         icon: '3dRes/images/063.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Pyramid
                                     }, { text: '立体箭头',
                                         icon: '3dRes/images/064.gif',
                                         iconCls: 'x-btn-text-icon',
                                         handler: Arrow
                                     }]
                                 }, 
                                 {
                                     xtype: 'splitbutton',
                                     text: '功能扩展',
                                     tooltip: '功能扩展',
                                     menu: [{ xtype: 'button',
                                         text: '坐标定位',
                                         handler: function() { addTab('坐标定位', 'tab1', '<iframe id="frame1" src="3dRes/Tools/CoordSystemTool/CoordSystem.html" frameborder="0" width="100%" height="100%"></iframe> ') }
                                     }, { xtype: 'button',
                                         text: '导航追踪',
                                         handler: function() { addTab('导航追踪', 'tab2', '<iframe id="frame1" src="3dRes/Tools/NavigationTools/NavigationTools.html" frameborder="0" width="100%" height="100%"></iframe> ') }
                                     }, { xtype: 'button',
                                         text: 'GPS跟踪',
                                         handler: function() { addTab('GPS跟踪', 'tab3', '<iframe id="frame1" src="3dRes/Tools/GPSTracking/GPSTracking.html" frameborder="0" width="100%" height="100%"></iframe> ') }
                                     }, { xtype: 'button',
                                         text: '阴影分析',
                                         handler: function() { addTab('阴影分析', 'tab4', '<iframe id="frame1" src="3dRes/Tools/ShadowTool/shadow.htm" frameborder="0" width="100%" height="100%"></iframe> ') }
                                     }, { xtype: 'button',
                                         text: '远程协作',
                                         handler: function() { addTab('远程协作', 'tab5', '<iframe id="frame1" src="3dRes/Tools/Collaboration/Collaboration.html" frameborder="0" width="100%" height="100%"></iframe> ') }
                                     }, { xtype: 'button',
                                         text: '对象查找',
                                         handler: function() { addTab('对象查找', 'tab7', '<iframe id="frame1" src="3dRes/Tools/FindObjects/FindObjects.html" frameborder="0" width="100%" height="100%"></iframe> ') }
                                     }, { xtype: 'button',
                                         text: '三维电力',
                                         handler: function() { addTab('三维电力', 'tab8', '<iframe id="frame1" src="3dRes/Tools/CreatePowerLine/CreatePowerLine.html" frameborder="0" width="100%" height="100%"></iframe> ') }
                                     }, { xtype: 'button',
                                         text: '对象阵列',
                                         handler: function() { addTab('对象阵列', 'tab9', '<iframe id="frame1" src="3dRes/Tools/DuplicateObjects/DuplicateObjects.html" frameborder="0" width="100%" height="100%"></iframe> ') }
                                     }, { xtype: 'button',
                                         text: 'KML导入',
                                         handler: function() { addTab('KML工具', 'tab10', '<iframe id="frame1" src="3dRes/Tools/KMLTool/kmltool.html" frameborder="0" width="100%" height="100%"></iframe> ') }
                                     }, { xtype: 'button',
                                         text: '符号标注',
                                         handler: function() { addTab('符号标注', 'tab11', '<iframe id="frame1" src="3dRes/Tools/Data-Library/DataLibrary-icons.html" frameborder="0" width="100%" height="100%"></iframe> ') }
                                     }]
                                }]
                            },//toolbar end
                            new Ext.TabPanel({
                                region: 'center',
                                id: 'tabs',
                                border: false,
                                tabPosition: 'bottom',
                                resizeTabs: true,
                                minTabWidth: 90,
                                tabWidth: 100,
                                plain: true,
                                enableTabScroll: true,
                                defaults: { autoScroll: false },
                                items: [{ id: 'tab0',
                                    html: '<iframe id="frame1" src="3dtip.html" frameborder="0" width="100%" height="100%"></iframe> ',
                                    title: '提示',
                                    closable: false
                                    }
                                ]
                            })
                        ]
                    })]
                }, 
                {
                    region: 'center',
                    html: '<div id="3dmap"style="width:100%; height:100%;"></div>',
                    tbar: [{ text: '放大',
                        tooltip: '放大',
                        icon: '3dRes/images/tools3d_zoomin.gif',
                        iconCls: 'x-btn-text-icon',
                        handler: function() { ZoomIn(); }
                    }, {
                        text: '缩小',
                        tooltip: '缩小',
                        icon: '3dRes/images/tools3d_zoomout.gif',
                        iconCls: 'x-btn-text-icon',
                        handler: function() { ZoomOut(); }
                    }, {
                        text: '平移',
                        tooltip: '平移',
                        icon: '3dRes/images/tools3d_hand.gif',
                        iconCls: 'x-btn-text-icon',
                        handler: Pan

                    }, {
                        text: '旋转',
                        tooltip: '旋转',
                        icon: '3dRes/images/tools3d_round.gif',
                        iconCls: 'x-btn-text-icon',
                        handler: Roate
                    }, {
                        text: '停止',
                        tooltip: '停止',
                        icon: '3dRes/images/toolsStop.gif',
                        iconCls: 'x-btn-text-icon',
                        handler: function() { Stop(); }
                    }, {
                        text: '指北',
                        tooltip: '指北',
                        icon: '3dRes/images/tools3d_north.gif',
                        iconCls: 'x-btn-text-icon',
                        handler: North
                    }, {
                        text: '消隐',
                        tooltip: '影像',
                        icon: '3dRes/images/ArcReader16.png',
                        iconCls: 'x-btn-text-icon',
                        handler: Hide
                    }, {
                        text: '测点',
                        tooltip: '坐标',
                        icon: '3dRes/images/Point.png',
                        iconCls: 'x-btn-text-icon',
                        handler: Point
                    }, {
                        text: '平距',
                        tooltip: '平距',
                        icon: '3dRes/images/Line.png',
                        iconCls: 'x-btn-text-icon',
                        handler: Line
                    }, {
                        text: '斜距',
                        tooltip: '斜距',
                        icon: '3dRes/images/044.gif',
                        iconCls: 'x-btn-text-icon',
                        handler: aLine
                    }, {
                        text: '测高',
                        tooltip: '高度',
                        icon: '3dRes/images/tools3d_distance.gif',
                        iconCls: 'x-btn-text-icon',
                        handler: High
                    }, {
                        text: '测面',
                        tooltip: '面积',
                        icon: '3dRes/images/Polygon.png',
                        iconCls: 'x-btn-text-icon',
                        handler: Area
                    }, {
                        text: '地下',
                        tooltip: '地下',
                        icon: '3dRes/images/underground.gif',
                        iconCls: 'x-btn-text-icon',
                        handler: SwitchUndergroundMode
                    }, {
                        text: '时间',
                        tooltip: '时间',
                        icon: '3dRes/images/datetimeslider.gif',
                        iconCls: 'x-btn-text-icon',
                        handler: SwitchDateTimeSlider
                    },{
                        text: '添加wms',
                        tooltip: '添加wms',
                        icon: '3dRes/images/DataAdd_B_16.png',
                        iconCls: 'x-btn-text-icon',
                        handler: addWMSLayer
                    }]
                },
                {
                    region: 'east',
                    collapsible: true,
                    collapsed: true,
                    title: '右边功能',
                    split: true,
                    width: 300,
                    minSize:175,
                    maxSize:300,
                    margins: '0 0 0 5',
                    autoScroll: true,
                    layout: {
                        type: 'accordion',
                        animate: true
                    },
                    items: [{
                        title: '功能',
                        border: false,
                        iconCls: 'nav' // see the HEAD section for style used
                    }, {
                        title: '说明',
                        html: '<p>Some settings in here.</p>',
                        border: false,
                        iconCls: 'settings'
                    }]
                },
                {
                   region: 'south',
                   height: 0,
                   split: false
               }
            ]});
            Ext.getCmp('tabs').get('tab0').show();
        }
        catch (e) {
            alert(e.description);
        }
    });




function addTab(title, IndexId, source) {                      //加载tab页
    if (Boolean(!Ext.getCmp('tabs').get(IndexId))) {
        Ext.getCmp('tabs').add({
            id: IndexId,
            title: title,
            html: source,
            closable: true
        }).show();
    } else {
        Ext.getCmp('tabs').get(IndexId).show();
    }
}