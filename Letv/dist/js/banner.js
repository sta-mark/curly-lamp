define(["jquery"],function($){
    function download(){
        // 轮播图的数据
        $.ajax({
            url:"data/banner.json",
            success:function(arr){
                var str = null;
                for(var i = 0;i < arr.length;i++){
                    str = $(`<li class="${arr[i].class}"><a href=""><img src="${arr[i].src}" alt=""></a></li>`);
                    str.appendTo($("#banul"));
                }
            },
            error:function(msg){
                alert("数据下载错误" + msg);
            }
        })
    }
    //轮播图的效果
    function bannercheck(){
        var iNew = 0;
        var aImgs = null;
        var aBtns = null;
        var aColor = null;
        var timer = setInterval(function(){
            iNew++;
            tab();
        },5000);

        function tab(){
            if(!aImgs){
                aImgs = $("#banul").find("li").find("a");
            }
            if(!aBtns){
                aBtns = $(".btns").find("a");
            }
            if(!aColor){
                aColor = $("#banul").find("li");
            }
            if(iNew==4){
                iNew = 0;
            }
            //背景颜色
            aColor.hide().css("opacity",0.2).eq(iNew).show().stop().animate({opacity:1},2000);
            //banner图
            aImgs.hide().css("opacity",0.2).eq(iNew).show().stop().animate({opacity:1},2000);
            //按钮切换
            aBtns.removeClass("active").eq(iNew).addClass("active");
        }
        //添加移入移出效果
        $("#banul,#btns").mouseenter(function(){
            clearInterval(timer);
        })
        $("#banul,#btns").mouseleave(function(){
            timer = setInterval(function(){
                iNew++;
                tab();
            },5000);
        })
        
        $(".btns").on("click","a",function(){
            iNew = $(this).index();
            tab();
            return false;
        })
        //前后切换
        $(".switch-left,.switch-right").on("click",function(){
            if(this.className == "switch-left"){
                iNew--;
                if(iNew == 0){
                    iNew == 4;
                }
            }else{
                iNew++;
            }
            tab();
            return false;
        })
    }
    return{
        download:download,
        bannercheck:bannercheck
    }
})