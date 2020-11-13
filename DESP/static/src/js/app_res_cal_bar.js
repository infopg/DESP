function bar1(mychart,a){
    option = {
        color:[ '#EA5151','#FFAE57','#ebdba4'],
        title: {
            text: '各学科高性能计算机使用情况',
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
            data:['自建超级计算机','租用院内超级计算机','租用院外超级计算机'],
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
            data:['其他','物理、化学和数学','材料、前沿科学\n和未来科技','生物生命科学','天文和地球科学','应用科学和工程技术','信息科学','生态环境'],
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
            min:0,
            max:40000,
            interval: 8000
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
            min:0,
            max:8000,
            interval:1600,
        }],
        series: [{
            name: '自建超级计算机',
            data: [40500,37158.15,8712.13,8359.08,6038.26,5000.56,3580.96,2259.93],
            type: 'bar',
            barMaxWidth:30,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '租用院内超级计算机',
            data: [0,12073,66.77,5344.13,160.22,207.05,301.65,798.48],
            type: 'bar',
            barMaxWidth:30,
            yAxisIndex: 1,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '租用院外超级计算机',
            data: [0,6803.39,4425.92,764.59,387,1994.9,245.42,512.79],
            type: 'bar',
            barMaxWidth:30,
            yAxisIndex: 1,
            itemStyle:{
                opacity:0.85
            },
        }],
    };
        mychart.setOption(option);
}


function bar2(mychart,a){
    option = {
        color:['#eddd86','#f8cb7f','#efa666','#eab026','#e3852b','#d85d2a','#EA5151'],
        title: {
            text: '各学科在科学计算发展和应用方面取得成果情况',
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
            data:['其他', '信息科学', '应用科学和工程技术', '天文和地球科学', '生物生命科学', '材料、前沿科学\n和未来科技',
       '物理、化学\n和数学', '生态环境'],
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
            // min:0,
            // max:40000,
            // interval: 8000
        }],
        series: [{
            name: '论文',
            data: [2,  61,  80,  91, 180, 216, 276, 589],
            type: 'bar',
            stack:'成果',
            barMaxWidth:30,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '专利',
            data: [29,  0,  2, 31,  9,  7, 27, 22],
            type: 'bar',
            stack:'成果',
            barMaxWidth:30,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '软件著作',
            data: [ 0,  0,  8,  3,  1, 24,  7,  5],
            type: 'bar',
            stack:'成果',
            barMaxWidth:30,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '数据论文',
            data: [  0,  0,  8,  1,  1,  6, 10,  7],
            type: 'bar',
            stack:'成果',
            barMaxWidth:30,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '奖项',
            data: [ 1, 0, 1, 2, 3, 2, 2, 0],
            type: 'bar',
            stack:'成果',
            barMaxWidth:30,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '软著',
            data: [ 4, 3, 0, 0, 0, 1, 0, 0],
            type: 'bar',
            stack:'成果',
            barMaxWidth:30,
            itemStyle:{
                opacity:0.85
            },
        },
        {
            name: '其他',
            data: [ 0,  0,  4,  4,  0, 17, 16,  7],
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