define(['jquery','director','doT'],function($,route,tpl){
	function initFun(){
		window.location.href = '#/main';
	}
	var init = setTimeout(function(){
		initFun();
	})		
	var main = function(){
		clearTimeout(init);	
		require(['mainFun'],function(main){
			main.mainFun();
			
		})	
	}
	var activity = function(){
		clearTimeout(init);	
		require(['activityFun'],function(activity){
			activity.activityFun();
			
		})	
	}
	var record = function(){
		clearTimeout(init);	
		require(['recordFun'],function(record){
			record.recordFun();
			
		})	
	}
	var personal = function(){
		clearTimeout(init);	
		require(['personalFun'],function(personal){
			personal.personalFun();
			
		})	
	}
	var extension = function(){
		clearTimeout(init);
		$('.content').load("views/main-tpl.html",function(){
			var main_tpl = tpl.template($('#extension-tpl').html());
			$('.content').html(main_tpl());
		})	
	}
	var service = function(){
		clearTimeout(init);
		$('.content').load("views/main-tpl.html",function(){
			var service_tpl = tpl.template($('#service-tpl').html());
			$('.content').html(service_tpl());
		})	
	}
 	var routes = {
		'/main':main,
		'/activity':activity,
		'/record':record,
		'/personal':personal,
		'/extension':extension,
		'/service':service
	}
	
	var router = Router(routes);
	router.configure({});
	router.init();
})
