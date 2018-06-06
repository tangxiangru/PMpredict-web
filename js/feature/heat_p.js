//《爸爸去哪儿》第二季全国网收视率统计
(function (){
	document.getElementById("csm_of_baba").style.height='400px';
	var myChart = echarts.init(document.getElementById('csm_of_baba'));
	
	var option = {
		title: {
			text: '《爸爸去哪儿》第二季全国网收视率统计',
			subtext: '2014年6-8月份数据',
			x: 'center'
		},
		tooltip: {//提示框样式设置
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
				fontFamily: 'Microsoft-YaHei',
				align: 'left',
				baseline: 'middle'
			}
		},
		toolbox: {
			show : true,
			x: 'right',
			y: 30,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				magicType : {show: true, type: ['line', 'bar']},
				saveAsImage : {show: true}
			}
		},
		legend: {
			orient: 'horizontal',
			x: 'left',
			y: 'top',
			padding: 30,
			itemGap: 10,
			textStyle: {color: 'auto'},
			data: ['CSM全国网收视率']
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
					'2014-6-20', '2014-6-27', '2014-7-4', '2014-7-11','2014-7-18','2014-7-25','2014-8-1', '2014-8-8'
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
					formatter: '{value} %'
				}
			}
		],
		series : [
			{
				name: 'CSM全国网收视率',
				type: 'line',
				data: [2.34, 1.97, 2.34, 2.03, 1.83, 2.62, 2.44, 2.79],
				markPoint: {
					data: [
						{type: 'max', name: '最大值'},
						{type: 'min', name: '最小值'}
					]
				},
				itemStyle: {
					normal: {
					},
					emphasis: {
						color: 'red'
					}
				},
				smooth: false
			}
		]
	};
	myChart.setOption(option);
})();

//《爸爸去哪儿》第二季收视市场份额统计
(function (){
	document.getElementById("part_of_baba").style.height='400px';
	var myChart = echarts.init(document.getElementById('part_of_baba'));
	
	var option = {
		title: {
			text: '《爸爸去哪儿》第二季收视市场份额统计',
			subtext: '2014年6-8月份数据',
			x: 'center'
		},
		tooltip: {
			show: true,
			showContent: true,
			trigger: 'axis',
			showDelay: 10,
			hideDelay: 50,
			axisPointer: {
				type: 'shadow',
				shadowStyle : {
				  size: 'auto',
				  color: 'rgba(150,150,150,0.1)'
				}
			},
			textStyle: {
				fontFamily: 'Microsoft-YaHei',
				align: 'left',
				baseline: 'middle'
			}
		},
		toolbox: {
			show : true,
			x: 'right',
			y: 30,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				magicType : {show: true, type: ['line', 'bar']},
				saveAsImage : {show: true}
			}
		},
		legend: {
			orient: 'horizontal',
			x: 'left',
			y: 'top',
			padding: 30,
			itemGap: 10,
			textStyle: {color: 'auto'},
			data: ['全国收视市场份额']
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
					'2014-6-20', '2014-6-27', '2014-7-4', '2014-7-11','2014-7-18','2014-7-25','2014-8-1', '2014-8-8'
				]
			}
		],
		yAxis : [
			{
				type: 'value',
				name: 'Quantity',
				nameLocation: 'end',
				boundaryGap: [0,0.1],
				axisTick: {
					show: true
				},
				axisLabel: {
					show: true,
					formatter: '{value} %'
				}
			}
		],
		series : [
			{
				name: '全国收视市场份额',
				type: 'bar',
				data: [14.24, 11.59, 14.06, 11.24, 14.27, 13.76, 13.76, 15.59],
				markPoint: {
					data: [
						{type: 'max', name: '最大值'},
						{type: 'min', name: '最小值'}
					]
				},
				itemStyle: {
					normal: {
					},
					emphasis: {
						color: 'red'
					}
				},
				smooth: false
			}
		]
	};
	myChart.setOption(option);
})();

