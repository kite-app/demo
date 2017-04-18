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
		require(['extensionFun'],function(extension){
			extension.extensionFun();
			
		})	
	}
	var service = function(){
		clearTimeout(init);	
		require(['serviceFun'],function(service){
			service.serviceFun();
			
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
