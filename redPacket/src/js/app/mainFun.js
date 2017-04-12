define(["jquery","doT","director"],function($,tpl,route){
	var mainFun = function(){
		$('.content').load("views/main-tpl.html",function(){
			var main_tpl = tpl.template($('#main-tpl').html());
			$('.content').html(main_tpl());
		})
	}
	
	return {
		mainFun:mainFun
	}
})