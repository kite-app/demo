define(["jquery","doT","director"],function($,tpl,route){
	var personalFun = function(){
		$('.content').load("views/main-tpl.html",function(){
			var main_tpl = tpl.template($('#personal-tpl').html());
			$('.content').html(main_tpl());
		})
	}
	
	return {
		personalFun:personalFun
	}
})