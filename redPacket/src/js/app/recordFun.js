define(["jquery","doT","director"],function($,tpl,route){
	var recordFun = function(){
		$('.content').load("views/main-tpl.html",function(){
			var main_tpl = tpl.template($('#record-tpl').html());
			$('.content').html(main_tpl());
			var titleText = "红包记录";
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
		recordFun:recordFun
	}
})