var weibo_r_series = new Array(['爸爸去哪儿', '中国好声音', '天天向上', '喜乐街', '花样年华'],['爸爸去哪儿', '中国好声音', '天天向上', '最强天团', '十二道峰味']);
var weibo_r = new Array([{name:'爸爸去哪儿',value:4422},{name:'中国好声音',value:2812},{name:'天天向上',value:1626},{name:'喜乐街',value:362},{name:'花样年华',value:327}],[{name:'爸爸去哪儿',value:78000},{name:'中国好声音',value:20000},{name:'天天向上',value:10000},{name:'喜乐街',value:949},{name:'花样年华',value:1721}],
[{name:'爸爸去哪儿',value:3781.9},{name:'中国好声音',value:2369.7},{name:'天天向上',value:1246.2},{name:'喜乐街',value:299.1},{name:'花样年华',value:317.5}],[{name:'爸爸去哪儿',value:56000},{name:'中国好声音',value:16000},{name:'天天向上',value:7620},{name:'喜乐街',value:778.4},{name:'花样年华',value:1413.7}],
[{name:'爸爸去哪儿',value:4113.3},{name:'中国好声音',value:2268.6},{name:'天天向上',value:992.7},{name:'喜乐街',value:169.7},{name:'花样年华',value:283.8}],[{name:'爸爸去哪儿',value:48000},{name:'中国好声音',value:13000},{name:'天天向上',value:3972},{name:'喜乐街',value:516.7},{name:'花样年华',value:980.2}],
[{name:'爸爸去哪儿',value:3593.9},{name:'中国好声音',value:1700.8},{name:'天天向上',value:768.3},{name:'最强天团',value:812.7},{name:'十二道峰味',value:808}],[{name:'爸爸去哪儿',value:48000},{name:'中国好声音',value:13000},{name:'天天向上',value:3972},{name:'最强天团',value:7578.2},{name:'十二道峰味',value:3363}]
);

//微博电视阅读人/次数表现
function weibo_reflect(t){
	var ti = document.getElementById("subject").options[t-1].value;
	if (ti==1) ti='7月18日';
	else if (ti==2) ti='7月25日';
	else if (ti==3) ti='8月1日';
	else if (ti==4) ti='8月8日';
	document.getElementById("compare_of_pro_day").style.height='400px';
	var myChart = echarts.init(document.getElementById('compare_of_pro_day'));
	
	var c_option = {
		title: {
			text: '2014年' + ti + '微博电视阅读人/次数表现',
			subtext: '2014年' + ti + '数据（源自CSM与新浪官方）',
			x: 'left'
		},
		tooltip: {
			trigger: 'item',
			showDelay: 10,
			hideDelay: 50,
			formatter: "{a} <br/> {b} : {c}万 ({d}%)",
			textStyle: {
				fontFamily: '微软雅黑'
			}
		},
		legend: {
			orient: 'vertical',
			x: 'center',
			y: 'top',
			padding: 30,
			data: weibo_r_series[parseInt(t/4)]
		},
		toolbox: {
			show : true,
			x: 'right',
			y: 30,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				magicType : {show: true, type: ['line', 'bar']},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		series : [
			{
				name: '阅读人数',
				type: 'pie',
				radius: ['50%', '70%'],
				center: ['25%', 200],
				itemStyle : {
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
							textStyle : {
								fontSize : '30',
								fontWeight : 'bold',
								fontFamily: '微软雅黑'
							}
						}
					}
				},
				data: weibo_r[parseInt((t-1)*2)]
			},
			{
				name: '阅读次数',
				type: 'pie',
				radius: ['50%', '70%'],
				center: ['75%', 200],
				itemStyle : {
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
							textStyle : {
								fontSize : '30',
								fontWeight : 'bold',
								fontFamily : 'Microsoft-YaHei'
							}
						}
					}
				},
				data: weibo_r[parseInt((t-1)*2+1)]
			}
		]
	};
	myChart.setOption(c_option);
};

weibo_reflect(1);

