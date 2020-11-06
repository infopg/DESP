function bar(mychart,a){
    option = {
        color:['#893448','#b5304d', '#EA5151', '#FF7853', '#FFAE57', '#ffc786', '#ebdba4'],
        title:{
            text:'信息化公共项目总投入',
            left: 'center',
            top: 10,
            textStyle: {
                color: '#e3e3e3',
                fontSize:a*0.013
            }
        },
        legend: {
            data: ['网络通讯费','图书数字文献','网络软硬件设备','网络安全设备及投入','自筹系统开发', '其他'],
            textStyle:{
                color:'#e3e3e3',
            },
            bottom:'5%',
            itemGap:50,
            left:30,
            type:'scroll',
            textStyle:{
                color:'#e3e3e3',
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
            name: '万元',//x轴标签
            type: 'value',
            boundaryGap: [0, 0.01],
            nameTextStyle:{
                color:'#e3e3e3',
                fontSize:a*0.008,
            },
            axisLine:{
                show:true,
                lineStyle:{
                color:'#e3e3e3',
                }
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.008,
                }
            },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            splitNumber:5,
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
            data: ['2017','2018','2019'],  //x轴坐标
            show:true,
            nameTextStyle:{
                color:'#e3e3e3',
                fontSize:a*0.008,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.008,
                }
            },
            axisTick:{
                show: false,
               
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#e3e3e3',
                }
            },
            z:999,
        },
        grid: {
            containLabel: true
        },

        series: [
        {
            name: '网络通讯费',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            data: [7410, 7461, 7456],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '图书数字文献',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            
            data: [14533, 14769, 15564],
            itemStyle:{
                opacity:0.85,
            }
        },

        {
            name: '网络软硬件设备',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            
            data: [11606, 11076, 16584],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '网络安全设备及投入',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            
            z:999,
            data: [2472, 3503, 4459],
            itemStyle:{
                opacity:0.85,
            }
        },{
            name: '自筹系统开发',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            
            data: [6171,6549,6750],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '其他',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            
            data: [8414, 9651, 7937],
            itemStyle:{
                opacity:0.85,
            }
        },

    ]};

    $.get('./data/environment-manamge.json').done(function (data) {
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
                name: '网络通讯费',
                data: data.netCom,
            },
            {
                name: '图书数字文献',
                data: data.digit,
            },
    
            {
                name: '网络软硬件设备',
                data: data.netsoft,

            },
            {
                name: '网络安全设备及投入',
                data: data.netsceure,
            },
                    {
                name: '自筹系统开发', 
                data: data.system,

            },
            {
                name: 'ARP硬件及续保',
                data: data.arp,
            },{
                name: '其他',
                data: data.other,
            },
        ]
        });

    });


    mychart.setOption(option);
    }

