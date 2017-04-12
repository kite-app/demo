define(["jquery","doT","director"],function($,tpl,route){
	var recordFun = function(){
		$('.content').load("views/main-tpl.html",function(){
			var main_tpl = tpl.template($('#record-tpl').html());
			$('.content').html(main_tpl());
		})
	}
	
	return {
		recordFun:recordFun
	}
})