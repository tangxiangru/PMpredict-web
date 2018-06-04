//单条主题分析
var in_axis = new Array(["2014-08-07 15:00:00","2014-08-07 16:00:00","2014-08-07 17:00:00","2014-08-07 18:00:00","2014-08-07 19:00:00","2014-08-07 20:00:00","2014-08-07 21:00:00","2014-08-07 22:00:00","2014-08-07 23:00:00","2014-08-08 00:00:00","2014-08-08 01:00:00","2014-08-08 02:00:00","2014-08-08 03:00:00","2014-08-08 04:00:00","2014-08-08 05:00:00","2014-08-08 06:00:00","2014-08-08 07:00:00","2014-08-08 08:00:00","2014-08-08 09:00:00","2014-08-08 10:00:00","2014-08-08 11:00:00","2014-08-08 12:00:00","2014-08-08 13:00:00","2014-08-08 14:00:00","2014-08-08 15:00:00"]);

var weibo_data = new Array(["32","3148","5104","5943","6496","6882","7238","7471","7671","7780","7827","7844","7863","7869","7876","7894","7923","7997","8019","8087","8150","8203","8250","8301","8340"],["3","529","812","884","954","989","1014","1038","1048","1050","1054","1055","1055","1055","1055","1056","1058","1065","1066","1071","1074","1080","1086","1087","1090"],["7","1429","2202","2475","2616","2699","2751","2812","2855","2890","2901","2904","2904","2906","2907","2911","2917","2935","2940","2962","2971","2978","2986","2993","2998"],["479","4672","8227","9789","11056","12256","13073","13824","14543","14953","15146","15240","15292","15366","15607","16068","16765","16936","17500","17741","18009","18229","18410","18552","18679"],["243","3800","6130","7308","8272","9233","9869","10379","10814","11016","11096","11141","11184","11231","11345","11597","12044","12152","12546","12755","12979","13147","13270","13374","13470"],["212","1397","2620","2959","3214","3484","3669","3854","4028","4131","4173","4196","4215","4241","4287","4384","4551","4597","4748","4838","4929","4997","5053","5075","5103"],["489","5831","8137","8697","8762","9020","9483","9773","9952","10122","10239","10326","10351","10363","10375","10415","10477","10534","10623","10680","10698","10752","10761","10768","10781"],["243","2870","3851","4046","4073","4204","4467","4612","4699","4774","4825","4868","4878","4883","4886","4909","4939","4964","5002","5025","5036","5058","5058","5060","5072"],["210","1988","2432","2550","2565","2622","2731","2799","2843","2889","2916","2935","2937","2941","2941","2947","2959","2973","2996","3004","3006","3014","3016","3018","3020"],["505","2583","2746","4088","5189","5572","5788","6000","6117","6200","6217","6224","6229","6273","6303","6336","6376","6411","6422","6447","6459","6466","6476","6489","6499"],["76","369","384","514","646","690","707","728","743","757","759","758","758","759","766","774","778","783","785","786","786","787","787","788","787"],["131","749","770","914","1124","1198","1238","1279","1304","1317","1324","1324","1324","1326","1336","1340","1350","1358","1359","1365","1365","1365","1366","1371","1373"]);

function weibo_interact(t){
	document.getElementById("analytics_of_single_theme").style.height='400px';
	var myChart = echarts.init(document.getElementById('analytics_of_single_theme'));
	
	var option = {
		title: {
			text: '主题微博传播分析',
			subtext: '数据源自《爸爸去哪儿2》官方微博',
			x: 'center'
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
				dataView : {show: true, readOnly: false},
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
			data: ['赞数', '转发量', '评论量']
		},
		grid: {
			y: 70
		},
		dataZoom: {
			show: true
		},
		xAxis: [
			{
				type: 'category',
				name: 'Time',
				nameLocation: 'end',
				boundaryGap: false,
				axisTick: {
					show: true
				},
				data: in_axis[0]
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
				}
			},
			{
				type: 'value',
				name: 'Zan Number',
				nameLocation: 'end',
				boundaryGap: [0,0.1],
				axisTick: {
					show: true
				}
			}
		],
		series : [
			{
				name: '赞数',
				type: 'line',
				yAxisIndex: 1,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data: weibo_data[parseInt(t*3)],
				markPoint: {
					data: [
						{type: 'max', name: '最赞'}
					]
				}
			},
			{
				name: '转发量',
				type: 'line',
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data: weibo_data[parseInt(t*3+1)],
				markPoint: {
					data: [
						{type: 'max', name: '最大传播'}
					]
				}
			},
			{
				name: '评论量',
				type: 'line',
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data: weibo_data[parseInt(t*3+2)],
				markPoint: {
					data: [
						{type: 'max', name: '最热门评论'},
						{type: 'min', name: '最冷门评论'}
					]
				}
			}
		]
	};
	myChart.setOption(option);
};