//7月18-19日电视综艺节目数据统计
(function (){
	document.getElementById("compare_of_pro_kinds").style.height='400px';
	var myChart = echarts.init(document.getElementById('compare_of_pro_kinds'));
	
	var option = {
		title: {
			text: '7月18-19日全国电视综艺节目数据统计',
			subtext: '2014年7月CSM全国网数据',
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
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				magicType : {show: true, type: ['line', 'bar']},
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
			data: ['收视率', '市场份额']
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
					'爸爸去哪儿', '中国好声音', '天天向上', '喜乐街', '花样年华', '快乐大本营', '十二道锋味', '我为歌狂', '非诚勿扰'
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
					formatter: '{value} %'
				}
			},
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
					formatter: '{value}'
				}
			}
		],
		series : [
			{
				name: '收视率',
				type: 'line',
				yAxisIndex:1,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data: [3.096, 4.241, 1.777, 0.355, 0.581, 2.275, 0.646, 0.67, 1.907],
				markPoint: {
					data: [
						{type: 'max', name: '收视高峰'},
						{type: 'min', name: '收视低谷'}
					]
				}
			},
			{
				name: '市场份额',
				type: 'line',
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data: [13.648, 13.071, 4.899, 1.591, 2.377, 6.454, 1.969, 3.338, 5.994],
				markPoint: {
					data: [
						{type: 'max', name: '最大份额'},
						{type: 'min', name: '最小份额'}
					]
				}
			}
		]
	};
	myChart.setOption(option);
})();

//收视表现
(function (){
	document.getElementById("analytics_of_baba").style.height='400px';
	var myChart = echarts.init(document.getElementById('analytics_of_baba'));
	
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
			text: '新媒体',
			subtext: '《爸爸去哪儿2》收视表现',
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
			formatter: "{a} <br/>{b} : {c} ({d}%)",
			textStyle : {
				fontFamily : '微软雅黑'
			}
		},
		legend: {
			orient : 'vertical',
			x : document.getElementById('analytics_of_baba').offsetWidth / 2+ 5,
			y : 55,
			itemGap:12,
			data:['阅读人数超第二名《快乐大本营》47.1%','阅读次数为第二名两倍还多28.5%','提及人数比第二名三倍还多出43%']
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				magicType : {show: true, type: ['line', 'bar']},
				saveAsImage : {show: true}
			}
		},
		series : [
			{
				name:'阅读人数',
				type:'pie',
				clockWise:false,
				radius : [150, 125],
				itemStyle : dataStyle,
				data:[
					{
						value:47.1,
						name:'阅读人数超第二名《快乐大本营》47.1%'
					},
					{
						value:52.9,
						name:'invisible',
						itemStyle : placeHolderStyle
					}
				]
			},
			{
				name:'阅读次数',
				type:'pie',
				clockWise:false,
				radius : [125, 100],
				itemStyle : dataStyle,
				data:[
					{
						value:28.5, 
						name:'阅读次数为第二名两倍还多28.5%'
					},
					{
						value:71.5,
						name:'invisible',
						itemStyle : placeHolderStyle
					}
				]
			},
			{
				name:'提及人数',
				type:'pie',
				clockWise:false,
				radius : [100, 75],
				itemStyle : dataStyle,
				data:[
					{
						value:43, 
						name:'提及人数比第二名三倍还多出43%'
					},
					{
						value:57,
						name:'invisible',
						itemStyle : placeHolderStyle
					}
				]
			}
		]
	};
	myChart.setOption(option);
})();

