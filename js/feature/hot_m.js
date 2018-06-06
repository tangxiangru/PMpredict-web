//事件关联分析
(function (){
	document.getElementById("hot_issue_mining").style.height='550px';
	var myChart = echarts.init(document.getElementById('hot_issue_mining'));
	
	var option = {
		title : {
			text: '爸爸去哪儿节目人物关系图',
			subtext: '数据来自新浪微博与湖南卫视',
			x:'right',
			y:'bottom'
		},
		tooltip : {
			trigger: 'item',
			formatter: '{a} : {b}'
		},
		toolbox: {
			show : true,
			feature : {
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		legend: {
			x: 'left',
			data:['节目','小朋友', '父亲', '导演', '节目工作组']
		},
		series : [
			{
				type:'force',
				name : "人物关系",
				categories : [
					{
						name: '节目'
					},
					{
						name: '小朋友'
					},
					{
						name: '父亲'
					},
					{
						name:'导演'
					},
					{
						name:'节目工作组'
					}
				],
				itemStyle: {
					normal: {
						label: {
							show: true,
							textStyle: {
								color: '#333'
							}
						},
						nodeStyle : {
							brushType : 'both',
							strokeColor : 'rgba(255,215,0,0.4)',
							lineWidth : 1
						}
					},
					emphasis: {
						label: {
							show: false
							// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
						},
						nodeStyle : {
							//r: 30
						},
						linkStyle : {}
					}
				},
				useWorker: false,
				minRadius : 15,
				maxRadius : 40,
				gravity: 1.1,
				scaling: 1.1,
				nodes:[
					{category:0, name: '爸爸去哪儿', value : 28},
					{category:1, name: '杨阳洋',value : 13},
					{category:1, name: 'Feyman',value : 13},
					{category:1, name: '多多',value : 13},
					{category:1, name: 'Joe',value : 13},
					{category:1, name: '姐姐',value : 13},
					{category:1, name: '贝儿',value : 13},
					{category:2, name: '杨威',value : 16},
					{category:2, name: '吴镇宇',value : 16},
					{category:2, name: '黄磊',value : 16},
					{category:2, name: '曹格',value : 16},
					{category:2, name: '陆毅',value : 16},
					{category:3, name: '谢涤葵',value : 20},
					{category:4, name: '潇湘卧龙',value : 10},
					{category:4, name: '芒果捞小丸子',value : 10},
					{category:4, name: '芒果洪涛',value : 10},
					{category:4, name: '李锐',value : 18},
				],
				links : [
					{source : '爸爸去哪儿', target : '杨威', weight : 3},
					{source : '爸爸去哪儿', target : '吴镇宇', weight : 3},
					{source : '爸爸去哪儿', target : '黄磊', weight : 3},
					{source : '爸爸去哪儿', target : '曹格', weight : 3},
					{source : '爸爸去哪儿', target : '陆毅', weight : 3},
					{source : '杨威', target : '杨阳洋', weight : 4},
					{source : '吴镇宇', target : 'Feyman', weight : 4},
					{source : '黄磊', target : '多多', weight : 4},
					{source : '曹格', target : 'Joe', weight : 4},
					{source : '曹格', target : '姐姐', weight : 4},
					{source : '陆毅', target : '贝儿', weight : 4},
					{source : '爸爸去哪儿', target : '谢涤葵', weight : 4},
					{source : '爸爸去哪儿', target : '芒果洪涛', weight : 2},
					{source : '谢涤葵', target : '潇湘卧龙', weight : 2},
					{source : '谢涤葵', target : '芒果洪涛', weight : 2},
					{source : '谢涤葵', target : '李锐', weight : 1},
					{source : '谢涤葵', target : '芒果捞小丸子', weight : 1},
					{source : '李锐', target : '爸爸去哪儿', weight : 3},
					{source : '谢涤葵', target : '李锐', weight : 6}
					// {source : '爸爸去哪儿', target : '杨阳洋', weight : 3},
					// {source : '爸爸去哪儿', target : 'Feyman', weight : 3},
					// {source : '爸爸去哪儿', target : '多多', weight : 3},
					// {source : '爸爸去哪儿', target : 'Joe', weight : 3},
					// {source : '爸爸去哪儿', target : '姐姐', weight : 3},
					// {source : '爸爸去哪儿', target : '贝儿', weight : 3},
				]
			}
		]
	};
	myChart.setOption(option);
})();

//hot_issue_map
(function () {
	document.getElementById("hot_issue_map").style.height='550px';
	var myChart = echarts.init(document.getElementById('hot_issue_map'));
	
	var option = {
		title : {
			text: '全国各大卫视黄金时间段市场份额',
			subtext: 'CSM50全国网2014年7月17日18-24时数据',
			x:'center'
		},
		tooltip : {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			x:'left',
			data:['收视份额']
		},
		dataRange: {
			min: 0,
			max: 4.43,
			x: 'left',
			y: 'bottom',
			text:['高（%）','低（%）'],        
			calculable : true
		},
		toolbox: {
			show : true,
			orient : 'vertical',
			x: 'right',
			y: 'center',
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		series : [
			{
				name: '收视份额',
				type: 'map',
				mapType: 'china',
				roam: true,
				itemStyle:{
					normal:{label:{show:true}},
					emphasis:{label:{show:true}}
				},
				data:[
					{name: '北京',value: 1.67 },
					{name: '天津',value: 1.44 },
					{name: '上海',value: 1.28 },
					{name: '重庆',value: 1.02 },
					{name: '河北',value: 0.50 },
					{name: '河南',value: 0.81 },
					{name: '云南',value: 0.72 },
					{name: '辽宁',value: 0.67 },
					{name: '黑龙江',value: 0.69 },
					{name: '湖南',value: 4.41 },
					{name: '安徽',value: 1.18 },
					{name: '山东',value: 1.99 },
					{name: '新疆',value: 0.14 },
					{name: '江苏',value: 3.58 },
					{name: '浙江',value: 1.35 },
					{name: '江西',value: 1.09 },
					{name: '湖北',value: 0.85 },
					{name: '广西',value: 0.16 },
					{name: '甘肃',value: 0.12 },
					{name: '山西',value: 0.15 },
					{name: '内蒙古',value: 0.08 },
					{name: '陕西',value: 0.10 },
					{name: '吉林',value: 0.35 },
					{name: '福建',value: 0.70 },
					{name: '贵州',value: 1.20 },
					{name: '广东',value: 0.48 },
					{name: '青海',value: 0.10 },
					{name: '西藏',value: 0.10 },
					{name: '四川',value: 1.02 },
					{name: '宁夏',value: 0.02 },
					{name: '海南',value: 0.05 },
					{name: '台湾',value: 0 },
					{name: '香港',value: 0 },
					{name: '澳门',value: 0 }
				]
			}
		]
	};
	myChart.setOption(option);
})();

//new
(function (){
	document.getElementById("final_new").style.height='550px';
	var myChart = echarts.init(document.getElementById('final_new'));
	
	var option = {
		title : {
			text: '爸爸去哪儿节目热点事件挖掘',
			subtext: '数据来自新浪微博',
			x:'right',
			y:'bottom'
		},
		tooltip : {
			trigger: 'item',
			formatter: '{a} : {b}'
		},
		toolbox: {
			show : true,
			feature : {
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		legend: {
			x: 'left',
			data:['小朋友', '父亲', '导演', '节目组', '事件']
		},
		series : [
			{
				type:'force',
				name : "人物关系",
				categories : [
					{
						name: '小朋友'
					},
					{
						name: '父亲'
					},
					{
						name:'导演'
					},
					{
						name:'节目组'
					},
					{
						name:'事件'
					}
				],
				itemStyle: {
					normal: {
						label: {
							show: true,
							textStyle: {
								color: '#333'
							}
						},
						nodeStyle : {
							brushType : 'both',
							strokeColor : 'rgba(255,215,0,0.4)',
							lineWidth : 1
						}
					},
					emphasis: {
						label: {
							show: false
							// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
						},
						nodeStyle : {
							//r: 30
						},
						linkStyle : {}
					}
				},
				useWorker: false,
				minRadius : 15,
				maxRadius : 40,
				gravity: 1.5,
				scaling: 1.1,
				nodes:[
					{category:0, name: '杨阳洋',value : 13},
					{category:0, name: 'Feyman',value : 13},
					{category:0, name: '多多',value : 13},
					{category:0, name: 'Joe',value : 13},
					{category:0, name: '姐姐',value : 13},
					{category:0, name: '贝儿',value : 13},
					{category:1, name: '杨威',value : 16},
					{category:1, name: '吴镇宇',value : 16},
					{category:1, name: '黄磊',value : 16},
					{category:1, name: '曹格',value : 16},
					{category:1, name: '陆毅',value : 16},
					{category:2, name: '谢涤葵',value : 20},
					{category:3, name: '李锐',value : 20},
					{category:4, name: '贝儿唐僧碎碎念',value : 40},
					{category:4, name: '森林之夜',value : 40},
					{category:4, name: '做糯米糍早餐',value : 40},
					{category:4, name: '村里卖草莓',value : 40},
					{category:4, name: '女神与偶像',value : 40},
					{category:4, name: '爸爸森林失踪',value : 40},
					{category:4, name: '明日头条见',value : 40}
				],
				links : [
					{source : '李锐', target : '贝儿唐僧碎碎念', weight : 3},
					{source : '贝儿', target : '贝儿唐僧碎碎念', weight : 1},
					{source : 'Feyman', target : '贝儿唐僧碎碎念', weight : 1},
					
					{source : '李锐', target : '森林之夜', weight : 3},
					{source : '曹格', target : '森林之夜', weight : 1},
					{source : 'Joe', target : '森林之夜', weight : 1},
					{source : '姐姐', target : '森林之夜', weight : 1},
					
					{source : '李锐', target : '做糯米糍早餐', weight : 3},
					{source : '曹格', target : '做糯米糍早餐', weight : 2},
					{source : '黄磊', target : '做糯米糍早餐', weight : 2},
					{source : '杨威', target : '做糯米糍早餐', weight : 2},
					{source : '吴镇宇', target : '做糯米糍早餐', weight : 2},
					{source : '陆毅', target : '做糯米糍早餐', weight : 2},
					{source : '谢涤葵', target : '做糯米糍早餐', weight : 2},
					
					{source : '杨阳洋', target : '村里卖草莓', weight : 1},
					{source : '贝儿', target : '村里卖草莓', weight : 1},
					{source : '多多', target : '村里卖草莓', weight : 1},
					{source : 'Feyman', target : '村里卖草莓', weight : 1},
					
					{source : '吴镇宇', target : '女神与偶像', weight : 1},
					{source : '姐姐', target : '女神与偶像', weight : 1},
					{source : '杨阳洋', target : '女神与偶像', weight : 1},
					
					{source : '多多', target : '爸爸森林失踪', weight : 1},
					{source : '黄磊', target : '爸爸森林失踪', weight : 1},
					{source : '李锐', target : '爸爸森林失踪', weight : 1},
					
					{source : 'Feyman', target : '明日头条见', weight : 1},
					{source : 'Joe', target : '明日头条见', weight : 1},
					{source : '森林之夜', target : '明日头条见', weight : 4}
				]
			}
		]
	};
	myChart.setOption(option);
})();

//map_effect
(function (){
	document.getElementById("hot_issue_map_effect").style.height='550px';
	var myChart = echarts.init(document.getElementById('hot_issue_map_effect'));
	
	var option = {
		backgroundColor: '#1b1b1b',
		color: [
			'rgba(255, 255, 255, 0.8)',
			'rgba(14, 241, 242, 0.8)',
			'rgba(37, 140, 249, 0.8)'
		],
		title : {
			text: '全国综艺节目新媒体传播影响力分布',
			subtext: '7月28日-8月3日新浪微博阅读数据',
			x:'center',
			textStyle : {
				color: '#fff'
			}
		},
		tooltip : {
			trigger: 'item'
		},
		toolbox: {
			show : true,
			orient : 'vertical',
			x: 'right',
			y: 'center',
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		dataRange: {
			min : 0,
			max : 50000,
			color: ['maroon','purple','red','orange','yellow','lightgreen'],
			formatter: '{value} 万'
		},
		series : [
        {
            type: 'map',
            mapType: 'china',
            data:[],
			roam: true,
			itemStyle:{
                normal:{
                    borderColor:'rgba(100,149,237,1)',
                    borderWidth:1.5,
                    areaStyle:{
                        color: '#1b1b1b'
                    }
                }
            },
            geoCoord: {
                "梦想改造家":[121.48,31.22],
                "中国喜剧力量":[123.38,41.8],
                "一站到底":[118.78,32.04],
                "我为歌狂":[117.17,31.52],
                "十二道锋味":[119.64,29.8],
                "爸爸去哪儿":[113,28.21],
                "天天向上":[113.16,27.83],
                "快乐大本营":[112.61,26.89],
                "中国好声音":[115.480656,35.23375],
                "芝麻开门":[118.83,31.95],
                "我不是明星":[120.19,30.26],
                "十足女神范":[120.3,30.43]
            },
            markPoint : {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 10 + v/10000
                },
                effect : {
                    show: true,
                    shadowBlur : 0
                },
                itemStyle:{
                    normal:{
                        label:{show:false}
                    }
                },
                data : [
                    {name: "梦想改造家", value: 73.7},
                    {name: "中国喜剧力量", value: 134.5},
                    {name: "一站到底", value: 1104.8},
                    {name: "我为歌狂", value: 2850.2},
                    {name: "十二道锋味", value: 5369},
					{name: "爸爸去哪儿", value: 48000},
					{name: "天天向上", value: 3972},
					{name: "快乐大本营", value: 21000},
					{name: "中国好声音", value: 13000},
					{name: "芝麻开门", value: 64.9},
					{name: "我不是明星", value: 307.8},
					{name: "十足女神范", value: 38.2}
                ]
            }
        }
    ]
	};
	myChart.setOption(option);
})();