weibo_interact(0);

var rank_category = ['1','2','3','4','5','6','7','8','9','10','11','12'];

//特定时间点发布的微博互动量横向发布
(function () {
	document.getElementById("trace_of_p_bytime").style.height='500px';
	var myChart = echarts.init(document.getElementById('trace_of_p_bytime'));
	
	var option = {
		timeline: {
			data: rank_category,
			label : {
				formatter : function(s) {
					return s.slice(0, 7);
				}
			},
			autoPlay : true,
			playInterval : 1000
		},
		options: [
			{
				title: {
					text: '微博发布1小时后互动量变化情况',
					subtext: '《爸爸去哪儿》节目数据',
					x: 'center'
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
						restore : {show: true},
						magicType : {show: true, type: ['line', 'bar']},
						saveAsImage : {show: true}
					}
				},
				calculable: true,
				legend: {
					data: ['赞数', '转发量', '评论数'],
					x: 'left'
				},
				grid: {y: 70, y2: 110},
				xAxis: [
					{
						type: 'category',
						data: [1,2,3,4,5,6,7,8],
						axisLabel: {
							clickable: true,
							formatter: '微博{value}'
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						name: '数量',
						axisLabel: {
							formatter: '{value}'
						},
						max: 15300
					}
				],
				series: [
					{
						name:'赞数',
						type:'bar',
						data: [
							32,
							164,
							187,
							479,
							489,
							505,
							536,
							834
						]
					},
					{
						name:'转发量',
						type:'bar',
						data: [
							3,
							57,
							23,
							243,
							243,
							76,
							81,
							142
						]
					},
					{
						name:'评论数',
						type:'bar',
						data: [
							7,
							49,
							93,
							212,
							210,
							131,
							254,
							286
						]
					}
				]
			},
			{
				"title": {
					"text": "微博发布2小时后互动量变化情况"
				},
				"series": [
					{
						"data": [
							3148,
							1388,
							3202,
							4672,
							3024,
							2029,
							1545,
							2694
						]
					},
					{
						"data": [
							529,
							501,
							482,
							3800,
							1516,
							309,
							189,
							429
						]
					},
					{
						"data": [
							1429,
							474,
							1774,
							1397,
							1154,
							592,
							949,
							822
						]
					}
				]
			},
			{
				"title": {
					"text": "微博发布3小时后互动量变化情况"
				},
				"series": [
					{
						"data": [
							5104,
							1617,
							4641,
							8227,
							5061,
							2449,
							2206,
							3408
						]
					},
					{
						"data": [
							812,
							577,
							639,
							6130,
							2488,
							361,
							248,
							513
						]
					},
					{
						"data": [
							2202,
							555,
							2627,
							2620,
							1768,
							705,
							1228,
							944
						]
					}
				]
			},
			{
				"title": {
					"text": "微博发布4小时后互动量变化情况"
				},
				"series": [
					{
						"data": [
							5943,
							1695,
							5732,
							9789,
							5831,
							2583,
							2609,
							3890
						]
					},
					{
						"data": [
							884,
							608,
							748,
							7308,
							2870,
							369,
							277,
							572
						]
					},
					{
						"data": [
							2475,
							579,
							3055,
							2959,
							1988,
							749,
							1394,
							1022
						]
					}
				]
			},
			{
				"title": {
					"text": "微博发布5小时后互动量变化情况"
				},
				"series": [
					{
						"data": [
							6496,
							1738,
							6537,
							11056,
							6879,
							2632,
							2881,
							4141
						]
					},
					{
						"data": [
							954,
							623,
							811,
							8272,
							3343,
							377,
							286,
							608
						]
					},
					{
						"data": [
							2616,
							587,
							3384,
							3214,
							2208,
							760,
							1518,
							1091
						]
					}
				]
			},
			{
				"title": {
					"text": "微博发布6小时后互动量变化情况"
				},
				"series": [
					{
						"data": [
							6882,
							1778,
							7119,
							12256,
							7608,
							2685,
							3010,
							4216
						]
					},
					{
						"data": [
							989,
							641,
							853,
							9233,
							3631,
							379,
							298,
							614
						]
					},
					{
						"data": [
							2699,
							591,
							3601,
							3484,
							2342,
							765,
							1572,
							1107
						]
					}
				]
			},
			{
				"title": {
					"text": "微博发布7小时后互动量变化情况"
				},
				"series": [
					{
						"data": [
							7238,
							1913,
							7394,
							13073,
							8137,
							2746,
							3023,
							4248
						]
					},
					{
						"data": [
							1014,
							704,
							881,
							9869,
							3851,
							384,
							299,
							618
						]
					},
					{
						"data": [
							2751,
							607,
							3708,
							3669,
							2432,
							770,
							1573,
							1116
						]
					}
				]
			},
			{
				"title": {
					"text": "微博发布8小时后互动量变化情况"
				},
				"series": [
					{
						"data": [
							7471,
							2282,
							7405,
							13824,
							8474,
							2966,
							3025,
							4260
						]
					},
					{
						"data": [
							1038,
							838,
							882,
							10379,
							3970,
							400,
							299,
							620
						]
					},
					{
						"data": [
							2812,
							656,
							3709,
							3854,
							2495,
							792,
							1575,
							1121
						]
					}
				]
			},
			{
				"title": {
					"text": "微博发布9小时后互动量变化情况"
				},
				"series": [
					{
						"data": [
							7671,
							2846,
							7412,
							14543,
							8637,
							3442,
							3064,
							4274
						]
					},
					{
						"data": [
							1048,
							1050,
							882,
							10814,
							4012,
							444,
							300,
							620
						]
					},
					{
						"data": [
							2855,
							799,
							3712,
							4028,
							2526,
							831,
							1597,
							1126
						]
					}
				]
			},
			{
				"title": {
					"text": "微博发布10小时后互动量变化情况"
				},
				"series": [
					{
						"data": [
							7780,
							3405,
							7490,
							14953,
							8697,
							4088,
							3091,
							4290
						]
					},
					{
						"data": [
							1050,
							1242,
							892,
							11016,
							4046,
							514,
							301,
							620
						]
					},
					{
						"data": [
							2890,
							946,
							3758,
							4131,
							2550,
							914,
							1600,
							1129
						]
					}
				]
			},
			{
				"title": {
					"text": "微博发布11小时后互动量变化情况"
				},
				"series": [
					{
						"data": [
							7827,
							3729,
							7527,
							15146,
							8723,
							4591,
							3102,
							4323
						]
					},
					{
						"data": [
							1054,
							1357,
							898,
							11096,
							4057,
							565,
							303,
							624
						]
					},
					{
						"data": [
							2901,
							1025,
							3770,
							4173,
							2557,
							993,
							1602,
							1144
						]
					}
				]
			},
			{
				"title": {
					"text": "微博发布12小时后互动量变化情况"
				},
				"series": [
					{
						"data": [
							7844,
							3971,
							7549,
							15240,
							8742,
							4949,
							3111,
							4400
						]
					},
					{
						"data": [
							1055,
							1432,
							899,
							11141,
							4066,
							609,
							304,
							633
						]
					},
					{
						"data": [
							2904,
							1097,
							3778,
							4196,
							2562,
							1072,
							1605,
							1157
						]
					}
				]
			}
		]
	};
	myChart.setOption(option);
})();

