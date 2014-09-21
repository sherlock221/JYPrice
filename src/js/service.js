var MobileUI = {

    bottomTrinagle : $(".bottom-trinagle"),
    screen01       : $("#screen01"),
    topTrinagle    : $(".top-trinagle"),
    bgMain         : $("#bg-main")
};

var MobileEvent = {
	init : function(){
		this.form();
	},
	form : function(){


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
                console.log("top trin");
                //动画重置
                MobileUI.bgMain.siblings().addClass("hide");
                MobileUI.bgMain.removeClass("hide");
            });
	}


};



$(function(){
	MobileEvent.init();
});
