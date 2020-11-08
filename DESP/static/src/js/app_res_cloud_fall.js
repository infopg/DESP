function bar1(mychart,a){
    option = {
        color:[ '#EA5151','#FFAE57','#ebdba4'],
        title: {
            text: '各学科云计算机使用情况',
            textStyle:{
                color:'#333333',
                fontSize:a*0.013
            },
            left:'center',
            top:0
        },
        tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
                formatter: '{a0}: {c0} CPU小时<br />{a1}: {c1} CPU小时<br />{a2}: {c2} CPU小时',
        },
        legend:{
            data:['自建云计算机','租用院内云计算机','租用院外云计算机'],
            left:'center',
            bottom:0
        },
        grid:{
            containLabel:true,
            left:0,
        },
        xAxis: {
            type:'category',
            // name:'学科',
            data:['物理、化学和数学', '天文和地球科学', '材料、前沿科学\n和未来科技', '生态环境', '生物生命科学', '信息科学',
       '应用科学和工程技术', '其他'],
            show:true,
            nameTextStyle:{
                show:false,
                color:'#333333',
                fontSize:a*0.009,
                lineHeight:a*0.01,
            },
            axisTick:{
                show: true,
            },
            axisLabel:{
                interval:0,
                textStyle:{
                    fontSize:a*0.009,
                    lineHeight:a*0.01,
                },
            },
            axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#333333',
                    }
            },
            splitLine: {
                show:true,
                lineStyle: {
                    type: 'dashed',
                    color:'#aaaaaa',
                    opacity:0.4
                }
            },

        },
        yAxis: [{
            type:'value',
            name:'自建CPU小时',
            show:true,

            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisTick:{
                show: false,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.009,
                }
            },
            splitLine: {
                show:true,
                lineStyle: {
                    type: 'dashed',
                    color:'#aaaaaa',
                    opacity:0.4
                }
            },
            scale: true,
        },
        {
            type:'value',
            name:'租用CPU小时',
            show:true,
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisTick: {
                show:false
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.009,
                }
            },
            splitLine: {
                show:true,
                lineStyle: {
                    type: 'dashed',
                    color:'#aaaaaa',
                    opacity:0.4
                }
            },
        }],
        series: [{
            name: '自建云计算机',
            data: [25501359, 17253673, 10421551,  7974388,  6741843,  1281859,   562630, 8760,],
            type: 'bar',
            barMaxWidth:30,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '租用院内云计算机',
            data: [5897990,   6771,  600219, 7921660, 5021269,  12000,  526800,       0],
            type: 'bar',
            barMaxWidth:30,
            yAxisIndex: 1,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '租用院外云计算机',
            data: [11780396,  3089659, 11729894,  7244160,  1027645, 114840,  4569600, 0],
            type: 'bar',
            barMaxWidth:30,
            yAxisIndex: 1,
            itemStyle:{
                opacity:0.85
            },
        }],
    };
        mychart.setOption(option);
};

function bar2(mychart,a){
    option = {
        color:['#eddd86','#f8cb7f','#efa666','#eab026','#e3852b','#d85d2a','#EA5151'],
        title: {
            text: '各学科在云计算科研方面取得成果情况',
            textStyle:{
                color:'#333333',
                fontSize:a*0.013
            },
            left:'center',
            top:0
        },
        tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
                formatter: '{a0}: {c0} 篇<br />{a1}: {c1} 项<br />{a2}: {c2} 篇<br />{a3}: {c3} 篇<br />{a4}: {c4} 个<br />{a5}: {c5} 篇<br />{a6}: {c6} 项',
        },
        legend:{
            data:['论文', '专利',  '软件著作', '数据论文', '奖项','软著', '其他'],
            left:'center',
            bottom:0
        },
        grid:{
            containLabel:true,
            left:0,
        },
        yAxis: {
            type:'category',
            data:['其他', '应用科学和工程技术', '信息科学', '天文和地球科学', '材料、前沿科学\n和未来科技', '物理、化学和数学',
       '生态环境', '生物生命科学'],
            show:true,
            nameTextStyle:{
                show:false,
                color:'#333333',
                fontSize:a*0.009,
                lineHeight:a*0.01,
            },
            axisTick:{
                show: false,
            },
            axisLabel:{
                interval:0,
                textStyle:{
                    fontSize:a*0.009,
                    lineHeight:a*0.01,
                },
            },
            axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#333333',
                    }
            },
            splitLine: {
                show:true,
                lineStyle: {
                    type: 'dashed',
                    color:'#aaaaaa',
                    opacity:0.4
                }
            },

        },
        xAxis: [{
            type:'value',
            name:'成果数量',
            show:true,

            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisTick:{
                show: false,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.009,
                }
            },
            splitLine: {
                show:true,
                lineStyle: {
                    type: 'dashed',
                    color:'#aaaaaa',
                    opacity:0.4
                }
            },
            scale: true,
        }],
        series: [{
            name: '论文',
            data: [4,  42,  44,  46,  49,  65, 218, 265],
            type: 'bar',
            stack:'成果',
            barMaxWidth:30,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '专利',
            data: [24,  0,  3,  4, 21, 17, 24,  4],
            type: 'bar',
            stack:'成果',
            barMaxWidth:30,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '软件著作',
            data: [2,  0,  8,  2,  0, 10,  4,  1],
            type: 'bar',
            stack:'成果',
            barMaxWidth:30,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '数据论文',
            data: [  0, 0, 6, 4, 1, 2, 5, 4],
            type: 'bar',
            stack:'成果',
            barMaxWidth:30,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '奖项',
            data: [ 0, 0, 1, 0, 0, 0, 1, 0],
            type: 'bar',
            stack:'成果',
            barMaxWidth:30,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '软著',
            data: [ 5, 0, 0, 0, 0, 0, 5, 2],
            type: 'bar',
            stack:'成果',
            barMaxWidth:30,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '其他',
            data: [ 0,  0,  0,  3,  3, 16,  2,  9],
            type: 'bar',
            stack:'成果',
            barMaxWidth:30,
            itemStyle:{
                opacity:0.85
            },
        }],
    };
        mychart.setOption(option);
    }