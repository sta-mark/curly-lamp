console.log("加载成功了");
define(['jquery',], function($) {
    function download(){
        $.ajax({
            url:"data/nav_left.json",
            success:function(data){
                console.log(data);
                var bannerArr = data.nav;
                var str = null;
                for(var i = 0;i < bannerArr.length;i++){
                    str = $(`<li><a href="">${bannerArr[i].title}<i class="iconfont">&#xe631;</i></a></li>`)
                    str.appendTo($("#sidebar"));
                }
            },
            error:function(msg){
                console.log("数据下载错误！" + msg);
            }
        })
    }
    return {
        download:download
    }
});