//微博收视表现故事
(function (){
	document.getElementById("analytics_of_pro").style.height='400px';
	var myChart = echarts.init(document.getElementById('analytics_of_pro'));
	
	var option = {
		title: {
			text: '微博收视表现',
			subtext: '14-06-30至14-07-06 数据',
			x: 'center',
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
			formatter: "{a} 指标<br/>{b}:{c} 万",
		},
		legend: {
			x: 'left',
			data: ['阅读人数', '阅读次数'],
			toolbox : {
                show:true, 
                orient : 'vertical',
                x: 'right', 
                y: 'center',
                feature:{
                    magicType:{show:true,type:['line','bar','stack','tiled']},
                    saveAsImage:{show:true}
                }
            },
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				magicType : {show: true, type: ['line', 'bar']},
				saveAsImage : {show: true}
			}
		},
		calculable: true,
		grid: {x:100,y: 80,x2:100},
		xAxis: [{
			type:'category',
			axisLabel:{interval:0},
			data:[
				'爸爸去哪儿', '\n中国好声音', '快乐大本营', '\n中国面孔', '爸爸回来了', '\n豪门盛宴', '最美和声', '\n非诚勿扰', '如果爱'
			]
		}],
		yAxis : [
			{
				type:'阅读人数',
				name:'万（人）',
				nameLocation: 'end',
				boundaryGap: [0,0.1],
				axisTick: {
					show: true
				},
				axisLabel: {
					show: true,
					formatter: '{value} 万（人）'
				}
			},
			{
				type:'阅读次数',
				name:'万（次）',
				nameLocation: 'end',
				boundaryGap: [0,0.1],
				axisTick: {
					show: true
				},
				axisLabel: {
					show: true,
					formatter: '{value} 万（次）'
				}
			}
		],
		series: [
			{
				name: '阅读人数',
				type: 'bar',
				data: [3850.3,0,1933.7,1157.4,1084.2,936.5,913.5,909.4,801],
				markPoint: {
					data: [
						{type: 'max', name: '最广泛传播'},
						{type: 'min', name: '最小受众'}
					]
				}
			},
			{
				name: '阅读次数',
				type: 'line',
				yAxisIndex:1,
				data: [37000,0,24000,3585.7,5718.9,2956.8,5590.5,3046.5,3488.1],
				markPoint: {
					data: [
						{type: 'max', name: '最大份额'},
						{type: 'min', name: '最小份额'}
					]
				}
			}
		],
	};
	myChart.setOption(option);
})();

