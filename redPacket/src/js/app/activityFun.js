define(['jquery','doT','director'],function($,tpl,route){
	var activityFun = function(){
		$('.content').load("views/main-tpl.html",function(){
			var activity_tpl = tpl.template($('#activity-tpl').html());
			$('.content').html(activity_tpl);
		})
	}
	
	return {
		activityFun:activityFun
	}
})
