var MobileUI = {

    bottomTrinagle : $(".bottom-trinagle"),
    screen01       : $("#screen00"),
    screenAll      : $("#screen-all"),
    topTrinagle    : $(".top-trinagle"),
    bgMain         : $("#bg-main"),
    scaleDom       : $("#scaleDom"),
    tranMain       : $("#nav-trinagle-main")
};

var MobileEvent = {
	init : function(){
		this.form();

        //保证android下流畅 启动动画
       MobileUI.screen01.removeClass("hide");
	},
	form : function(){

          //设置当前三角高度
          var height  = document.body.offsetHeight;
          var width   = document.body.offsetWidth;

          var $leftZhe =   $("#paper-trin-left");
          var $rightZhe =  $("#paper-trin-right");


          $(".paper-trin").css({ "borderWidth": height/2+"px 0 "+height/2+"px "+width+"px"});

        $leftZhe.css("top","-"+height+"px");
        $rightZhe.css("top",height+"px");


        //旋转的角度
        var   transArray  = [30,90,150,210,270,330];


          //滚动条
		  var wrapper_scroll = new Scroller('#main', {
                Scontainer : '.screen-all',
                hScroll : true,
                vScroll : false,
                momentum : true,
                bounce : false,
                snap: true,
                scrollBefore: function(name, e){

                },
                onScroll: function(name, obj){
                },
                onTouchEnd: function(name, obj){
                },
                scrollEnd: function(index){
                    console.log(index);

                    var $screen = MobileUI.screenAll.find(".screen");
                    var node = $screen.filter("[id='screen0"+index+"']");
                    for (var i = 0; i < $screen.length; i++) {
                        var $sc = $($screen[i]);
                        $sc.children(".content").addClass("hide");
                    };
                    node.children(".content").removeClass("hide");
                }
            });
            //第一阶段结束动画
            util.animationEnd(document.querySelector(".center-title"),function(){
                //第一阶段隐藏
                hideFirstFrame();
            });
            function hideFirstFrame(){
                var  f1 = MobileUI.screen01.find("#left-decor");
                var  f2 = MobileUI.screen01.find("#right-decor");
                var  f3 = MobileUI.screen01.find(".center-title");

                setTimeout(function(){
                    MobileUI.bottomTrinagle.find("#trinagle-list-04").removeClass("hide");
                    MobileUI.bottomTrinagle.find("#trinagle-list-05").removeClass("hide");
                    MobileUI.topTrinagle.removeClass("hide");
                    MobileUI.screen01.addClass("f2");
                },1000);

            }
            var topTrinagle =  MobileUI.topTrinagle[0].querySelector(".trinagle-pour");
            //第二阶段结束
            util.animationEnd(topTrinagle,function(){
//                console.log("top trin");
//                //动画重置
                MobileUI.bgMain.siblings().addClass("hide");
                MobileUI.bgMain.removeClass("hide");
            });
            //第三阶段动画
            util.animationEnd(document.querySelector("#bg-response"),function(){
                $("#bg-response").addClass("hide");
            });
            //第四阶段动画
            util.animationEnd(document.querySelector("#fourAniEnd"),function(){
                $("#screen01").css("background","#ffffff");
//
                $("#scaleDom").hide();
                $("#nav-trinagle-main").show();
                $("#nav-trinagle-main").css({
                    "-webkit-transform" : "rotateZ(30deg) scale(1.5)"
                });
            });


            //计数器
            var count = 0;
            //旋转角度
            MobileUI.tranMain.tap(function(){
                count++;
                if(count > transArray.length){
                    count = 0;
                }
                MobileUI.tranMain.css({"-webkit-transform":"rotateZ("+transArray[count]+"deg) scale(1.5)"});
            });


    }


};



$(function(){
	MobileEvent.init();
});
