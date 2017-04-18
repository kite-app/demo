define(["jquery","doT","director"],function($,tpl,route){
	var extensionFun = function(){
		$('#main').load("views/extension.html",function(){
			$('#main-box').hide();
			$('#main-body').show();
		})
	}
	
	return {
		extensionFun:extensionFun
	}
})