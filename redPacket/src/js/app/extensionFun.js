define(["jquery","doT","director"],function($,tpl,route){
	var extensionFun = function(){
		$('.content').load("views/main-tpl.html",function(){
			var main_tpl = tpl.template($('#extension-tpl').html());
			$('.content').html(main_tpl());
		})
	}
	
	return {
		extensionFun:extensionFun
	}
})