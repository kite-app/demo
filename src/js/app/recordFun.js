define(["jquery","doT","director"],function($,tpl,route){
	var recordFun = function(){
		$('#main').load("views/record.html",function(){
			$('#main-box').hide();
			$('#main-body').show();
		})
	}
	
	return {
		recordFun:recordFun
	}
})