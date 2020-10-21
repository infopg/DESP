
//评估指标体系旭日图
function sun(chart1, a){

//定义数据
var data = [{
    name: "信息化\n基础环境",
    value:30,
    itemStyle: {
        color: '#FFAE57'//设定形状填充颜色
    },
    children: [{
        name: '信息化管\n理与运行',
        value:9,
        itemStyle: {
            color: '#FFAE57'
        },
        children: [{
            name: ' ',
            children: [{
                name: 'None'
            }]
        
        }]
    }, {
        name: '信息化\n基础设施',
        value:12,
        itemStyle: {
            color: '#FFAE57'
        },
        children: [{
            name: '40%',
            itemStyle:{
              shadowColor: '#FFAE57',  
            },
            label:{
                color:'#FFAE57',
                fontSize: a*0.011,    
            },
            children: [{
                name: '网络环境',
                value:4.8,
                itemStyle: {
                    color: '#FFAE57'
                },
                label:{
                    color:'#FFAE57', //设置字体颜色
                    
                },
            }]
        }, {
            name: '40%',
            itemStyle:{
              shadowColor: '#FFAE57',  
            },
            label:{
                color:'#FFAE57',
                fontSize: a*0.011,     
            },
            children: [{
                name: '计算环境',
                value:4.8,
                itemStyle: {
                    color: '#FFAE57'
                },
                label:{
                    color:'#FFAE57',
                    
                },
            }]
        }, {
            name: '20%',
            itemStyle:{
              shadowColor: '#FFAE57',  
            },
            label:{
                color:'#FFAE57',
                fontSize: a*0.008,     
            },
            children: [{
                name: '存储环境',
                value:2.4,
                itemStyle: {
                    color: '#FFAE57'
                },
                label:{
                    color:'#FFAE57',
                    
                },
            }]
        }]
    },{
        name: '信息化资源',
        value:9,
        itemStyle: {
            color: '#FFAE57'
        },
        children: [{
            name: '40%',
            itemStyle:{
              shadowColor: '#FFAE57',  
            },
            label:{
                color:'#FFAE57',
                fontSize: a*0.01,     //设置字体大小
            },
            children: [{
                name: '科学数据资源',
                value:3.6,
                itemStyle: {
                    color: '#FFAE57'
                },
                label:{
                    color:'#FFAE57',
                    
                },
            }]
        }, {
            name: '20%',
            itemStyle:{
              shadowColor: '#FFAE57',  
            },
            label:{
                color:'#FFAE57',
                fontSize: a*0.006,     
            },
            children: [{
                name: '数字教育资源',
                value:1.8,
                itemStyle: {
                    color: '#FFAE57'
                },
                label:{
                    color:'#FFAE57',
                    
                },
            }]
        },{
            name: '20%',
            itemStyle:{
              shadowColor: '#FFAE57',  
            },
            label:{
                color:'#FFAE57',
                fontSize: a*0.006,     
            },
            children: [{
                name: '科学传播资源',
                value:1.8,
                itemStyle: {
                    color: '#FFAE57'
                },
                label:{
                    color:'#FFAE57',
                    
                },
            }]
        }, {
            name: '20%',
            itemStyle:{
              shadowColor: '#FFAE57',  
            },
            label:{
                color:'#FFAE57',
                fontSize: a*0.006,     
            },
            children: [{
                name: '数字文献资源',
                value:1.8,
                itemStyle: {
                    color: '#FFAE57'
                },
                label:{
                    color:'#FFAE57',
                    
                },
            }]
        }]
    }]
}, {
    name: '信息化\n应用',
    value:50,
    itemStyle: {
        color: '#FF7853'
    },
    
    children: [{
        name: '科研信息\n化应用',
        value:20,
        itemStyle: {
            color: '#FF7853'
        },
        children: [{
            name: '30%',
            itemStyle:{
              shadowColor: '#FF7853',  
            },
            label:{
                color:'#FF7853',
                fontSize: a*0.011,     
            },
            children: [{
                name: '科学数据应用',
                value:6,
                itemStyle: {
                    color: '#FF7853'
                },
                label:{
                    color:'#FF7853',
                    
                },
            }]
        }, {
            name: '30%',
            label:{
                color:'#FF7853',
                fontSize: a*0.011,     
            },
            itemStyle:{
              shadowColor: '#FF7853',  
            },
            children: [{
                name: '科学计算应用',
                value:6,
                itemStyle: {
                    color: '#FF7853'
                },
                label:{
                    color:'#FF7853',
                    
                },
            }]
        },{
            name: '20%',
            label:{
                color:'#FF7853',
                fontSize: a*0.011,     
            },
            itemStyle:{
              shadowColor: '#FF7853',  
            },
            children: [{
                name: '云计算应用',
                value:4,
                itemStyle: {
                    color: '#FF7853'
                },
                label:{
                    color:'#FF7853',
                    
                },
            }]
        }, {
            name: '20%',
            label:{
                color:'#FF7853',
                fontSize: a*0.01,     
            },
            itemStyle:{
              shadowColor: '#FF7853',  
            },
            children: [{
                name: '开放共享应用',
                value:4,
                itemStyle: {
                    color: '#FF7853'
                },
                label:{
                    color:'#FF7853',
                    
                },
            }]
        }]
    }, {
        name: '管理信息\n化应用',
        value:15,
        itemStyle: {
            color: '#FF7853'
        },
        children: [{
            name: '60%',
            label:{
                color:'#FF7853',
                fontSize: a*0.011,     
            },
            itemStyle:{
              shadowColor: '#FF7853',  
            },
            children: [{
                name: 'ARP应用',
                label:{
                    color:'#FF7853',
                    
                },
                value:9,
                itemStyle: {
                    color: '#FF7853'
                },
            }]
        }, {
            name: '40%',
            label:{
                color:'#FF7853',
                fontSize: a*0.01,     
            },
            itemStyle:{
              shadowColor: '#FF7853',  
            },
            children: [{
                name: '非ARP应用',
                label:{
                    color:'#FF7853',
                    
                },
                value:6,
                itemStyle: {
                    color: '#FF7853'
                },
            }]
        }]
    },{
        name: '教育信息\n化应用',
        value:7.5,
        itemStyle: {
            color: '#FF7853'
        },
        children: [{
            name: '70%',
            label:{
                color:'#FF7853',
                fontSize: a*0.01,     
            },
            itemStyle:{
              shadowColor: '#FF7853',  
            },
            children: [{
                name: '学历教育',
                value:5.25,
                itemStyle: {
                    color: '#FF7853'
                },
                label:{
                    color:'#FF7853',
                    
                },
            }]
        }, {
            name: '30%',
            label:{
                color:'#FF7853',
                fontSize: a*0.008,     
            },
            itemStyle:{
              shadowColor: '#FF7853',  
            },
            children: [{
                name: '继续教育',
                value:2.25,
                itemStyle: {
                    color: '#FF7853'
                },
                label:{
                    color:'#FF7853',
                    
                },
            }]
        }]
    },{
        name: '科学传\n播应用',
        value:7.5,
        itemStyle: {
            color: '#FF7853'
        },
        children: [{
            name: '60%',
            label:{
                color:'#FF7853',
                fontSize: a*0.008,     
            },
            itemStyle:{
              shadowColor: '#FF7853',  
            },
            children: [{
                name: '网络传播',
                value:4.5,
                itemStyle: {
                    color: '#FF7853'
                },
                label:{
                    color:'#FF7853',
                    
                },
            }]
        }, {
            name: '40%',
            label:{
                color:'#FF7853',
                fontSize:a*0.008,     
            },
            itemStyle:{
              shadowColor: '#FF7853',  
            },
            children: [{
                name: '网络科普',
                value:3,
                itemStyle: {
                    color: '#FF7853'
                },
                label:{
                    color:'#FF7853',
                    
                },
            }]
        }]
    }]
},{
    name: '网络安全',
    value:20,
    itemStyle: {
        color: '#EA5151'
    },
    children: [{
        name: '网络安全\n管理',
        value:10,
        itemStyle: {
            color: '#EA5151'
        },
        children: [{
            name: '20%',
            itemStyle:{
              shadowColor: '#EA5151',  
            },
            label:{
                color:'#EA5151',
                fontSize: a*0.007,     
            },
            children: [{
                name: '安全责任',
                value:2,
                itemStyle: {
                    color: '#EA5151'
                },
                label:{
                    color:'#EA5151',
                },
            }]
        }, {
            name: '30%',
            itemStyle:{
              shadowColor: '#EA5151',  
            },
            label:{
                color:'#EA5151',
                fontSize: a*0.008,     
            },
            children: [{
                name: '安全规范与制度',
                value:3,
                itemStyle: {
                    color: '#EA5151'
                },
                label:{
                    color:'#EA5151',
                },
            }]
        },{
            name: '20%',
            itemStyle:{
              shadowColor: '#EA5151',  
            },
            label:{
                color:'#EA5151',
                fontSize: a*0.007,     
            },
            children: [{
                name: '安全自查',
                value:2,
                itemStyle: {
                    color: '#EA5151'
                },
                label:{
                    color:'#EA5151',
                },
            }]
        }, {
            name: '30%',
            itemStyle:{
              shadowColor: '#EA5151',  
            },
            label:{
                color:'#EA5151',
                fontSize: a*0.008,     
                 
            },
            children: [{
                name: '安全培训与教育',
                value:3,
                itemStyle: {
                    color: '#EA5151'
                },
                label:{
                    color:'#EA5151',
                },
            }]
        }]
    }, {
        name: '网络安全\n技术保障',
        value:10,
        itemStyle: {
            color: '#EA5151'
        },
        children: [{
            name: '70%',
            itemStyle:{
              shadowColor: '#EA5151',  
            },
            label:{
                color:'#EA5151',
                    
                   
            },
            children: [{
                name: '信息系统安全',
                value:7,
                itemStyle: {
                    color: '#EA5151'
                },
                label:{
                    color:'#EA5151',
                },
            }]
        }, {
            name: '30%',
            itemStyle:{
              shadowColor: '#EA5151',  
            },
            label:{
                color:'#EA5151',
                fontSize: a*0.008,     
            },
            children: [{
                name: '主机安全',
                value:3,
                itemStyle: {
                    color: '#EA5151'
                },
                label:{
                    color:'#EA5151',
                },
            }]
        }]
    }]
}];

//定义图形样式
option = {
    backgroundColor: '#333333', //背景色
    
    //系列列表
    series: [{
        type: 'sunburst', //图表类型为旭日图
        radius:[0,'90%'], //内半径和外半径
        center: ['50%', '50%'],//中心点
        data: data, //读取列表data中的数据
        roam:true,
        nodeClick:false,
        //文本签的样式
        label: {
            rotate: 'radial', //旋转角为”径向旋转“
            //fontWeight: 545, //文字字体粗细
            fontSize:a*0.009,
            lineHeight:15,
        },
        //旭日图扇形块的样式
        itemStyle: {
            borderColor: '#333333',//边框颜色
            borderWidth: 2,//边框粗细
        },
        //多层配置
        levels: [{/*留给数据下钻的空白配置*/}, 
        {   // 最靠内测的第一层
            r0: '0%', //内半径
            r: '25%', //外半径
            //文本签样式
            label: {
                rotate: 'radial',
                color:'#333333' //字体颜色
            }
        }, {//第二层
            r0: '25%',
            r: '50.5%',
            label: {
                rotate: 'radial',
                color:'#333333'
            }
        }, {//第三层
            r0: '55%',
            r: '65%',
            itemStyle: {
                shadowBlur: 2, //图形阴影的模糊大小
                
                color: 'transparent', //设置颜色为透明
            },
            label: {
                rotate: 'tangential', //文字”切向旋转“
                //fontSize: 10, //字号
            }
        }, {//第四层
            r0: '66.5%',
            r: '70%',
            itemStyle: {
                shadowBlur: 60,//图形阴影的模糊大小
                shadowColor: '#FFAE57'//阴影颜色
            },
            label: {
                position: 'outside', //标签的位置
                textShadowBlur: 5, //文字本身的阴影长度
                textShadowColor: '#333', //文字本身的阴影颜色
            },
            //鼠标悬停后不相关扇形块的配置项
            downplay: {
                label: {
                    opacity: 0.5 //透明度（值越大透明度越小）
                }
            }
        }]
    }]
};
        //使用制定的配置项和数据显示图表
        chart1.setOption(option);
        //自适应
        window.onresize = function () {
                
            chart1.resize();
            
        }

}
