define(['jquery','doT','director'],function($,tpl,route){
	var activityFun = function(){
		$('.content').load("views/main-tpl.html",function(){
			var activity_tpl = tpl.template($('#activity-tpl').html());
			$('.content').html(activity_tpl);
			var titleText = "抢红包";
			$('title').html(titleText);
			document.title = titleText;
			var $iframe = $('<iframe style="display: none;" src="image/favicon.ico"></iframe>').on('load', function() {
			  setTimeout(function() {
			    $iframe.off('load').remove();
			  })
			}).appendTo($('body'));
			// fdfasfasa
		})
	}
	
	return {
		activityFun:activityFun
	}
})
