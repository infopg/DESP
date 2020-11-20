function bar1(mychart,a){
    option = {

        color:['#893448', '#EA5151', '#FF7853', '#FFAE57', '#ebdba4'],

        legend: {
            data: ["中国科技网","中国教育网", "中国联通","中国电信","中国移动"],
            textStyle:{
                color:'#333333',
            },
            bottom:'3%',
            itemGap:40,
            type:'scroll',
            textStyle:{
                color:'#333333',
                fontSize:a*0.008,
            }

        },
        grid:{
            containLabel:true,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            name: 'Gbps',//x轴标签
            type: 'value',
            boundaryGap: [0, 0.01],
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisLine:{
                show:true,
                lineStyle:{
                color:'#333333',
                }
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.009,
                }
            },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            splitNumber:5,
            //interval:,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            }
        },

        yAxis: {
            name:'年份',//y轴单位
            type: 'category',
            data: [],  //x轴坐标
            show:true,
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.009,
                }
            },
            axisTick:{
                show: false,

            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#333333',
                }
            },
            z:999,
        },
        grid: {
            containLabel: true
        },

        series: [
        {
            name: '中国科技网',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },{
            name: '中国教育网',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },{
            name: '中国联通',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },{
            name: '中国电信',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '中国移动',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },

    ]};

    $.get('/static/DATA/environment-infrastructure.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
           //alert('2'+data.year);
            data = JSON.parse(data);
        //alert('1'+data.year);
        }
        //alert(data.year);
        mychart.setOption({
            yAxis: [

                {
                    name:'年份',
                    data: data.year, //类目数据（在类目轴中有效）
                }
            ],

            series: [
                {
                    name: '中国科技网',
                    data: data.science,

                },{
                    name: '中国教育网',
                    data: data.edu,

                },{
                    name: '中国联通',
                    data: data.union,

                },{
                    name: '中国电信',
                    data: data.tele,

                },
                {
                    name: '中国移动',
                    data: data.mobile

                },
            ]
        });
    });
    mychart.setOption(option);
}

    function bar2(mychart,a){
        option = {
            color:['#EA5151', '#FFAE57', '#FF7853', '#ebdba4','#893448', ],

            legend: {
                data: ['CPU计算能力','异构计算能力'],
                textStyle:{
                    color:'#333333',
                },
                bottom:'3%',
                itemGap:50,
                type:'scroll',
                textStyle:{
                    color:'#333333',
                    fontSize:a*0.008,
                }

            },

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                name: 'Pflops',//x轴标签
                type: 'value',
                boundaryGap: [0, 0.01],
                nameTextStyle:{
                    color:'#333333',
                    fontSize:a*0.009,
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                    color:'#333333',
                    }
                },
                axisLabel:{
                    textStyle:{
                        fontSize:a*0.009,
                    }
                },
                axisTick:{
                    show: false,
                    alignWithLabel:true,
                    length:0,
                },
                splitNumber:5,
                interval:42,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }
            },

            yAxis: {
                name:'年份',//y轴单位
                type: 'category',
                data: [],  //x轴坐标
                show:true,
                nameTextStyle:{
                    color:'#333333',
                    fontSize:a*0.009,
                },
                axisLabel:{
                    textStyle:{
                        fontSize:a*0.009,
                    }
                },
                axisTick:{
                    show: false,

                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#333333',
                    }
                },
                z:999,
            },
            grid: {
                containLabel: true
            },

            series: [
            {
                name: 'CPU计算能力',
                type: 'bar',
                barWidth:40,
                stack: '总量',
                data: [],
                itemStyle:{
                    opacity:0.85,
                }
            },
            {
                name: '异构计算能力',
                type: 'bar',
                barWidth:40,
                stack: '总量',
                data: [],
                itemStyle:{
                    opacity:0.85,
                }
            },

        ]};

        $.get('/static/DATA/environment-infrastructure.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
               //alert('2'+data.year);
                data = JSON.parse(data);
            //alert('1'+data.year);
            }
            //alert(data.year);
            mychart.setOption({
                yAxis: [

                    {
                        name:'年份',
                        data: data.year, //类目数据（在类目轴中有效）
                    }
                ],

                series: [{
                    name: 'CPU计算能力',
                    data: data.cpu,
                },
                {
                    name: '异构计算能力',
                    data: data.heterogenity,
                }]
            });
        });
    mychart.setOption(option);
    }



    function bar3(mychart,a){
        option = {
            color:['#FF7853','#ebdba4','#EA5151', '#FFAE57',  '#893448', ],
            title:{
                text:'自建存储环境对比',
                left:'center',
                textStyle:{
                    fontsize:'130%'
                }
            },
            legend: {
                data: ['在线存储','备份/归档存储'],
                textStyle:{
                    color:'#333333',
                },
                bottom:'3%',
                itemGap:50,
                type:'scroll',
                textStyle:{
                    color:'#333333',
                    fontSize:a*0.009,
                }

            },

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                name: 'TB',//x轴标签
                type: 'value',
                boundaryGap: [0, 0.01],
                nameTextStyle:{
                    color:'#333333',
                    fontSize:a*0.009,
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                    color:'#333333',
                    }
                },
                axisLabel:{
                    textStyle:{
                        fontSize:a*0.009,
                    }
                },
                axisTick:{
                    show: false,
                    alignWithLabel:true,
                    length:0,
                },
                splitNumber:5,
                interval:36000,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }
            },

            yAxis: {
                name:'年份',//y轴单位
                type: 'category',
                data: [],  //x轴坐标
                show:true,
                nameTextStyle:{
                    color:'#333333',
                    fontSize:'90%',
                },
                axisLabel:{
                    textStyle:{
                        fontSize:a*0.009,
                    }
                },
                axisTick:{
                    show: false,

                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#333333',
                    }
                },
                z:999,
            },
            grid: {
                containLabel: true
            },

            series: [
            {
                name: '在线存储',
                type: 'bar',
                barWidth:40,
                stack: '总量',
                data: [],
                itemStyle:{
                    opacity:0.85,
                },
                label:{
                    show:true,
                    position:'inside'
                }
            },
            {
                name: '备份/归档存储',
                type: 'bar',
                barWidth:40,
                stack: '总量',
                data: [],
                itemStyle:{
                    opacity:0.85,
                },
                label:{
                    show:true,
                    position:'inside'
                }
            },

        ]};

        $.get('/static/DATA/environment-infrastructure.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
               //alert('2'+data.year);
                data = JSON.parse(data);
            //alert('1'+data.year);
            }
            //alert(data.year);
            mychart.setOption({
                yAxis: [

                    {
                        name:'年份',
                        data: data.year, //类目数据（在类目轴中有效）
                    }
                ],

                series: [{
                    name: '在线存储',
                    data: data.online,
                },
                {
                    name: '备份/归档存储',
                    data: data.backup,
                }]
            });
        });
    mychart.setOption(option);
    }

