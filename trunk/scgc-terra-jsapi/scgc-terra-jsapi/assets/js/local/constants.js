
var PG = {};//pageInit.js调用,用于保存页面对象
var MAP = {}; //mapInit.js调用,用于保存地图对象
//PA,路径分析对象
//NS,地名搜索对象
var CST = {
    tilemapUrl: "http://10.51.51.10/imap/iMapServer/NewRest/services/gytilemap/",
    //tilemapUrl: "http://10.51.51.239/iMap/iMapServer/NewRest/services/tileMap_DLG_2000_yes/",
    //demmapUrl: "http://10.51.51.239/iMap/iMapServer/NewRest/services/tileMap_DEM_2000_Yes/",
    demmapUrl:"http://10.51.51.10/imap/iMapServer/NewRest/services/gytilemap/",
    //demmapUrl2:"http://10.51.51.131/iMap/iMapServer/NewRest/services/DEM_DLG_tilemap/",
    demmapUrl2:"http://10.51.51.131/iMap/iMapServer/NewRest/services/sctilemap_dom_dlg/",
    dommapUrl1: "http://10.51.51.131/iMap/iMapServer/NewRest/services/sctilemap_dom_dom/",
    dommapUrl2: "http://10.51.51.131/iMap/iMapServer/NewRest/services/sctilemap_dom_dlg/",
    //nameSearchUrl: "http://10.51.51.239/iMap/iMapServer/NewRest/services/NameSearch_2000_Yes/", //地名搜索服务路径
    //shortPathUrl: "http://10.51.51.239/iMap/iMapServer/NewRest/services/shortpath_2000_Yes/", //路径分析服务路径
    //queryPacUrl: "http://10.51.51.239/iMap/iMapServer/NewRest/services/datasearch_2000_yes/", //查询pac地址路径
    //queryPacUrl: "http://10.51.51.239/iMap/iMapServer/NewRest/services/datasearch_2000_yes/",
    token: "v3ESm0uxH725VBFDZzVwMSvdB7CKdQRx8ET6TzQItMKic4761t_z7MSD_we7HAjg",
    nameSearchUrl:"http://10.51.51.10/imap/iMapServer/NewRest/services/gynamesearch/",
    shortPathUrl:"http://10.51.51.10/imap/iMapServer/NewRest/services/gyshortpath/",
    queryPacUrl:"http://10.51.51.10/imap/iMapServer/NewRest/services/gyLocation/",
    pactoken:"v3ESm0uxH725VBFDZzVwMSvdB7CKdQRx8ET6TzQItMKic4761t_z7MSD_we7HAjg",
    mapname:"map",
    curMapType:"dlg",
    legendPath: "assets\\legend\\"
};

