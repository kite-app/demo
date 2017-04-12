define(["jquery","doT","director"],function($,tpl,route){
	require(['routes'],function(route){
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
					$('.content').load("views/main-tpl.html",function(){
						var extension_tpl = tpl.template($('#extension-tpl').html());
						$('.content').html(extension_tpl());
						var titleText = "推广";
						$('title').html(titleText);
						document.title = titleText;
						var $iframe = $('<iframe style="display: none;" src="image/favicon.ico"></iframe>').on('load', function() {
						  setTimeout(function() {
						    $iframe.off('load').remove();
						  })
						}).appendTo($('body'));
					})	
				break;
				default:
					window.location.hash = "#/service";
					$(this).addClass("active").siblings().removeClass("active");
					$('.content').load("views/main-tpl.html",function(){
						var service_tpl = tpl.template($('#service-tpl').html());
						$('.content').html(service_tpl());
						var titleText = "客服";
						$('title').html(titleText);
						document.title = titleText;
						var $iframe = $('<iframe style="display: none;" src="image/favicon.ico"></iframe>').on('load', function() {
						  setTimeout(function() {
						    $iframe.off('load').remove();
						  })
						}).appendTo($('body'));
					})	
			}
		})
	})

});
 
	