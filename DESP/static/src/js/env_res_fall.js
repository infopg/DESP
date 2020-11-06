function fall1(mychart,a){
        
    option = {
        backgroundColor:'#333333',
        //color:['#EA5151', '#FF7853', '#FFAE57'],
        title: {
            text: '研究单位自建文献情报资源种类',

            x:'center',//水平位置：居中
            //y:'bottom',//垂直位置：底部
            textStyle: {
                color: '#e3e3e3',
                fontSize:a*0.013
            },
            
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                var tar = params[1];
                return tar.name + '：' + tar.value + '家';
            }
        },
        grid:{
            containLabel:true,
        },
        xAxis: {
            type : 'category',
            splitLine: {show:false},
            data : ['单位总数','无','1~5','6~10','>10'],
            show:true,
            name:'种',
            nameTextStyle:{
                color:'#e3e3e3',
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
                }
            },
            splitNumber:5,
            interval:24,
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#e3e3e3',
                }
            },
            
            
        },
        yAxis: {
            type : 'value',
            name:'家',
            nameTextStyle:{
                color:'#e3e3e3',
                fontSize:a*0.009,
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#e3e3e3',
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
            splitLine:{
                lineStyle:{
                    color:'#e3e3e3',
                    opacity:0.3,
                }
            }
        },
        series: [
            {
                name: '辅助',
                type: 'bar',
                stack:  '总量',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [0, 103, 2, 0, 0]
            },
            {
                name: '文献情报资源种类',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter:'{c}家'
                    }
                },
                data:[104, 1, 101, 2, 0],
                itemStyle:{
                    color:'#FF7853',
                    opacity:0.85,
                },
                barMaxWidth:90,
                
            }
        ]
    };


    $.get('./data/environment-resource.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            xAxis: {
                data : data.category,
            },
            series: [
                {
                    name: '辅助',           
                    data: data.support
                },
                {
                    name: '文献情报资源种类',                    
                    data:data.value      
                }
            ]            
        });

    });

    
    mychart.setOption(option);
}
