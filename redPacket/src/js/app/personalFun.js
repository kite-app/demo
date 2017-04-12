define(["jquery","doT","director"],function($,tpl,route){
	var personalFun = function(){
		$('.content').load("views/main-tpl.html",function(){
			var main_tpl = tpl.template($('#personal-tpl').html());
			$('.content').html(main_tpl());
			var titleText = "个人中心";
			$('title').html(titleText);
			document.title = titleText;
			var $iframe = $('<iframe style="display: none;" src="image/favicon.ico"></iframe>').on('load', function() {
			  setTimeout(function() {
			    $iframe.off('load').remove();
			  })
			}).appendTo($('body'));
		})
	}
	
	return {
		personalFun:personalFun
	}
})