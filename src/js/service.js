var MobileUI = {

    bottomTrinagle: $(".bottom-trinagle"),
    screen01: $("#screen00"),
    screenAll: $("#screen-all"),
    topTrinagle: $(".top-trinagle"),
    bgMain: $("#bg-main"),
    scaleDom: $("#scaleDom"),
    tranMain: $("#nav-trinagle-main"),
    leftContent: $("#left-content")
};

var imgList = ["./img/all.png","./img/bg.png"];
var ld = new loadermsk(imgList, "#0e79ef",function(){
    MobileEvent.init();
});

var  scroll = true;


var MobileEvent = {
    init: function () {
        this.form();
        //保证android下流畅 启动动画
        MobileUI.screen01.removeClass("hide");
    },
    form: function () {

        //设置当前三角高度
        var height = document.body.offsetHeight;
        var width = document.body.offsetWidth;

        var $leftZhe = $("#paper-trin-left");
        var $rightZhe = $("#paper-trin-right");


        $(".paper-trin").css({ "borderWidth": height / 2 + "px 0 " + height / 2 + "px " + width + "px"});

        $leftZhe.css("top", "-" + height + "px");
        $rightZhe.css("top", height + "px");


        //旋转的角度
        var transArray = [30, 90, 150, 210, 270, 330];


        //滚动条
        var wrapper_scroll = new Scroller('#main', {
            Scontainer: '.screen-all',
            hScroll: true,
            vScroll: false,
            momentum: true,
            bounce: false,
            snap: true,
            lock : true,
            scrollBefore: function (name, e) {

            },
            onScroll: function (name, obj) {


            },
            onTouchEnd: function (name, obj) {
            },
            scrollEnd: function (index) {


                var $screen = MobileUI.screenAll.find(".screen");
                var node = $screen.filter("[id='screen0" + index + "']");
                for (var i = 0; i < $screen.length; i++) {
                    var $sc = $($screen[i]);
                    $sc.children(".content").addClass("hide");
                }
                ;
                node.children(".content").removeClass("hide");
            }
        });



        //第一阶段结束动画
        util.animationEnd(document.querySelector(".center-title"), function () {
            //第一阶段隐藏
            hideFirstFrame();
        });
        function hideFirstFrame() {
            var f1 = MobileUI.screen01.find("#left-decor");
            var f2 = MobileUI.screen01.find("#right-decor");
            var f3 = MobileUI.screen01.find(".center-title");

            setTimeout(function () {
                MobileUI.bottomTrinagle.find("#trinagle-list-04").removeClass("hide");
                MobileUI.bottomTrinagle.find("#trinagle-list-05").removeClass("hide");
                MobileUI.topTrinagle.removeClass("hide");
                MobileUI.screen01.addClass("f2");
            }, 1000);

        }

        var topTrinagle = MobileUI.topTrinagle[0].querySelector(".trinagle-pour");
        //第二阶段结束
        util.animationEnd(topTrinagle, function () {
//              console.log("top trin");
//              //动画重置
            MobileUI.bgMain.siblings().addClass("hide");
            MobileUI.bgMain.removeClass("hide");

        });
        //第三阶段动画
        util.animationEnd(document.querySelector("#bg-response"), function () {
            $("#bg-response").addClass("hide");
        });

        util.animationEnd(MobileUI.bgMain.find(".title-04")[0],function(){
            //解锁滑动
            wrapper_scroll.opts.lock = false;
        });


        //第四阶段动画
        var fourAniEnd  =   document.querySelector("#fourAniEnd");
        util.animationEnd(fourAniEnd,function () {
            var $ma =   $("#nav-trinagle-main");
            $("#screen01").css("background", "#ffffff");
            MobileUI.scaleDom.addClass("scaleDom");
            $("#paper-01").addClass("hide");
            $(fourAniEnd).addClass("hide");

            setTimeout(function(){

                MobileUI.scaleDom.addClass("hide");
                $ma.removeClass("hide");
                MobileUI.leftContent.removeClass("hide");
            },1000);

        });


        //计数器`
        var count = 0;

        function showLeftContent(num) {
            MobileUI.leftContent.find(".left-content-ul").filter("[num='" + num + "']").removeClass("hide")
                .siblings().filter(".left-content-ul").addClass("hide");
        }


        MobileUI.tranMain.find("i").tap(function () {
            count++;
            if (count > transArray.length-1) {
                count = 0;
            }

            var num = $(this).attr("num");
            console.log(num);
            showLeftContent(num);
            MobileUI.tranMain.css({"-webkit-transform": "translate3d(0,0,0) rotateZ(" + transArray[count] + "deg)    scale(1.3)"});
            return  false;
        });


        //跳转子页面链接
        MobileUI.leftContent.on("tap", "li>a", function () {
            var href = $(this).attr("href");
            window.location.href = href;
        });


    }


};


$(function () {

});
