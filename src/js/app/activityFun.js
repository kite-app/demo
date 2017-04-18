define(['jquery','doT','director'],function($,tpl,route){
	var activityFun = function(){
		$('#main').load("views/activity.html",function(){
			$('#main-box').hide();
			$('#main-body').show();
			//选择锤子
			$('.choose li').on('click',function(){
				var chooseIndex = $(this).index();
				switch(chooseIndex){
					case 0:					
						var frequency = $('#ten').html().split('次')[0];
						console.log(frequency)
						if(frequency == 0){
							alert("余额不足，请先充值");
							$('#pay_money').show();

						}else{
							$('.choose').hide();
							$('#time').show();
							$('.begin').show();
						}
						break;
					case 1:
						$('.choose').hide();
						$('#time').show();
						$('.begin').show();
						var frequency = $('#thirty').html().split('次')[0];
						console.log(frequency)
						break;
					default:
						$('.choose').hide();
						$('#time').show();
						$('.begin').show();
						var frequency = $('#fifty').html().split('次')[0];
						console.log(frequency)
				}
			})
			//开始游戏
			$('.begin').on('click',function(){
				$('.begin span').html('3');
				countFun(3)
			})
			//提示信息滚动
			function tipsListFun(){				
				var list =  $(".tips-list");
				var txetList = $(".tips-list li").length+1;
				var perWidth = $('.tips-list li').innerWidth();
				var list_child = $(".tips-list li");
				var maxWidth = $(window).width();
				list_child.css({width:maxWidth+'px'});
				$('.tips-box').css({width:maxWidth+'px',overflow:'hidden'})
			    function left() {
			        list.animate({
			            'left': (-perWidth*txetList) + 'px'
			        },txetList*9000, 'linear', function () {
			            list.css({'left': '0px'})
			            left();
			    	});
				}
			    left();
			}
			tipsListFun();	
//			$('.choose').hide();
//			$('#time').show();

			var suliksList = document.getElementById("suliks");
//			var holeArr =[
//				{t:"239px",l:"15px"},
//				{t:"230px",l:"122px"},
//				{t:"230px",l:"236px"},
//				{t:"322px",l:"10px"},
//				{t:"322px",l:"123px"},
//				{t:"322px",l:"238px"},
//				{t:"403px",l:"10px"},
//				{t:"403px",l:"123px"},
//				{t:"403px",l:"238px"},
//			];
			function randomNum(min,max) {
				return parseInt(Math.random()*(max - min + 1) + min);
			}
//	
//			function createWolf() {
//				var child_div = document.createElement("div");
//				var child_img = document.createElement("img");
//				var hole = holeArr[randomNum(0,8)];
//				child_img.src = "image/1.png";
//				child_div.style.left = hole.l;
//				child_div.style.top = hole.t;
//				child_img.index = 0;
//				child_img.flag = true;
//				child_img.ifClick = false;
//				child_div.className = "suliks";
//				suliksList.appendChild(child_div);	
//				child_div.appendChild(child_img);
//				wolf.onclick = function() {
//					wolf.ifClick = true;
//					wolf.index = 5;
//				}
				
//				wolf.ownTimer = setInterval(function() {
//					if(wolf.flag || wolf.ifClick) {
//						wolf.index++;
//					}else {
//						wolf.index--;
//					}					
//					if(wolf.index >= 5) {
//						wolf.flag = false;
//					}
//					if(wolf.index < 0 || wolf.index > 9) {
//						clearInterval(wolf.ownTimer);
//						wolf.parentNode.removeChild(wolf);
//					}
//					wolf.style.backgroundPosition = - wolf.index * 240 +"px -64px";
//				},300)
				function randomFun(num){
					var chidrenImg = document.getElementById("suliks").children;
					var child_img = document.createElement("img");
					chidrenImg[num].appendChild(child_img);
					chidrenImg[num].flag = true;
					chidrenImg[num].index = 0;
					chidrenImg[num].iFclick = false;
					chidrenImg[num].addEventListener("touchstart",function(e){
					    chidrenImg[num].onclick=null;
						chidrenImg[num].index = 9;
						chidrenImg[num].iFclick = true;
					},false)
//					chidrenImg[num].onclick = function(){
//						
//					}
					chidrenImg[num].imgTime = setInterval(function(){
						if(chidrenImg[num].flag || chidrenImg[num].iFclick){
							chidrenImg[num].index++;					
						}else{
							chidrenImg[num].index--;
							if(chidrenImg[num].index < 0 ){
								console.log('over')
								chidrenImg[num].index = 0;
								chidrenImg[num].flag = false;
								clearInterval(chidrenImg[num].imgTime);
								child_img.parentNode.removeChild(child_img);
							}
						}
						if(chidrenImg[num].index >= 7 || chidrenImg[num].iFclick ) {
							chidrenImg[num].flag = false;
						}
						if(chidrenImg[num].index >9){						
							clearInterval(chidrenImg[num].imgTime);
						
							chidrenImg[num].end = setTimeout(function(){
								child_img.parentNode.removeChild(child_img);
							},300)
						}
						chidrenImg[num].getElementsByTagName('img')[0].src = "image/"+chidrenImg[num].index +".png";						
					},100)					
				}

				var timer = setInterval(function() {
					var num = randomNum(0,8);
					randomFun(num)
				},2000)
//			}
			
//			var timer = setInterval(function() {
//				randomFun();
//			},1000)	
			//游戏说明
			$('#state').on('click',function(){
				$('#game_state').show();
			})
			$('.close-mask').on('click',function(){
				$('#game_state').hide();
				$('#pay_money').hide();
			})
			$('.game_state_d').on('click',function(e){
				e.stopPropagation();
			})
			$('.money_d').on('click',function(e){
				e.stopPropagation();
			})
//			倒计时
			function countFun(num){	
				if(num == 3){
					console.log('3')
					var count = $('.begin span');					
					var timeout= num;
					var s = timeout%60;
					var countTime = setInterval(function(){				
						if(s<10){count.html(s);}else{count.html(s)}s--;
						if(s<0){					
							clearInterval(countTime);
							count.html("Go");
							var endTime = setTimeout(function(){
								$('.begin').hide();
								clearTimeout(endTime);
								countFun(10);
							},500)
						}
					},1000);
					
				}else{
					var count = $('.count-down');
					var timeout= num;
					var s = timeout%60;
					var countTime = setInterval(function(){				
						if(s<10){count.html(s);}else{count.html(s)}s--;
						if(s<0){					
							clearInterval(countTime);
							alert("Game over")
//							count.html("Game over")
						}
					},1000);
				}
			}
			
		})
	}
	
	return {
		activityFun:activityFun
	}
})