function fall1(mychart,a){

    option = {
        title:{
          text:'2019年研究单位云计算服务使用情况',
          textStyle:{
              fontsize:'130%',
          },
            left:'center',
        },
        xAxis: {
            type: 'category',
            show:true,
            data: [],
            nameTextStyle:{
                color:'#333333',
                fontSize:'90%',
            },
            axisLabel:{
                interval:0,
                textStyle:{
                    fontSize:a*0.009,
                    lineHeight:a*0.01
                },

            },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            axisLine:{
                show:true,
                lineStyle:{
                color:'#333333',
                }
            },


        },
        grid:{
            interval:0,
            containLabel:true,
        },
        yAxis: {
            type: 'value',
            name:'家',
            show:true,
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#333333',
                }
            },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.009,
                }
            },
            splitNumber:5,
            interval:12,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            }
        },

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',

            },
            formatter: '{b}: {c}家',


        },

        series: [{
            data: [],
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter:'{c}家'
                }
            },
            itemStyle:{
                color:'#EA6151',
                opacity:0.85,
            },
            barMaxWidth:60,

        }]
    };

    $.get('/static/DATA/environment-infrastructure.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
           //alert('2'+data.year);
            data = JSON.parse(data);
        //alert('1'+data.year);
        }
        //alert(data.year);
        mychart.setOption({
            xAxis: [

                {
                    //name:'TB',
                    data: data.local, //类目数据（在类目轴中有效）
                }
            ],

            series: [{
                data: data.selfstoragevalue,
            }]
        });

    });

    mychart.setOption(option);
}

    function fall2(mychart,a){

        option = {
            title:{
              text:'2019年研究单位网络监控运维情况',
              textStyle:{
                  fontsize:'130%',
              },
                left:'center',
        },
            xAxis: {
                type: 'category',
                show:true,
                //name:'Tflops',
                data: [],
                nameTextStyle:{
                    color:'#333333',
                    fontSize:'90%',
                },
                axisTick:{
                    show: false,
                    alignWithLabel:true,
                    length:0,
                },
                axisLabel:{
                    interval:0,
                    textStyle:{
                        fontSize:a*0.009,
                        lineHeight:a*0.01
                    },
                    rotate:50
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                    color:'#333333',
                    }
                },

            },
            yAxis: {
                type: 'value',
                name:'家',
                show:true,
                nameTextStyle:{
                    color:'#333333',
                    fontSize:'90%',
                },
                axisTick:{
                    show: false,
                    alignWithLabel:true,
                    length:0,
                },
                axisLabel:{
                    interval:0,
                    textStyle:{
                        fontSize:a*0.009,
                    }
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#333333',
                    }
                },
                splitNumber:5,
                interval:24,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }
            },

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',

                },
                formatter: '{b}: {c}家',


            },

            series: [{
                data: [],
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter:'{c}家'
                    }
                },
                itemStyle:{
                    color:'#FF7853',
                    opacity:0.85,
                },
                barMaxWidth:40,

            }]
        };

        $.get('/static/DATA/environment-infrastructure.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
               //alert('2'+data.year);
                data = JSON.parse(data);
            //alert('1'+data.year);
            }
            //alert(data.selfcalculate);
            mychart.setOption({
                xAxis: [

                    {
                        //name:'Tflops',
                        data: data.selfstorage, //类目数据（在类目轴中有效）
                    }
                ],
                series: [{
                    data: data.selfcalculate,
                }]
            });

        });


    mychart.setOption(option);
    }



    function fall3(mychart,a){
        option = {
            title:{
              text:'2019年研究单位主交换机国产情况',
              textStyle:{
                  fontsize:'130%',
              },
                left:'center',
            },
            xAxis: {
                type: 'category',
                show:true,
                //name:'使用率',
                data: [],
                nameTextStyle:{
                    color:'#333333',
                    fontSize:a*0.009,
                },
                axisTick:{
                    show: false,
                    alignWithLabel:true,
                    length:0,
                },
                axisLabel:{
                    interval:0,
                    textStyle:{
                        fontSize:a*0.009,
                        lineHeight:a*0.01
                    }
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                    color:'#333333',
                    }
                },

            },
            yAxis: {
                type: 'value',
                name:'家',
                show:true,
                nameTextStyle:{
                    color:'#333333',
                    fontSize:a*0.009,
                },
                axisTick:{
                    show: false,
                    alignWithLabel:true,
                    length:0,
                },
                axisLabel:{
                    textStyle:{
                        fontSize:a*0.009,

                    },
                    lineHeight:18
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#333333',
                    }
                },
                splitNumber:5,
                interval:16,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }
            },

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',

                },
                formatter: '{b} 使用率: {c}家',


            },

            series: [{
                data: [],
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter:'{c}家'
                    }
                },
                itemStyle:{
                    color:'#FFAE57',
                    opacity:0.85,
                },
                barMaxWidth:60,

            }]
        };

        $.get('/static/DATA/environment-infrastructure.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
               //alert('2'+data.year);
                data = JSON.parse(data);
            //alert('1'+data.year);
            }
            //alert(data.selfcalculate);
            mychart.setOption({
                xAxis: [

                    {
                        //name:'使用率',
                        data: data.cloud, //类目数据（在类目轴中有效）
                    }
                ],
                series: [{
                    data: data.cloudvalue,
                }]
            });

        });

    mychart.setOption(option);
    }

