function gauge(mychart,a){
    var option = {
        backgroundColor:'#333333',
        tooltip : {
            formatter: "{a} <br/>{c} {b}"
        },
        title:{
            text:'网络接入带宽总计',
            left: 'center',
            top:'2%',
            textStyle: {
                color: '#e3e3e3',
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
                    color:'#e3e3e3'
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
                    color:'#e3e3e3'
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
                    color:'#e3e3e3',
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
                    color:'#e3e3e3'
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
                    color:'#e3e3e3'
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

