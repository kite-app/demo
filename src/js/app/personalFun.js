define(["jquery","doT","director"],function($,tpl,route){
	var personalFun = function(){
		$('#main').load("views/personal.html",function(){
			$('#main-box').hide();
			$('#main-body').show();
			//导航
			$('.recharge li').on('click',function(){
				var index = $(this).index();
				switch(index){
					case 0:						
						break;
					case 1:
						window.location.hash = "#/record";
						break;
					case 2:
						$('#record').show();
						break;
					default:
					 	window.location.hash = "#/service";
					
				}
			})
		})
	}
	
	return {
		personalFun:personalFun
	}
})