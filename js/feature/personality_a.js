//Joe
(function (){
	document.getElementById("sum_of_people").style.height='400px';
	var myChart = echarts.init(document.getElementById('sum_of_people'));
	
	var option = {
		title : {
			text: 'Joe性格分析',
			subtext: '事件驱动',
			x:'center'
		},
		tooltip : {
			show: true,
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient : 'vertical',
			x : 'left',
			data:['心酸','可爱','暖男','贴心','哭泣']
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		series : [
			
			{
				name:'访问来源',
				type:'pie',
				clockWise:true,
				startAngle: 135,
				center: ['50%', '55%'],
				radius : [80, 120],
				itemStyle :　{
					normal : {
						label : {
							show : false
						},
						labelLine : {
							show : false
						}
					},
					emphasis : {
						label : {
							show : true,
							position : 'center',
							formatter : "{d}%",
							textStyle : {
								color : 'red',
								fontSize : '30',
								fontFamily : '微软雅黑',
								fontWeight : 'bold'
							}
						}
					}
				},
				data:[
					{value:55, name:'心酸'},
					{value:30, name:'暖男'},
					{value:40, name:'可爱'},
					{value:20, name:'贴心'},
					{value:58, name:'哭泣'}
				]
			}
		]
	};
	myChart.setOption(option);
})();

//Feyman性格分析
(function (){
	document.getElementById("sum_of_people2").style.height='400px';
	var myChart = echarts.init(document.getElementById('sum_of_people2'));
	
	var option = {
		title : {
			text: 'Feyman性格分析',
			subtext: '事件驱动',
			x:'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient : 'vertical',
			x : 'left',
			data:['高冷','听话','帅气','可爱','害羞']
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		series : [
			{
				name:'Feyman性格分析',
				type:'pie',
				radius : [40, 110],
				roseType : 'area',
				center: ['50%', '55%'],
				data:[
					{value:60, name:'高冷'},
					{value:10, name:'听话'},
					{value:52, name:'帅气'},
					{value:41, name:'可爱'},
					{value:30, name:'害羞'}
				]
			}
		]
	};
	myChart.setOption(option);
})();

//姐姐性格分析
(function (){
	document.getElementById("sum_of_people3").style.height='400px';
	var myChart = echarts.init(document.getElementById('sum_of_people3'));
	
	var option = {
		title : {
			text: 'Grace姐姐性格分析',
			subtext: '语意分析',
			x:'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient : 'vertical',
			x : 'left',
			data:['可爱','呆萌','美丽','听话','胆小']
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		series : [
			{
				name:'Grace姐姐性格分析',
				type:'pie',
				radius : '65%',
				center: ['50%', '52%'],
				data:[
					{value:50, name:'可爱'},
					{value:48, name:'呆萌'},
					{value:30, name:'美丽'},
					{value:8, name:'听话'},
					{value:30, name:'胆小'}
				]
			}
		]
	};
	myChart.setOption(option);
})();

//多多
(function (){
	document.getElementById("sum_of_people4").style.height='400px';
	var myChart = echarts.init(document.getElementById('sum_of_people4'));
	
	var dataStyle = {
		normal: {
			label: {show:false},
			labelLine: {show:false}
		}
	};
	var placeHolderStyle = {
		normal : {
			color: 'rgba(0,0,0,0)',
			label: {show:false},
			labelLine: {show:false}
		},
		emphasis : {
			color: 'rgba(0,0,0,0)'
		}
	};
	var option = {
		title: {
			text: '多多性格分析',
			subtext: '语意分析',
			x: 'center',
			y: 'center',
			itemGap: 20,
			textStyle : {
				color : 'rgba(30,144,255,0.8)',
				fontFamily : '微软雅黑',
				fontSize : 35,
				fontWeight : 'bolder'
			}
		},
		tooltip : {
			show: true,
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient : 'vertical',
			x : document.getElementById('sum_of_people4').offsetWidth / 2+5,
			y : 55,
			itemGap:12,
			data:['57%的词形容多多懂事','28%的词夸赞多多漂亮','15%的其他形容词']
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		series : [
			{
				name:'1',
				type:'pie',
				clockWise:false,
				radius : [150, 125],
				itemStyle : dataStyle,
				data:[
					{
						value:57,
						name:'57%的词形容多多懂事'
					},
					{
						value:43,
						name:'invisible',
						itemStyle : placeHolderStyle
					}
				]
			},
			{
				name:'2',
				type:'pie',
				clockWise:false,
				radius : [125, 100],
				itemStyle : dataStyle,
				data:[
					{
						value:28, 
						name:'28%的词夸赞多多漂亮'
					},
					{
						value:72,
						name:'invisible',
						itemStyle : placeHolderStyle
					}
				]
			},
			{
				name:'3',
				type:'pie',
				clockWise:false,
				radius : [100, 75],
				itemStyle : dataStyle,
				data:[
					{
						value:15, 
						name:'15%的其他形容词'
					},
					{
						value:85,
						name:'invisible',
						itemStyle : placeHolderStyle
					}
				]
			}
		]
	};
	myChart.setOption(option);
})();

//人物性格通性分析（孩子）
(function (){
	document.getElementById("sum_of_ba_personality").style.height='400px';
	var myChart = echarts.init(document.getElementById('sum_of_ba_personality'));
	
	var option = {
		title: {
			text: '《爸爸去哪儿》人物性格表达',
			subtext: '新浪微博文本数据',
			x: 'center'
		},
		tooltip: {
			trigger: 'axis',
			formatter: '{a}-{d}<br/>{b0}:{c0}<br/>{b1}:{c1}<br/>{b2}:{c2}<br/>{b3}:{c3}<br/>{b4}:{c4}<br/>{b5}:{c5}'
		},
		legend: {
			x: 'left',
			data: ['杨阳洋', 'Feyman', '多多', 'Joe', '姐姐', '贝儿'],
			orient: 'vertical'
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable: true,
		polar: [
			{
				indicator : [
					{ text : '可爱', max  : 320 },
					{ text : '勇敢', max  : 30 },
					{ text : '懂事', max  : 40 },
					{ text : '帅气', max  : 42 },
					{ text : '善良', max  : 30 }
				],
				center : ['50%', 240],
				radius : 120,
				startAngle: 90,
				splitNumber: 5,
				name : {
					formatter:'{value}',
					textStyle: {color:'black'}
				},
				scale: true,
				splitLine : {
					show : true,
					lineStyle : {
						width : 2,
						color : 'gray'
					}
				}
			}
		],
		series: [
			{
				name: '人物性格分析雷达图',
				type: 'radar',
				itemStyle: {
					normal: {
						areaStyle: {
							type: 'default'
						}
					}
				},
				data: [
					{
						value : [64, 25, 27, 2, 4],
						name : '杨阳洋'
					},
					{
						value : [21, 15, 2, 40, 1],
						name : 'Feyman'
					},
					{
						value : [68, 18, 38, 14, 3],
						name : '多多'
					},
					{
						value : [150, 5, 8, 30, 25],
						name : 'Joe'
					},
					{
						value: [303, 26, 4, 1, 1],
						name: '姐姐'
					},
					{
						value: [91, 22, 16, 39, 28],
						name: '贝儿', 
						itemStyle: {
							normal: {
							},
							label: {
                                show: true,
                                formatter:function(seriesName, indicatorName, value) {
                                    return value;
                                }
                            },
						}
					}
				]
			}
		]
	};
	myChart.setOption(option);
})();

//人物性格通性分析（父亲）
(function (){
	document.getElementById('sum_of_child_personality').style.height='400px';
	var myChart = echarts.init(document.getElementById('sum_of_child_personality'));
	
	var option = {
		title: {
			text: '《爸爸去哪儿》爸爸们性格表达',
			subtext: '新浪微博文本数据',
			x: 'center'
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			x: 'left',
			data: ['杨威', '吴镇宇', '黄磊', '曹格', '陆毅'],
			orient: 'vertical'
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable: true,
		polar: [
			{
				indicator : [
					{ text : '稳重', max  : 35 },
					{ text : '完美', max  : 20 },
					{ text : '年轻', max  : 25 },
					{ text : '亲切', max  : 28 },
					{ text : '神秘', max  : 6 },
					{ text : '霸气', max  : 15 }
				],
				center : ['50%', 240],
				radius : 120
			}
		],
		series: [
			{
				name: '人物性格分析雷达图',
				type: 'radar',
				itemStyle: {
					normal: {
						areaStyle: {
							type: 'default'
						}
					}
				},
				data: [
					{
						value : [28, 10, 20, 9, 0, 5],
						name : '杨威'
					},
					{
						value : [22, 12, 4, 16, 5, 14],
						name : '吴镇宇'
					},
					{
						value : [32, 18, 18, 26, 1, 4],
						name : '黄磊'
					},
					{
						value : [20, 6, 24, 24, 1, 2],
						name : '曹格'
					},
					{
						value: [18, 18, 19, 20, 2, 6],
						name: '陆毅'
					}
				]
			}
		]
	};
	myChart.setOption(option);
})();

//人物分析
(function () {
	document.getElementById("analytics_by_words").style.height='400px';
	var myChart = echarts.init(document.getElementById('analytics_by_words'));
	
	var option = {
		title: {
			text: '爸爸去哪儿小朋友性格分析',
			subtext: '新浪微博数据',
			x: 'left'
		},
		tooltip: {
			show: true,
			showContent: true,
			trigger: 'axis',
			showDelay: 10,
			hideDelay: 50,
			axisPointer: {
				type: 'line',
				lineStyle : {
				  width: 2,
				  type: 'solid',
				  color: '#48'
				}
			},
			textStyle: {
				fontFamily: '微软雅黑',
				align: 'left',
				baseline: 'middle'
			}
		},
		toolbox: {
			show : true,
			x: 'right',
			y: 30,
			feature : {
				magicType : {show: true, type: ['line', 'bar']},
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		legend: {
			orient: 'horizontal',
			x: 'center',
			y: 'top',
			padding: 30,
			itemGap: 10,
			textStyle: {color: 'auto'},
			data: ['可爱', '勇敢', '懂事', '帅气', '善良']
		},
		dataZoom : {
			show : true,
			realtime : true,
			start : 0,
			end : 100
		},
		grid: {
			y: 70
		},
		xAxis: [
			{
				type: 'category',
				name: 'Time',
				nameLocation: 'end',
				boundaryGap: true,
				axisTick: {
					show: true
				},
				axisLabel: {
					show: true,
					clickable: true
				},
				data: [
					'杨阳洋', 'Feyman', '多多', 'Joe', '姐姐', '贝儿'
				]
			}
		],
		yAxis : [
			{
				type: 'value',
				name: 'Rate',
				nameLocation: 'end',
				boundaryGap: [0,0.1],
				axisTick: {
					show: true
				},
				axisLabel: {
					show: true,
					formatter: '{value} 次提及'
				}
			}
		],
		series : [
			{
				name: '可爱',
				type: 'bar',
				//itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data: [103,68,39,91,64,21],
				markPoint: {
					data: [
						{type: 'max', name: '最可爱'},
						{type: 'min', name: '最成熟'}
					]
				}
			},
			{
				name: '勇敢',
				type: 'bar',
				//itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data: [60,56,62,26,20,15],
				markPoint: {
					data: [
						{type: 'max', name: '最勇敢'}
					]
				}
			},
			{
				name: '懂事',
				type: 'bar',
				//itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data: [35,50,86,30,38,20],
				markPoint: {
					data: [
						{type: 'max', name: '最懂事'},
						{type: 'min', name: '最有待成长'}
					]
				}
			},
			{
				name: '帅气',
				type: 'bar',
				//itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data: [23,80,5,56,4,2]
			},
			{
				name: '善良',
				type: 'bar',
				//itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data: [35,39,35,32,45,50]
			}
		]
	};
	myChart.setOption(option);
})();

var emotion_data = [
	{value: 15180, name: '姐姐'},
	{value: 17290, name: 'Feyman'},
	{value: 4723, name: '多多'},
	{value: 5826, name: '杨阳洋'},
	{value: 6540, name: '贝儿'},
	{value: 4731, name: 'Joe'}
];
var parti_number = 39179;
var dad_data = [
	{value: 13642, name: '吴镇宇'},
	{value: 10319, name: '曹格'},
	{value: 8847, name: '黄磊'},
	{value: 4526, name: '杨威'},
	{value: 5811, name: '陆毅'}
];

//vote_for_emotion
(function () {
	document.getElementById("vote_for_emotion").style.height='400px';
	var myChart = echarts.init(document.getElementById('vote_for_emotion'));
	
	var option = {
		title: {
			text: '谁是最萌表情帝？',
			subtext: '新浪微博投票结果',
			x: 'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c}票"
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		legend: {
			data : ['姐姐', 'Feyman', '多多', '杨阳洋', '贝儿', 'Joe'],
			x: 'left',
			orient: 'vertical'
		},
		calculable : true,
		series : [
			{
				name: '最萌表情帝',
				type: 'pie',
				center: ['50%', '55%'],
				data: emotion_data,
				min: 0,
				max: parti_number,
				minSize: '0%',
				maxSize: '100%'
			}
		]
	};
	myChart.setOption(option);
})();

var mom_data = [
	{value: 15180, name: '吴速玲（姐姐、Joe）'},
	{value: 17290, name: '王丽萍（Feyman）'},
	{value: 4723, name: '孙莉（多多）'},
	{value: 5826, name: '杨云（杨阳洋）'},
	{value: 6540, name: '鲍蕾（贝儿）'}
];
var mom_number = 39179;

//vote_for_mom
(function () {
	document.getElementById("vote_for_mom").style.height='400px';
	var myChart = echarts.init(document.getElementById('vote_for_mom'));
	
	var option = {
		title: {
			text: '谁是你眼中的超级辣妈？',
			subtext: '新浪微博投票结果',
			x: 'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c}票"
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		legend: {
			data : ['吴速玲（姐姐、Joe）', '王丽萍（Feyman）', '孙莉（多多）', '杨云（杨阳洋）', '鲍蕾（贝儿）'],
			x: 'left',
			orient: 'vertical'
		},
		calculable : true,
		series : [
			{
				name: '最美妈妈',
				type: 'pie',
				center: ['50%', '55%'],
				data: mom_data,
				min: 0,
				max: mom_number,
				minSize: '0%',
				maxSize: '100%'
			}
		]
	};
	myChart.setOption(option);
})();

//伊利QQ星-你最欣赏哪个爸爸投票
(function () {
	document.getElementById("vote_for_dad").style.height='400px';
	var myChart = echarts.init(document.getElementById('vote_for_dad'));
	
	var option = {
		title: {
			text: '你最欣赏哪个爸爸-投票分析',
			subtext: '新浪微博投票结果',
			x: 'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c}票（占{d}%）"
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		legend: {
			orient: 'vertical',
			x: 'left',
			data : ['吴镇宇', '曹格', '黄磊', '杨威', '陆毅']
		},
		calculable : true,
		series : [
			{
				name: '最好爸爸',
				type: 'pie',
				center: ['50%', '55%'],
				radius: ['50%', '75%'],
				data: dad_data
			}
		]
	};
	myChart.setOption(option);
})();

