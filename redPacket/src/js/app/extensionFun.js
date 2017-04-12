define(["jquery","doT","director"],function($,tpl,route){
	var extensionFun = function(){
		$('.content').load("views/main-tpl.html",function(){
			var extension_tpl = tpl.template($('#extension-tpl').html());
			$('.content').html(extension_tpl());		
		})
	}
	
	return {
		extensionFun:extensionFun
	}
})