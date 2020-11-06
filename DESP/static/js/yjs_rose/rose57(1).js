function rose19_57(chart1, a){

//定义数据
  option = {
       title: {
        text: '员工及参加培训情况',
        subtext: '注：参加培训即在中国科学院继续教育网参加学习',
        left: 'center'
    },


    series : [
        {
            name: '正式编制',
            type: 'gauge',
            min: 0,
            max: 2000,
            splitNumber: 10,
            radius: '45%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 15,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {
                backgroundColor: 'auto',
                borderRadius: 2,
                color: '#eee',
                padding: 3,
                textShadowBlur: 2,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
                textShadowColor: '#222'
            },
            title: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 20,

            },
            detail: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE

             fontWeight: 'bolder'
            },
            data: []
        },
        {
            name: '在读研究生',
            type: 'gauge',
            center: ['20%', '55%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 2000,
            splitNumber: 10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width: 5
            },
            title: {
                offsetCenter: [0, '-30%'],       // x, y，单位px
            },
            detail: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder'
            },
            data: []
        },
        {
            name: '参与培训',
            type: 'gauge',
            center: ['80%', '55%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 2000,

            splitNumber: 10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                show: false
            },

            splitLine: {           // 分隔线
                length: 15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width:2
            },
            title: {
                 offsetCenter: [0, '-30%']
            },
            detail: {
                fontWeight: 'bolder'
            },
            data: []
        }
    ]
};


    $.get('/static/DATA/data5.json').done(function (data) {
        if (typeof (data) == "string") {
            data = JSON.parse(data);
        }
        chart1.setOption({

        series: [

        {
            name: '正式编制',
            data: [{value: data.gauge19[56].data[0],
                name:  '正式编制'}]
        },
        {
            name: '在读研究生',

            data: [{value: data.gauge19[56].data[1], name:'在读研究生' }]
        },
        {
            name: '参与培训',

            data: [{value:data.gauge19[56].data[2], name: '参与培训'}]
        }
     ]

        })


 });



        //使用制定的配置项和数据显示图表
        chart1.setOption(option);
        //自适应
        window.onresize = function () {
                
            chart1.resize();
            
        }

}

function rose18_57(chart1, a){

//定义数据
  option = {
       title: {
        text: '员工及参加培训情况',
        subtext: '注：参加培训即在中国科学院继续教育网参加学习',
        left: 'center'
    },


    series : [
        {
            name: '正式编制',
            type: 'gauge',
            min: 0,
            max: 2000,
            splitNumber: 10,
            radius: '45%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 15,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {
                backgroundColor: 'auto',
                borderRadius: 2,
                color: '#eee',
                padding: 3,
                textShadowBlur: 2,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
                textShadowColor: '#222'
            },
            title: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 20,

            },
            detail: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE

             fontWeight: 'bolder'
            },
            data: []
        },
        {
            name: '在读研究生',
            type: 'gauge',
            center: ['20%', '55%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 2000,
            splitNumber: 10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width: 5
            },
            title: {
                offsetCenter: [0, '-30%'],       // x, y，单位px
            },
            detail: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder'
            },
            data: []
        },
        {
            name: '参与培训',
            type: 'gauge',
            center: ['80%', '55%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 2000,

            splitNumber: 10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                show: false
            },

            splitLine: {           // 分隔线
                length: 15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width:2
            },
            title: {
                 offsetCenter: [0, '-30%']
            },
            detail: {
                fontWeight: 'bolder'
            },
            data: []
        }
    ]
};


    $.get('/static/DATA/data5.json').done(function (data) {
        if (typeof (data) == "string") {
            data = JSON.parse(data);
        }
        chart1.setOption({

        series: [

        {
            name: '正式编制',

            data: [{value: data.gauge18[56].data[0],
                name:  '正式编制'}]
        },
        {
            name: '在读研究生',

            data: [{value: data.gauge18[56].data[1], name:'在读研究生' }]
        },
        {
            name: '参与培训',

            data: [{value:data.gauge18[56].data[2], name: '参与培训'}]
        }
     ]

        })


 });



        //使用制定的配置项和数据显示图表
        chart1.setOption(option);
        //自适应
        window.onresize = function () {

            chart1.resize();

        }

}

