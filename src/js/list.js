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
            "img/jinmaoyue/jinmaoyue-06.jpg"


        ]
    },

    "qianzhangshu" : {
        imgs : [
            "img/qianzhangshu/qianzhangshu-01.jpg",
            "img/qianzhangshu/qianzhangshu-02.jpg",
            "img/qianzhangshu/qianzhangshu-03.jpg",
            "img/qianzhangshu/qianzhangshu-04.jpg",
            "img/qianzhangshu/qianzhangshu-05.jpg"


        ]
    },
    tbdyunji : {
        imgs : [
            "img/tbdyunji/tbdyunji-01.jpg",
            "img/tbdyunji/tbdyunji-02.jpg",
            "img/tbdyunji/tbdyunji-03.jpg"

        ]
    },

    qingyuntianxia :{
        imgs : [
            "img/qingyuntianxia/qingyuntianxia-01.jpg",
            "img/qingyuntianxia/qingyuntianxia-02.jpg",
            "img/qingyuntianxia/qingyuntianxia-03.jpg",
            "img/qingyuntianxia/qingyuntianxia-04.jpg",
            "img/qingyuntianxia/qingyuntianxia-05.jpg",
            "img/qingyuntianxia/qingyuntianxia-06.jpg",
            "img/qingyuntianxia/qingyuntianxia-07.jpg",
            "img/qingyuntianxia/qingyuntianxia-08.jpg"

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
    },
    end : "img/end/end.jpg"


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
    close          : $("#close"),
    $arrow         : $("#arrow")
};


var length;

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

          //添加end
        object.imgs.push(Images.end);

        length = object.imgs.length;

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

                    MobileUI.$arrow.addClass("hide");

                },
                onScroll: function(name, obj){
                },
                onTouchEnd: function(name, obj){
                },
                scrollEnd: function(index){
                    if(index == length-1){
                        MobileUI.$arrow.addClass("hide");
                    }
                    else{
                        if(MobileUI.$arrow.hasClass("hide")){
                            MobileUI.$arrow.removeClass("hide");
                        }
                    }
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


        if(typeof(WeixinApi)!="undefined"){

            //分享
            WeixinApi.ready(function(Api){

                // 微信分享的数据
                var wxData = {
                    "imgUrl":'',
                    "link":'http://121.42.27.119/JYPrice/index.html',
                    "desc":'二零壹三年度 洋正獲獎作品',
                    "title":"金羊獎"
                };

                // 分享的回调
                var wxCallbacks = {
                    // 分享操作开始之前
                    ready:function () {
                        // 你可以在这里对分享的数据进行重组
                    },
                    // 分享被用户自动取消
                    cancel:function (resp) {

                        // 你可以在你的页面上给用户一个小Tip，为什么要取消呢？
                    },
                    // 分享失败了
                    fail:function (resp) {
                        alert("不要紧，可能是网络问题，一会儿再试试！");
                        // 分享失败了，是不是可以告诉用户：不要紧，可能是网络问题，一会儿再试试？
                    },
                    // 分享成功
                    confirm:function (resp) {
                        alert("分享成功！");
                        // 分享成功了，我们是不是可以做一些分享统计呢？
                    },
                    // 整个分享过程结束
                    all:function (resp) {
                        // 如果你做的是一个鼓励用户进行分享的产品，在这里是不是可以给用户一些反馈了？
                    }
                };

                // 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
                Api.shareToFriend(wxData, wxCallbacks);

                // 点击分享到朋友圈，会执行下面这个代码
                Api.shareToTimeline(wxData, wxCallbacks);

                // 点击分享到腾讯微博，会执行下面这个代码
                Api.shareToWeibo(wxData, wxCallbacks);
            });


        };


    }





};



$(function(){
	MobileEvent.init();
});
