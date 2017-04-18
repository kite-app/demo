define(["jquery","doT","director"],function($,tpl,route){
	var mainFun = function(){
		$('#main').load("views/main.html",function(){
			$('#main-box').show();
			$('#main-body').hide();
		})
	}
	
	return {
		mainFun:mainFun
	}
})