//综艺风云榜
(function () {
	document.getElementById("single_pro_rank").style.height='300px';
	document.getElementById("single_pro_rank2").style.height='200px';
	document.getElementById("single_pro_rank3").style.height='250px';
	var myChart3 = echarts.init(document.getElementById('single_pro_rank3'));
	var myChart = echarts.init(document.getElementById('single_pro_rank'));
	var myChart2 = echarts.init(document.getElementById('single_pro_rank2'));
	
	var option = {
		title: {
			text: '《爸2》综艺风云榜单',
			subtext: '数据源自新浪、百度',
			x: 'left'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type : 'line',
				lineStyle : {
				  color: '#48b',
				  width: 2,
				  type: 'solid'
				}
			}
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType: {show: true, type: ['line', 'bar']},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable: true,
		legend: {
			data: ['微博话题提及数', '百度综艺活跃度', '百度贴吧帖子数', '百度贴吧会员数'],
			x: 'center'
		},
		dataZoom: {
			show: true,
			realtime: false
		},
		grid: {y: 70},
		xAxis: [
			{
				type: 'category',
				data: ["2014-08-07 15:00:00","2014-08-07 16:00:00","2014-08-07 17:00:00","2014-08-07 18:00:00","2014-08-07 19:00:00","2014-08-07 20:00:00","2014-08-07 21:00:00","2014-08-07 22:00:00","2014-08-07 23:00:00","2014-08-08 00:00:00","2014-08-08 01:00:00","2014-08-08 02:00:00","2014-08-08 03:00:00","2014-08-08 04:00:00","2014-08-08 05:00:00","2014-08-08 06:00:00","2014-08-08 07:00:00","2014-08-08 08:00:00","2014-08-08 09:00:00","2014-08-08 10:00:00","2014-08-08 11:00:00","2014-08-08 12:00:00","2014-08-08 13:00:00","2014-08-08 14:00:00","2014-08-08 15:00:00","2014-08-08 16:00:00","2014-08-08 17:00:00","2014-08-08 18:00:00","2014-08-08 19:00:00"]
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '提及数',
				axisLabel: {
					formatter: '{value}'
				},
				min: 20000,
				max: 44000
			},
			{
				type: 'value',
				name: '讨论量',
				axisLabel: {
					formatter: '{value}'
				},
				min: 610000,
				max: 615000,
			}
		],
		series: [
			{
				"name": "微博话题提及数",
				"type": "bar",
				markPoint: {
					data: [
						{type: 'max', name: '最大值'},
						{type: 'min', name: '最小值'}
					]
				},
				"data": [
					25936,
					24700,
					35655,
					25412,
					26223,
					23145,
					25105,
					27147,
					21057,
					25851,
					28521,
					21231,
					24587,
					26153,
					24351,
					26482,
					27322,
					25435,
					27765,
					27584,
					27810,
					25428,
					28215,
					28381,
					39220,
					30387,
					28225,
					38292,
					42253
				]
			},
			{
				"name": "百度贴吧会员数",
				"type": "line",
				"yAxisIndex": 1,
				"data": [
					610707,
					610775,
					610930,
					611065,
					611213,
					611294,
					611378,
					611535,
					611711,
					611899,
					611990,
					612006,
					612019,
					612053,
					612064,
					612069,
					612070,
					612078,
					612116,
					612147,
					612190,
					612255,
					612366,
					612457,
					612656,
					612860,
					613045,
					613173,
					613283
				]
			}
		]
	};
	
	var option2 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type : 'line',
				lineStyle : {
				  color: '#48b',
				  width: 2,
				  type: 'solid'
				}
			}
		},
		toolbox: {
			show : true,
			y: -30,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType: {show: true, type: ['line', 'bar']},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		grid: {y: 20},
		calculable: true,
		legend: {
			data: ['微博话题提及数', '百度综艺活跃度', '百度贴吧帖子数', '百度贴吧会员数'],
			x: 'center',
			y: -30
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap : true,
				axisTick: {onGap:false},
				splitLine: {show:false},
				data: ["2014-08-07 15:00:00","2014-08-07 16:00:00","2014-08-07 17:00:00","2014-08-07 18:00:00","2014-08-07 19:00:00","2014-08-07 20:00:00","2014-08-07 21:00:00","2014-08-07 22:00:00","2014-08-07 23:00:00","2014-08-08 00:00:00","2014-08-08 01:00:00","2014-08-08 02:00:00","2014-08-08 03:00:00","2014-08-08 04:00:00","2014-08-08 05:00:00","2014-08-08 06:00:00","2014-08-08 07:00:00","2014-08-08 08:00:00","2014-08-08 09:00:00","2014-08-08 10:00:00","2014-08-08 11:00:00","2014-08-08 12:00:00","2014-08-08 13:00:00","2014-08-08 14:00:00","2014-08-08 15:00:00","2014-08-08 16:00:00","2014-08-08 17:00:00","2014-08-08 18:00:00","2014-08-08 19:00:00"]
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '活跃度',
				axisLabel: {
					formatter: '{value}'
				},
				min: 230000,
				max: 290000
			}
		],
		series: [
			{
				"name": "百度综艺活跃度",
				markPoint: {
					data: [
						{type: 'max', name: '最大值'},
						{type: 'min', name: '最小值'}
					]
				},
				"data": [
					258206,247980,247980,250537,265876,245424,260763,245424,247980,258206,242867,260763,245424,255650,245424,255650,242867,242867,258206,265876,250537,245424,232942,232942,242548,230541,242548,244949,232942
				],
				"type": "bar"
			}
		]
	};
	
	var option3 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type : 'line',
				lineStyle : {
				  color: '#48b',
				  width: 2,
				  type: 'solid'
				}
			}
		},
		toolbox: {
			show : true,
			y: -30,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType: {show: true, type: ['line', 'bar']},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable: true,
		legend: {
			data: ['微博话题提及数', '百度综艺活跃度', '百度贴吧帖子数', '百度贴吧会员数'],
			x: 'center',
			y: -30
		},
		grid: {y: 20},
		xAxis: [
			{
				type: 'category',
				boundaryGap : true,
				axisTick: {onGap:false},
				splitLine: {show:false},
				data: ["2014-08-07 15:00:00","2014-08-07 16:00:00","2014-08-07 17:00:00","2014-08-07 18:00:00","2014-08-07 19:00:00","2014-08-07 20:00:00","2014-08-07 21:00:00","2014-08-07 22:00:00","2014-08-07 23:00:00","2014-08-08 00:00:00","2014-08-08 01:00:00","2014-08-08 02:00:00","2014-08-08 03:00:00","2014-08-08 04:00:00","2014-08-08 05:00:00","2014-08-08 06:00:00","2014-08-08 07:00:00","2014-08-08 08:00:00","2014-08-08 09:00:00","2014-08-08 10:00:00","2014-08-08 11:00:00","2014-08-08 12:00:00","2014-08-08 13:00:00","2014-08-08 14:00:00","2014-08-08 15:00:00","2014-08-08 16:00:00","2014-08-08 17:00:00","2014-08-08 18:00:00","2014-08-08 19:00:00"]
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '帖子数',
				axisLabel: {
					formatter: '{value}'
				},
				min: 10500000,
				max: 11700000
			}
		],
		series: [
			{
				"name": "百度贴吧帖子数",
				"data": [
					10533414,10554290,10557368,10681166,10690547,10748857,10759173,10770912,10773202,10776042,10785229,10849634,10874570,10878638,10886277,10926526,11110922,11154224,11220115,11242666,11363343,11442071,11448765,11521065,11527938,11566986,11627785,11663114,11702153
				],
				"type": "bar"
			}
		]
	};
	
	myChart.setOption(option);
	myChart2.setOption(option2);
	myChart3.setOption(option3);
	myChart.connect([myChart2, myChart3]);
	myChart2.connect([myChart, myChart3]);
	myChart3.connect([myChart, myChart2]);
})();

