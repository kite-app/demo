define(['jquery','doT','director','pay'],function($,tpl,route,wx){

	var payFun = function(){
		var moneyFlag = window.location.href.split("money=")[1];
		var sliceNum = moneyFlag.indexOf("#");
		if(sliceNum !== -1){
			var moneyFlag = moneyFlag.slice(0,sliceNum);		
		}	
		console.log(moneyFlag)
		switch(moneyFlag){
			case "2":
				$('.wxpay-tips').html("支付2元抢1~5元红包");
				$('.wxpay-money').html('2');
				break;
			case "10":
				$('.wxpay-tips').html("支付9.9元抢1~100元红包");
				$('.wxpay-money').html('9.9');
				break;
			case "50":
				$('.wxpay-tips').html("支付49.9元抢1~200元红包");
				$('.wxpay-money').html('49.9');

				break;
			default:
				$('.wxpay-tips').html("支付99.9元抢1~300元红包");
				$('.wxpay-money').html('99.9');;	
		}
		$('.activity-url').on('click',function(){
			window.location.href = "http://127.0.0.1:8020/redPacket/src/index.html#/activity";
		})
	}
	
	payFun();

})