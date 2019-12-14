console.log("加载成功！");
/* 
    配置当前项目引进的模块
*/
require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "parabola": "parabola",
        "banner":"banner",
        "nav_left":"nav_left"
    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"],
        //声明当前模块不遵从AMD
        "parabola": {
			exports: "_"
		}
    }
})
require(["banner","nav_left"],function(banner,nav_left){
    banner.download();
    banner.bannercheck();
    nav_left.download();
})