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
	}
};



$(function(){
	MobileEvent.init();
});
