var Images = {
    "chunmaoxuan" : {
        imgs : [
            "../../img/chumaoxuan-01.png",
            "../../img/chumaoxuan-02.jpg"
        ]
    },
    "baixianfu" : {
        imgs : [


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
    screenAll      : $("#screen-all")
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
          //


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
    }

};



$(function(){
	MobileEvent.init();
});