function rose17_57(chart1, a){

//定义数据
  option = {
       title: {
        text: '员工及参加培训情况',
        subtext: '注：参加培训即在中国科学院继续教育网参加学习',
        left: 'center'
    },


    series : [
        {
            name: '正式编制',
            type: 'gauge',
            min: 0,
            max: 2000,
            splitNumber: 10,
            radius: '45%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 15,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {
                backgroundColor: 'auto',
                borderRadius: 2,
                color: '#eee',
                padding: 3,
                textShadowBlur: 2,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
                textShadowColor: '#222'
            },
            title: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 20,

            },
            detail: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE

             fontWeight: 'bolder'
            },
            data: []
        },
        {
            name: '在读研究生',
            type: 'gauge',
            center: ['20%', '55%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 2000,
            splitNumber: 10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width: 5
            },
            title: {
                offsetCenter: [0, '-30%'],       // x, y，单位px
            },
            detail: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder'
            },
            data: []
        },
        {
            name: '参与培训',
            type: 'gauge',
            center: ['80%', '55%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 2000,

            splitNumber: 10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                show: false
            },

            splitLine: {           // 分隔线
                length: 15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width:2
            },
            title: {
                 offsetCenter: [0, '-30%']
            },
            detail: {
                fontWeight: 'bolder'
            },
            data: []
        }
    ]
};


    $.get('/static/DATA/data5.json').done(function (data) {
        if (typeof (data) == "string") {
            data = JSON.parse(data);
        }
        chart1.setOption({

        series: [

        {
            name: '正式编制',

            data: [{value: data.gauge17[56].data[0],
                name:  '正式编制'}]
        },
        {
            name: '在读研究生',

            data: [{value: data.gauge17[56].data[1], name:'在读研究生' }]
        },
        {
            name: '参与培训',

            data: [{value:data.gauge17[56].data[2], name: '参与培训'}]
        }
     ]

        })


 });



        //使用制定的配置项和数据显示图表
        chart1.setOption(option);
        //自适应
        window.onresize = function () {

            chart1.resize();

        }

}

function rose16_57(chart1, a){

//定义数据
  option = {
       title: {
        text: '员工及参加培训情况',
        subtext: '注：参加培训即在中国科学院继续教育网参加学习',
        left: 'center'
    },


    series : [
        {
            name: '正式编制',
            type: 'gauge',
            min: 0,
            max: 2000,
            splitNumber: 10,
            radius: '45%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 15,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {
                backgroundColor: 'auto',
                borderRadius: 2,
                color: '#eee',
                padding: 3,
                textShadowBlur: 2,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
                textShadowColor: '#222'
            },
            title: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 20,

            },
            detail: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE

             fontWeight: 'bolder'
            },
            data: []
        },
        {
            name: '在读研究生',
            type: 'gauge',
            center: ['20%', '55%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 2000,
            splitNumber: 10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width: 5
            },
            title: {
                offsetCenter: [0, '-30%'],       // x, y，单位px
            },
            detail: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder'
            },
            data: []
        },
        {
            name: '参与培训',
            type: 'gauge',
            center: ['80%', '55%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 2000,

            splitNumber: 10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                show: false
            },

            splitLine: {           // 分隔线
                length: 15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width:2
            },
            title: {
                 offsetCenter: [0, '-30%']
            },
            detail: {
                fontWeight: 'bolder'
            },
            data: []
        }
    ]
};


    $.get('/static/DATA/data5.json').done(function (data) {
        if (typeof (data) == "string") {
            data = JSON.parse(data);
        }
        chart1.setOption({

        series: [

        {
            name: '正式编制',

            data: [{value: data.gauge16[56].data[0],
                name:  '正式编制'}]
        },
        {
            name: '在读研究生',

            data: [{value: data.gauge16[56].data[1], name:'在读研究生' }]
        },
        {
            name: '参与培训',

            data: [{value:data.gauge16[56].data[2], name: '参与培训'}]
        }
     ]

        })


 });



        //使用制定的配置项和数据显示图表
        chart1.setOption(option);
        //自适应
        window.onresize = function () {

            chart1.resize();

        }

}