var axisData = [
    "2014/07/16",
    "2014/07/17",
    "2014/07/18",
    "2014/07/19",
    "2014/07/20",
    "2014/07/21",
    "2014/07/22",
    "2014/07/23",
    "2014/07/24",
    "2014/07/25",
    "2014/07/26",
    "2014/07/27",
    "2014/07/28",
    "2014/07/29",
    "2014/07/30",
    "2014/07/31",
    "2014/08/01",
    "2014/08/02",
    "2014/08/03",
    "2014/08/04",
    "2014/08/05",
    "2014/08/06",
    "2014/08/07",
    "2014/08/08",
    "2014/08/09",
    "2014/08/10",
    "2014/08/11",
    "2014/08/12",
    "2014/08/13",
    "2014/08/14"
];

//function
(function () {
	document.getElementById("combine_of_baidu").style.height='300px';
	document.getElementById("combine_of_weibo").style.height='300px';
	var myChart = echarts.init(document.getElementById('combine_of_baidu'));
	var myChart2 = echarts.init(document.getElementById('combine_of_weibo'));
	
	var option_baidu = {
		title: {
			text: '搜索引擎与微博互动数据联动',
			subtext: '百度、新浪数据',
			x: 'center'
		},
		tooltip : {
			trigger: 'axis',
			showDelay: 0
		},
		legend: {
			x: 'left',
			data: ['百度搜索指数', '新浪微博讨论量']
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
		dataZoom: {
			show: true,
			realtime: true,
			start: 10,
			end: 90
		},
		gird: {
			y: 70,
			y2: 70
		},
		xAxis : [
			{
				type : 'category',
				boundaryGap : true,
				axisTick: {onGap:false},
				splitLine: {show:false},
				data : axisData
			}
		],
		yAxis : [
			{
				type : 'value',
				scale:true,
				precision: 2,
				boundaryGap: [0.05, 0.05],
				splitArea : {show : true}
			}
		],
		series: [
			{
				name: '百度搜索指数',
				type: 'line',
				data: [355970,320573,489176,1792354,809173,513878,382792,335790,306278,503603,1716671,797932,490051,363255,309316,292191,420514,1712076,838611,504346,374562,332476,313159,478205,1982514,786236,470037,360649,300997,276545]
			}
		]
	};
	
	var option_weibo = {
		tooltip : {
			trigger: 'axis',
			showDelay: 0
		},
		legend: {
			y: -30,
			data: ['百度搜索指数', '新浪微博讨论量']
		},
		toolbox: {
			y: -30,
			show : true,
			feature : {
				magicType : {show: true, type: ['line', 'bar']},
				saveAsImage : {show: true}
			}
		},
		grid: {
			y: 15,
		},
		dataZoom: {
			y: -30,
			show: true,
			realtime: true,
			start: 10,
			end: 90
		},
		xAxis : [
			{
				type : 'category',
				boundaryGap : true,
				axisTick: {onGap:false},
				splitLine: {show:false},
				data : axisData
			}
		],
		yAxis : [
			{
				type : 'value',
				scale:true,
				splitArea : {show : true}
			}
		],
		series: [
			{
				name: '新浪微博讨论量',
				type: 'bar',
				data: [
				13560434, 8026738, 11691637, 12491697, 12485603, 11620504, 12555496, 15253370, 12709611, 10458354, 
                10933507, 9896523, 10365702, 10633095, 9722230, 
                12662783, 8757982, 7764234, 10591719, 8826293, 
                11591827, 11153111, 14304651, 11672120, 12536480, 
                12608589, 8843860, 7391994, 10063709, 7768895]
			}
		]
	};
	myChart.setOption(option_baidu);
	myChart2.setOption(option_weibo);
	
	myChart.connect([myChart2]);
	myChart2.connect([myChart]);
	
	setTimeout(function (){
		window.onresize = function () {
			myChart.resize();
			myChart2.resize();
		}
	},200);
})();

//jud_of_at
(function () {
	document.getElementById("jud_of_at").style.height='800px';
	var margin = {top: 100, right: 0, bottom: 10, left: 100},
		width = 580,
		height = 580;

	var x = d3.scale.ordinal().rangeBands([0, width]),
		z = d3.scale.linear().domain([0, 4]).clamp(true),
		c = d3.scale.category20().domain([0,500]);

	var svg = d3.select("#jud_of_at").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.style("margin-left", -margin.left + "px")
	  .append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	d3.json("/variety-show-hot-spot-vis/data/at.json", function(miserables) {
	  var matrix = [],
		  nodes = miserables.nodes,
		  n = nodes.length;
	
	// Compute index per node.
	nodes.forEach(function(node, i) {
		node.index = i;
		node.count = 0;
		matrix[i] = d3.range(n).map(function(j) { return {x: j, y: i, z: 0}; });
	});

	// Convert links to matrix; count character occurrences.
	miserables.links.forEach(function(link) {
		matrix[link.source][link.target].z += link.value;
		matrix[link.target][link.source].z += link.value;
		matrix[link.source][link.source].z += link.value;
		matrix[link.target][link.target].z += link.value;
		nodes[link.source].count += link.value;
		nodes[link.target].count += link.value;
	});

	// Precompute the orders.
	var orders = {
		name: d3.range(n).sort(function(a, b) { return d3.ascending(nodes[a].name, nodes[b].name); }),
		count: d3.range(n).sort(function(a, b) { return nodes[b].count - nodes[a].count; }),
		group: d3.range(n).sort(function(a, b) { return nodes[b].group - nodes[a].group; })
	};

	// The default sort order.
	x.domain(orders.name);

	svg.append("rect")
	  .attr("class", "background")
	  .attr("width", width)
	  .attr("height", height);

	var row = svg.selectAll(".row")
	  .data(matrix)
	  .enter().append("g")
	  .attr("class", "row")
	  .attr("transform", function(d, i) { return "translate(0," + x(i) + ")"; })
	  .each(row);

	row.append("line")
	  .attr("x2", width);

	row.append("text")
	  .attr("x", -6)
	  .attr("y", x.rangeBand() / 2)
	  .attr("dy", ".32em")
	  .attr("text-anchor", "end")
	  .text(function(d, i) { return nodes[i].name; });

	var column = svg.selectAll(".column")
	  .data(matrix)
	  .enter().append("g")
	  .attr("class", "column")
	  .attr("transform", function(d, i) { return "translate(" + x(i) + ")rotate(-90)"; });

	column.append("line")
	  .attr("x1", -width);

	column.append("text")
	  .attr("x", 6)
	  .attr("y", x.rangeBand() / 2)
	  .attr("dy", ".32em")
	  .attr("text-anchor", "start")
	  .text(function(d, i) { return nodes[i].name; });

	function row(row) {
		var cell = d3.select(this).selectAll(".cell")
			.data(row.filter(function(d) { return d.z; }))
			.enter().append("rect")
			.attr("class", "cell")
			.attr("x", function(d) { return x(d.x); })
			.attr("width", x.rangeBand())
			.attr("height", x.rangeBand())
			.style("fill-opacity", function(d) { return z(d.z); })
			.style("fill", function(d) { return nodes[d.x].group == nodes[d.y].group ? c(nodes[d.x].group) : null; })
			.on("mouseover", mouseover)
			.on("mouseout", mouseout);
	}

	function mouseover(p) {
		d3.selectAll(".row text").classed("active", function(d, i) { return i == p.y; });
		d3.selectAll(".column text").classed("active", function(d, i) { return i == p.x; });
	}

	function mouseout() {
		d3.selectAll("text").classed("active", false);
	}

	d3.select("#order").on("change", function() {
		clearTimeout(timeout);
		order(this.value);
	});

	function order(value) {
		x.domain(orders[value]);

		var t = svg.transition().duration(2500);

		t.selectAll(".row")
			.delay(function(d, i) { return x(i) * 4; })
			.attr("transform", function(d, i) { return "translate(0," + x(i) + ")"; })
		  .selectAll(".cell")
			.delay(function(d) { return x(d.x) * 4; })
			.attr("x", function(d) { return x(d.x); });

		t.selectAll(".column")
			.delay(function(d, i) { return x(i) * 4; })
			.attr("transform", function(d, i) { return "translate(" + x(i) + ")rotate(-90)"; });
	}

	var timeout = setTimeout(function() {
		order("group");
		d3.select("#order").property("selectedIndex", 2).node().focus();
		}, 5000);
	});
})();
