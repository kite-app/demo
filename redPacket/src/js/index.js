define(["jquery","doT","director"],function($,tpl,route){
	require(['routes'],function(route){
		$('.btn-list li').on('click',function(){
			var index = $(this).index();
			switch(index){
				case 0: window.location.hash = "#/activity";break;
				case 1:	window.location.hash = "#/record";break;
				case 2:	window.location.hash = "#/personal";break;
				case 3: 
					window.location.hash = "#/extension";
					$('.content').load("views/main-tpl.html",function(){
						var main_tpl = tpl.template($('#extension-tpl').html());
						$('.content').html(main_tpl());
					})	
				break;
				default:
					window.location.hash = "#/service";
					$('.content').load("views/main-tpl.html",function(){
						var service_tpl = tpl.template($('#service-tpl').html());
						$('.content').html(service_tpl());
					})	
			}
		})
	})

});
 
	