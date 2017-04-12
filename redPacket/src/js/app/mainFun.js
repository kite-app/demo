define(["jquery","doT","director"],function($,tpl,route){
	var mainFun = function(){
		$('.content').load("views/main-tpl.html",function(){
			var main_tpl = tpl.template($('#main-tpl').html());
			$('.content').html(main_tpl());
			
			//选择金额挑战支付页面
			$('body').on('click',".main-list li",function(){
				var index = $(this).index();
				switch(index){
					case 0://选择2元						
						window.location.href = "http://127.0.0.1:8020/redPacket/src/wxPay.html?money=2";
						break;
					case 1://选择5元	
						window.location.href = "http://127.0.0.1:8020/redPacket/src/wxPay.html?money=10";
						break;
					case 2://选择50元	
						window.location.href = "http://127.0.0.1:8020/redPacket/src/wxPay.html?money=50";
						break;
					default://选择100元	
						window.location.href = "http://127.0.0.1:8020/redPacket/src/wxPay.html?money=100";
				}
			})
		})
	}
	
	return {
		mainFun:mainFun
	}
})