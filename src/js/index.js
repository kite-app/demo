define(["jquery","doT","director"],function($,tpl,route){
	require(['routes'],function(route){
		$('#main-box').load('views/main.html',function(){			
			$('#main-box').show();
			$('.btn-list li').on('click',function(){
				
				var index = $(this).index();
				switch(index){
					case 0: 
						window.location.hash = "#/activity";
						$(this).addClass("active").siblings().removeClass("active");
						break;
					case 1:
						window.location.hash = "#/record";
						$(this).addClass("active").siblings().removeClass("active");
						break;
					case 2:
						window.location.hash = "#/personal";
						$(this).addClass("active").siblings().removeClass("active");
						break;
					case 3: 
						window.location.hash = "#/extension";
						$(this).addClass("active").siblings().removeClass("active");
					
					break;
					default:
						window.location.hash = "#/service";
						$(this).addClass("active").siblings().removeClass("active");
						
				}
		})
			
		})
	})

});
 
	