var rank_category = [
	"中国好声音",
	"爸爸去哪儿",
	"快乐大本营",
	"变形计",
	"康熙来了",
	"天天向上",
	"running..",
	"我们都爱笑",
	"非诚勿扰",
	"十二道锋味",
	"如果爱",
	"锵锵三人行",
	"我们结婚了",
	"非常完美",
	"国光帮帮忙",
	"开讲啦",
	"爱情保卫战",
	"经典传奇",
	"非常静距离",
	"非你莫属",
	"年代秀",
	"女人我最大",
	"笑傲江湖",
	"中国好歌曲",
	"传奇故事",
	"鲁豫有约",
	"我不是明星",
	"我们约会吧",
	"财经郎眼",
	"大学生了没"
];
var data_rank = new Array([2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3], [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2], [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3], [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3], [12, 2, 3, 1.45, 6.3, 12, 20.3, 23.4, 3.0, 16.5, 12.0, 6.2], [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]);

//多节目多榜单排行分析（时间动画）
(function () {
	document.getElementById("multi_pro_rank").style.height='500px';
	var myChart = echarts.init(document.getElementById('multi_pro_rank'));
	
	var option = {
		timeline: {
			data:[
				"8-08",
				"8-09",
				"8-10",
				"8-11",
				"8-12",
				"8-13",
				"8-14",
				"8-15"
			],
			label : {
				formatter : function(s) {
					return s.slice(0, 4);
				}
			},
			autoPlay : true,
			playInterval : 1000
		},
		options: [
			{
				title: {
					text: "百度综艺榜2014-08-08 11:00:00",
					subtext: '数据源自新浪、百度',
					x: 'left'
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow',
						shadowStyle : {
						  size: 'auto',
						  color: 'rgba(150,150,150,0.3)'
						}
					}
				},
				toolbox: {
					show : true,
					feature : {
						mark : {show: true},
						dataView : {show: true, readOnly: false},
						magicType: {show: true, type: ['line', 'bar']},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				calculable: true,
				legend: {
					data: ['百度综艺热度'],
					x: 'center'
				},
				dataZoom: {
					show: true,
					y: 420,
					realtime: false
				},
				grid: {y: 100, y2: 110},
				xAxis: [
					{
						type: 'category',
						data: rank_category
					}
				],
				yAxis: [
					{
						type: 'value',
						name: '提及数',
						axisLabel: {
							formatter: '{value}'
						},
						boundaryGap: [0,0.1]
					}
				],
				series: [
					{
						name:'百度综艺热度',
						type:'bar',
						data: [
							417658,
							255650,
							116835,
							61516,
							108176,
							63604,
							85105,
							41289,
							35728,
							38531,
							24176,
							20059,
							24916,
							21326,
							14533,
							17714,
							14435,
							12546,
							7106,
							10615,
							10947,
							8775,
							12683,
							6351,
							48465,
							6921,
							6164,
							10396,
							36980,
							5263
						]
					}
				]
			},
			{
				"title": {
					"text": "百度综艺榜2014-08-09 11:00:00"
				},
				"series": [
					{
						"data": [
							377522,
							240147,
							102800,
							56719,
							69012,
							56445,
							79711,
							36231,
							30063,
							34047,
							19254,
							19109,
							9480,
							20631,
							16484,
							16685,
							14422,
							16595,
							6384,
							10587,
							8662,
							8062,
							14712,
							6361,
							49406,
							5397,
							6088,
							10625,
							37346,
							5118
						]
					}
				]
			},
			{
				"title": {
					"text": "百度综艺榜2014-08-10 11:00:00"
				},
				"series": [
					{
						"data": [
							784166,
							380195,
							97081,
							90148,
							60376,
							52092,
							75627,
							36016,
							34729,
							30526,
							18538,
							18833,
							23407,
							19414,
							16877,
							15472,
							14345,
							19165,
							17693,
							9498,
							7492,
							7755,
							14562,
							6626,
							49406,
							3822,
							5949,
							9473,
							35881,
							4837
						]
					}
				]
			},
			{
				"title": {
					"text": "百度综艺榜2014-08-11 11:00:00"
				},
				"series": [
					{
						"data": [
							1594485,
							1465162,
							149614,
							224979,
							60593,
							51269,
							64536,
							43414,
							64434,
							42154,
							19479,
							31207,
							33034,
							18444,
							15302,
							12247,
							12705,
							13496,
							10573,
							9407,
							7104,
							6670,
							15012,
							8882,
							47054,
							3452,
							5712,
							8930,
							36614,
							4445
						]
					}
				]
			},
			{
				"title": {
					"text": "百度综艺榜2014-08-12 11:00:00"
				},
				"series": [
					{
						"data": [
							748791,
							577330,
							376132,
							123693,
							60041,
							78456,
							54601,
							112464,
							104732,
							107652,
							43218,
							48506,
							33784,
							14823,
							18881,
							10244,
							12443,
							12499,
							27233,
							16940,
							9498,
							5815,
							15613,
							7937,
							47524,
							3662,
							5808,
							10984,
							36614,
							3756
						]
					}
				]
			},
			{
				"title": {
					"text": "百度综艺榜2014-08-13 11:00:00"
				},
				"series": [
					{
						"data": [
							484457,
							360444,
							175579,
							87211,
							80754,
							143685,
							58882,
							63998,
							62138,
							68520,
							75724,
							26317,
							28012,
							14577,
							15707,
							10299,
							13660,
							11055,
							13321,
							13865,
							16383,
							5838,
							10916,
							6083,
							46583,
							6636,
							5893,
							10296,
							35149,
							3596
						]
					}
				]
			},
			{
				"title": {
					"text": "百度综艺榜2014-08-14 11:00:00"
				},
				"series": [
					{
						"data": [
							409475,
							282535,
							135404,
							70508,
							202444,
							83000,
							78108,
							53079,
							50421,
							54966,
							38224,
							22737,
							25858,
							19795,
							15951,
							16100,
							14136,
							11253,
							9374,
							11497,
							16367,
							8022,
							23419,
							6161,
							48936,
							14172,
							6018,
							9596,
							37346,
							4814
						]
					}
				]
			},
			{
				"title": {
					"text": "百度综艺榜2014-08-15 11:00:00"
				},
				"series": [
					{
						"data": [
							321483,
							236137,
							114185,
							58079,
							97811,
							66759,
							82779,
							45578,
							37831,
							43155,
							28357,
							20832,
							24817,
							19825,
							14467,
							17008,
							14577,
							12011,
							7952,
							10613,
							10293,
							7858,
							12295,
							5431,
							48936,
							7022,
							6071,
							9896,
							36614,
							5099
						]
					}
				]
			}
			//to be added
		]
	};
	myChart.setOption(option);
})();