function gauge(mychart,a){
    var option = {
        // backgroundColor:'#333333',
        tooltip : {
            formatter: "{b} {c} Gbps"
        },
        title:{
            text:'2019年网络接入带宽总计',
            left: 'center',
            top:'2%',
            textStyle: {
                color: '#333333',
                fontSize:a*0.013
            }
        },
        series : [
            {
                name: '中国科技网',
                type: 'gauge',
                z: 3,
                min: 0,
                max: 80,
                splitNumber:8,
                radius: a*0.07,
                center:['50%','57%'],
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.09, '#ffd800'],[0.82, '#ff5c00'],[1, '#c1232b']],
                        width: 3,
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10
                }
                },
                axisTick: {            // 坐标轴小标记
                    length: '17%',        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length: 20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10,
                        fontSize:a*0.007
                    }
                },
                title : {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: a*0.011,
                    fontStyle: 'italic',
                    color:'#333333'
                },
                detail : {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE

                    fontWeight: 'bolder',
                    formatter: function (value) {
                        return value+'Gbps';
                        },
                    fontSize:a*0.01
                },
                data:[{value: 24, name: '中国科技网'}]
            },
            {
                name: '中国教育网',
                type: 'gauge',
                z: 3,
                min: 0,
                max: 15,
                splitNumber:5,
                center: ['17.5%', '73%'],    // 默认全局居中
                radius: a*0.05,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.09, '#ffd800'],[0.82, '#ff5c00'],[1, '#c1232b']],
                        width: 3,
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: '17%',        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10,
                        fontSize:a*0.007
                    }
                },
                pointer: {           // 分隔线
                    shadowColor : '#c9c9c9', //默认透明
                    shadowBlur: 10,
                    opacity:0.5,

                },
                splitLine: {           // 分隔线
                    length: 20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10
                    }
                },

                title : {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: a*0.0088,
                    fontStyle: 'italic',
                    color:'#333333'
                },
                detail : {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE

                    fontWeight: 'bolder',
                    fontSize:a*0.0085,
                    formatter: function (value) {
                        return value+'Gbps';
                    },
                    offsetCenter:['-2.5%', '40%'],


                },
                data:[{value: 0.19, name: '中国教育网'}]
            },
            {
                name: '中国联通',
                type: 'gauge',
                center: ['24%', '30%'],    // 默认全局居中
                radius: a*0.05,
                min:0,
                max:15,
                endAngle:0,
                splitNumber:5,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.09, '#ffd800'],[0.82, '#ff5c00'],[1, '#c1232b']],
                        width: 3,
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length:'17%',        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length:20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {           // 分隔线
                    shadowColor : '#c9c9c9', //默认透明
                    shadowBlur: 10,
                    opacity:0.5,

                },
                title : {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: a*0.0088,
                    fontStyle: 'italic',
                    color:'#333333',
                    offsetCenter:['-6%', '-38%'],
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10,
                        fontSize:a*0.007
                    }
                },
                detail : {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE

                    fontWeight: 'bolder',
                    fontSize:a*0.0085,
                    formatter: function (value) {
                        return value+'Gbps';
                    },
                    offsetCenter:['6%', '40%'],


                },
                data:[{value: 10.59, name: '中国联通'}]
            },
            {
                name: '中国电信',
                type: 'gauge',
                center: ['75.5%', '30%'],    // 默认全局居中
                radius: a*0.05,
                min: 0,
                max: 15,
                startAngle: 180,

                splitNumber: 5,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.09, '#ffd800'],[0.82, '#ff5c00'],[1, '#c1232b']],
                        width: 3,
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    splitNumber:5 ,
                    length: '17%',        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10
                    }
                },

                splitLine: {           // 分隔线
                    length: 20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10,
                        fontSize:a*0.007
                    }
                },
                pointer: {           // 分隔线
                    shadowColor : '#c9c9c9', //默认透明
                    shadowBlur: 10,
                    opacity:0.5,

                },
                title : {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: a*0.0088,
                    fontStyle: 'italic',
                    color:'#333333'
                },
                detail : {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE

                    fontWeight: 'bolder',
                    fontSize:a*0.0085,
                    formatter: function (value) {
                        return value+'Gbps';
                    },
                    offsetCenter:['-15%', '40%'],


                },
                data:[{value: 12.64, name: '中国电信'}]
            },
            {
                name: '中国移动',
                type: 'gauge',
                center : ['82.5%', '73%'],    // 默认全局居中
                radius : a*0.05,
                min: 0,
                max: 15,

                splitNumber: 5,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.09, '#ffd800'],[0.82, '#ff5c00'],[1, '#c1232b']],
                        width: 3,
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    splitNumber:5 ,
                    length: '17%',        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10
                    }
                },

                splitLine: {           // 分隔线
                    length: 20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#c9c9c9', //默认透明
                        shadowBlur: 10,
                        fontSize:a*0.007
                    }
                },
                pointer: {           // 分隔线
                    shadowColor : '#c9c9c9', //默认透明
                    shadowBlur: 10,
                    opacity:0.5,

                },
                title : {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: a*0.0088,
                    fontStyle: 'italic',
                    color:'#333333'
                },
                detail : {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE

                    fontWeight: 'bolder',
                    fontSize:a*0.0085,
                    formatter: function (value) {
                        return value+'Gbps';
                    },
                    offsetCenter:['-2.5%', '40%'],


                },
                data:[{value: 6.89, name: '中国移动'}]
            }
        ]
    };




