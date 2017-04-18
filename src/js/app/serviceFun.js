define(["jquery","doT","director"],function($,tpl,route){
	var serviceFun = function(){
		$('#main').load("views/service.html",function(){
			$('#main-box').hide();
			$('#main-body').show();
		})
	}
	
	return {
		serviceFun:serviceFun
	}
})