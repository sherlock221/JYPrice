var Images = {
    "chunmaoxuan" : {
        imgs : [
            "img/chunmaoxuan/chumaoxuan-01.png",
            "img/chunmaoxuan/chumaoxuan-02.jpg",
            "img/chunmaoxuan/chumaoxuan-03.jpg",
            "img/chunmaoxuan/chumaoxuan-04.jpg",
            "img/chunmaoxuan/chumaoxuan-05.jpg",
            "img/chunmaoxuan/chumaoxuan-06.jpg"
        ]
    },
    "baixianfu" : {
        imgs : [
            "img/baixianfu/baixianfu-01.jpg",
            "img/baixianfu/baixianfu-02.jpg",
            "img/baixianfu/baixianfu-03.jpg",
            "img/baixianfu/baixianfu-04.jpg",
            "img/baixianfu/baixianfu-05.jpg",
            "img/baixianfu/baixianfu-06.jpg"

        ]
    },

    "jinmaowan" : {
        imgs : [
            "img/jinmaowan/jinmaowan-01.jpg",
            "img/jinmaowan/jinmaowan-02.jpg",
            "img/jinmaowan/jinmaowan-03.jpg"


        ]
    },
    "jinmaoyue" : {
        imgs : [
            "img/jinmaoyue/jinmaoyue-01.jpg",
            "img/jinmaoyue/jinmaoyue-02.jpg",
            "img/jinmaoyue/jinmaoyue-03.jpg",
            "img/jinmaoyue/jinmaoyue-04.jpg",
            "img/jinmaoyue/jinmaoyue-05.jpg",
            "img/jinmaoyue/jinmaoyue-06.jpg",
            "img/jinmaoyue/jinmaoyue-07.jpg",
            "img/jinmaoyue/jinmaoyue-08.jpg",
            "img/jinmaoyue/jinmaoyue-09.jpg"

        ]
    },

    "qianzhangshu" : {
        imgs : [
            "img/qianzhangshu/qianzhangshu-01.jpg",
            "img/qianzhangshu/qianzhangshu-02.jpg",
            "img/qianzhangshu/qianzhangshu-03.jpg",
            "img/qianzhangshu/qianzhangshu-04.jpg",
            "img/qianzhangshu/qianzhangshu-05.jpg",
            "img/qianzhangshu/qianzhangshu-06.jpg"

        ]
    },


    "tianzhougucheng" : {
        imgs : [
            "img/tianzhougucheng/tianzhougucheng-01.jpg",
            "img/tianzhougucheng/tianzhougucheng-02.jpg",
            "img/tianzhougucheng/tianzhougucheng-03.jpg",
            "img/tianzhougucheng/tianzhougucheng-04.jpg",
            "img/tianzhougucheng/tianzhougucheng-05.jpg",
            "img/tianzhougucheng/tianzhougucheng-06.jpg",
            "img/tianzhougucheng/tianzhougucheng-07.jpg",
            "img/tianzhougucheng/tianzhougucheng-08.jpg",
            "img/tianzhougucheng/tianzhougucheng-09.jpg"

        ]
    },

    "xinduhui" : {
        imgs : [
            "img/xinduhui/xinduhui-01.jpg",
            "img/xinduhui/xinduhui-02.jpg",
            "img/xinduhui/xinduhui-03.jpg",
            "img/xinduhui/xinduhui-04.jpg",
            "img/xinduhui/xinduhui-05.jpg",
            "img/xinduhui/xinduhui-06.jpg",
            "img/xinduhui/xinduhui-07.jpg"

        ]
    },

    "yulongwan" : {
        imgs : [
            "img/yulongwan/yulongwan-01.jpg",
            "img/yulongwan/yulongwan-02.jpg",
            "img/yulongwan/yulongwan-03.jpg",
            "img/yulongwan/yulongwan-04.jpg",
            "img/yulongwan/yulongwan-05.jpg",
            "img/yulongwan/yulongwan-06.jpg",
            "img/yulongwan/yulongwan-07.jpg",
            "img/yulongwan/yulongwan-08.jpg",
            "img/yulongwan/yulongwan-09.jpg",
            "img/yulongwan/yulongwan-10.jpg",
            "img/yulongwan/yulongwan-11.jpg",
            "img/yulongwan/yulongwan-12.jpg"
        ]
    }

};






//js获取url参数的function
function request(paras){
    var url = location.href;
    var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");
    var paraObj = {}
    for (i=0; j=paraString[i]; i++){
        paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf
        ("=")+1,j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if(typeof(returnValue)=="undefined"){
        return "";
    }else{
        return returnValue;
    }
}







var MobileUI = {
    screenAll      : $("#screen-all"),
    menu           : $("#menu"),
    menu_layer     : $("#left-content"),
    close          : $("#close")
};



var MobileEvent = {
	init : function(){
		this.form();
        //保证android下流畅 启动动画
//       MobileUI.screen01.removeClass("hide");
	},
	form : function(){


         //初始化页面
          var tp = request("tp");
          var object =Images[tp];

        var temp = "";
        for(var i=0; i<object.imgs.length;i++){
             var im = object.imgs[i];
             var image = '<image src="'+im+'" class="response-img" />';
              temp += '<li class="screen" >'+
                 '<div class="content">'
                 +image
                 +'</div>'
                 +'</li>';
         }


        MobileUI.screenAll.html(temp);

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

                }
            });

        //绑定menu
        MobileUI.menu.tap(function(){
            MobileUI.menu_layer.show();
        });

        MobileUI.close.tap(function(){
            MobileUI.menu_layer.hide();
        });


        MobileUI.menu_layer.on("tap",".trans-main",function(){


            var $parent =  $(this).closest(".trans-content");
            var $other  = $parent.siblings();
            var $ul = $parent.find("ul");
            $other.find("ul").addClass("hide");

            if($ul.hasClass("hide")){
                $ul.removeClass("hide");
            }
            else{
                $ul.addClass("hide");
            }


        });

    }





};



$(function(){
	MobileEvent.init();
});
