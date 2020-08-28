let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/map')
require('echarts/lib/chart/effectScatter')
require('echarts/lib/component/geo')
require('echarts/lib/component/visualMap')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
import React, {useEffect} from 'react'
import axios from 'axios'
import style from './Charts.module.css'

function PictorialBarCharts(props) {
  useEffect(() => {
    var myChart = echarts.init(document.getElementById(props.id))
    let index = -1;
    var timer = setInterval(function() {
      // 隐藏提示框
      myChart.dispatchAction({
        type: 'hideTip',
        seriesIndex: 0,
        dataIndex: index
      });
      // 显示提示框
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index + 1
      });
      // 取消高亮指定的数据图形
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: index
      });
      // 高亮指定的数据图形
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: index + 1
      });
      index++;
      if (index > 13) {
        index = -1;
      }
    }, 2000);


    myChart.on('mousemove', function(e) {
      clearInterval(timer);
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
      });
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: e.dataIndex
      });
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: e.dataIndex
      });
    }); //---------------------------------------------鼠标移入静止播放
    myChart.on('mouseout', function(e) {
      clearInterval(timer);
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: e.dataIndex
      }); //鼠标移出后先把上次的高亮取消
      timer = setInterval(function() {
        // 隐藏提示框
        myChart.dispatchAction({
          type: 'hideTip',
          seriesIndex: 0,
          dataIndex: index
        });
        // 显示提示框
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: index + 1
        });
        // 取消高亮指定的数据图形
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: index
        });
        // 高亮指定的数据图形
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: index + 1
        });
        index++;
        if (index > 13) {
          index = -1;
        }
      }, 2000);
    });
    axios.get('https://gallerybox.echartsjs.com/asset/get/s/data-1591343795436-TgLtkd9hN.json').then((res) => {
      let geoJson = res.data
      echarts.registerMap('hanzhou', geoJson);
      var mapDate = [
        {
          name: '江干区',
          value: [120.185, 30.274,29999]
        },
        {
          name: '拱墅区',
          value: [120.182, 30.351,29999]
        },
        {
          name: '西湖区',
          value: [120.091, 30.27,29999]
        },
        {
          name: '滨江区',
          value: [120.21, 30.209,29999]
        },
        {
          name: '萧山区',
          value: [120.254, 30.159,29999]
        },
        {
          name: '余杭区',
          value: [120.295, 30.427,29999]
        },
        {
          name: '富阳区',
          value: [119.956, 30.05,29999]
        },
        {
          name: '桐庐县',
          value: [119.675, 29.784,29999]
        },
        {
          name: '淳安县',
          value: [119.058, 29.613,29999]
        },
        {
          name: '建德市',
          value: [119.28, 29.464,29999]
        },
        {
          name: '临安区',
          value: [119.712, 30.227,29999]
        },
        {
          name: '钱塘新区',
          value: [120.485, 30.284,29999]
        }
      ];


      let option = {
        grid: {
          top: '8%',
          left: '6%',
          right: '4%',
          bottom: '8%',
          containLabel: true
        },
        visualMap: {
          min: 0,
          max: 1000000,
          right: 10,
          seriesIndex: 1,
          type: 'piecewise',
          bottom: 10,
          textStyle: {
            color: '#FFFF'
          },
          splitList: [
            {
              gt: 50000,
              color: '#F5222D',
              label: '困难人数大于5万人'
            }, //大于5万人
            {
              gte: 30000,
              lte: 50000,
              color: '#FA541C ',
              label: '困难人数3-5万人'
            }, //3-5万人
            {
              gte: 10000,
              lte: 30000,
              color: '#FA8C16',
              label: '困难人数1-3万人'
            }, //1-3万人
            {
              lte: 10000,
              color: '#fbe1d6',
              label: '困难人数小于1万人'
            }
          ]
        },

        geo: {
          map: 'hanzhou',
          aspectScale: 0.75, //长宽比
          zoom: 1.1,
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#013C62',
              shadowColor: '#182f68',
              shadowOffsetX: 0,
              shadowOffsetY: 25
            },
            emphasis: {
              areaColor: '#2AB8FF',
              borderWidth: 0,
              color: 'green',
              label: {
                show: false
              }
            }
          }
        },
        series: [ {
          type: 'map',
          roam: true,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {
              textStyle: {
                color: '#fff'
              }
            }
          },

          itemStyle: {
            normal: {
              borderColor: '#2ab8ff',
              borderWidth: 1.5,
              areaColor: '#12235c'
            },
            emphasis: {
              areaColor: '#2AB8FF',
              borderWidth: 0,
              color: 'green'
            }
          },
          zoom: 1.1,
          roam: false,
          map: 'hanzhou' //使用
          // data: this.difficultData //热力图数据   不同区域 不同的底色
        },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            rippleEffect: {
              period: 15,
              scale: 4,
              brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: '#ffff',
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            data: mapDate
          }

        ]
      };
      myChart.setOption(option);
    })
  })
  return (
    <div className={style.chartsContent} id={props.id}></div>
  );
}

export default PictorialBarCharts;
