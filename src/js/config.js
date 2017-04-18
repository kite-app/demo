require.config({
	baseUrl:'../src/js/app',
	paths:{	
		"jquery":'../lib/jquery.min',
		"css":"../lib/css.min",
	   	"doT":'../lib/doT.min',
		"director":'../lib/director.min',
		"pay":'../lib/WXpay',
	},
	map: {
        '*': {
            'css': '../css.min'
        }
    },
	//依赖关系
		shim: {
      		"selectDate":{
//    			deps: ['css!../../css/DateSelector.css']
      		},
//    		"index":{
//    			exports:"date",
//    			deps: ['css!../../css/ui-mcalendar.css']
//    		}
	},
	
})
