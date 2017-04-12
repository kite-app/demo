define(['jquery'],function($){
	var  load = function(){

	$(".main").html(
		"<div id='load-box'>"+
		"<img src='image/load.gif'  alt='load' />" + 
		"<span >加载中...</span>"+
	"</div>"
	);
	var load_box = $('#load-box');
	var h = ($(document).height()-280 )/2 + 'px';
	var w = ($(document).width()-80 )/2 + 'px';
	load_box.css({
		left:w,
		top:h
	})	
	}
	var loadFail = function(){
		$(".main").html(
		"<div id='load-box'>"+
		"<span >加载失败</span>"+
	"</div>"
	);
	var load_box = $('#load-box');
	var h = ($(document).height()-80 )/2 + 'px';
	var w = ($(document).width()-80 )/2 + 'px';
	load_box.css({
		left:w,
		top:h
	})
	}
	
	return{ 
		load:load, loadFail:loadFail
	};
})
//	$.ajax({ 
//    	url:$('#test-form').attr('action'), //发送后台的url
//    	type:'get', 
//		async:false, //同步请求，默认情况下是异步（true）
//    	data:$('#test-form').serialize(), //序列化表单内容
//    	dataType:'text', //后台返回的数据类型
//    	timeout:15000, //超时时间
//    	beforeSend:function(XMLHttpRequest){ 
//        $("#loading").html("<img src='./images/loading.gif' />"); //在后台返回success之前显示loading图标
//   	}, 
//   	success:function(data){  //data为后台返回的数据
//       	$("#loading").empty(); //ajax返回成功，清除loading图标
//       	$('#res').html('ajax请求成功！');
//     	}
//		}); 
//	});