mychart.setOption(option);
    }

function pie1(mychart,a){
    var option = {
        title:{
            text:'2019年科技网接入带宽使用率',
            textStyle:{
                fontsize:'130%',
            },
            left:'center'
        },
        color:['#ebdba4','#EA5151', '#FF7853', '#FFAE57', '#893448'],
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                return '接入带宽使用率'+ params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/103)*100).toFixed(2) + '%)';
            }
        },
        dataset:{
            source:[]
        },

        series : [
            {
                name:'存储量',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                radius : ['10%', '60%'],
                encode:{
                    itemName:'category',
                    value:'value'
                },
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: '#333333',
                            fontSize:a*0.009,

                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#333333'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 80,
                        shadowColor: 'rgba(255,178,72,0.2)',
                        opacity:0.8,
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };

    $.get('/static/DATA/environment-infrastructure.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset:{
                source:data.inside,
            },

        });

    });
mychart.setOption(option);
}




function pie2(mychart,a){

    var option = {
        color:[ '#ebdba4','#EA5151', '#FF7853', '#FFAE57','#893448',],
        title:{
            text:'2019年研究单位园区无线网覆盖率',
            textStyle:{
                fontsize:'130%',
            },
            left:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                return '无线网络覆盖率'+params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/103)*100).toFixed(2) + '%)';
            }
        },
        dataset:{
            source:[]
        },

        series : [
            {
                name:'存储量',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                radius : ['10%', '60%'],
                encode:{
                    itemName:'category',
                    value:'value'
                },
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: '#333333',
                            fontSize:a*0.009,

                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#333333'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 80,
                        shadowColor: 'rgba(255,178,72,0.2)',
                        opacity:0.8,
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };

    $.get('/static/DATA/environment-infrastructure.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset:{
                source:data.outside,
            },

        });

    });
    mychart.setOption(option);
}

    function pie3(mychart,a){
        var option = {
            // backgroundColor: '#333333',
            color:['#FF7853', '#FFAE57','#EA5151',  '#ebdba4','#893448',],
            title:{
            text:'2019年研究单位IPv6出口流量',
            textStyle:{
                fontsize:'130%',
            },
                left:'center'
        },
            tooltip : {
                trigger: 'item',
                formatter: function (params) {
                    return '出口流量'+params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/103)*100).toFixed(2) + '%)';
                }
            },
            dataset:{
                source:[]
            },

            series : [
                {
                    name:'云服务',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    radius : ['10%', '60%'],
                    encode:{
                        itemName:'category',
                        value:'value'
                    },
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: '#333333',
                                fontSize:a*0.009,

                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#333333'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 80,
                            shadowColor: 'rgba(255,178,72,0.2)',
                            opacity:0.8,
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };

        $.get('/static/DATA/environment-infrastructure.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
                //alert('2'+data.std)
                data = JSON.parse(data);
                //alert('1'+data.year)
            }
            //alert(data.security);
            mychart.setOption({
                dataset:{
                    source:data.userate,
                },

            });

        });
    mychart.setOption(option);
    }



