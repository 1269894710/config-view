let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
import React, {useEffect} from 'react'
import style from './Charts.module.css'

function GraphBarCharts(props) {
  useEffect(() => {

// 数据整理
    let xData = ['类别1', '类别2', '类别3', '类别4', '类别5'];
    let yData = [
      {value: 47, data: 1234},
      {value: 32, data: 934},
      {value: 24, data: 734},
      {value: 20, data: 434},
      {value: 16, data: 234}
    ];
    let max = 100;
    let labelColor = ['#FD5360', '#FF962B', '#FFAA00']
    let emptyData = yData.map((v, i) => {
      let color = i > 2 ? '#1890FF' : labelColor[i];
      let item = {
        value: max,
        label: {
          formatter: '{a|' + v.data + '人  '+ v.value +'%}',
          position: 'right',
          distance: 10,
          rich: {
            a: {
              color: color,
              height: 18,
              align: 'center',
              verticalAlign: 'middle'
            }
          }

        }
      }
      return item
    })
    yData.reverse();
    emptyData.reverse();
    let myChart = echarts.init(document.getElementById(props.id))
    myChart.setOption({
      grid: {
        top: '8%',
        left: '4%',
        right: '28%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: [{
        type: "value",
        splitLine: {
          show: false
        },
        max: function(value) {
          return value.max
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      }],
      yAxis: [{
        type: "category",
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#bbb'
        },
        data: xData
      }, {
        type: "category",
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false
        },
        data: xData
      }],
      series: [{
        type: 'bar',
        barWidth: 10,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            barBorderRadius: [0, 6, 6, 0],
            color: '#303d4e'
          }
        },
        label: {
          show: true,
          position: 'right'
        },
        data: emptyData
      },
        {
          type: 'bar',
          barWidth: 10,
          zlevel: 1,
          itemStyle: {
            normal: {
              barBorderRadius: [0, 6, 6, 0],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                offset: 0,
                color: '#2964b2'
              }, {
                offset: 1,
                color: '#4d96f3'
              }], false)
            }
          },
          data: yData
        }
      ]
    })
  })
  return (
    <div className={style.chartsContent} id={props.id}></div>
  );
}

export default GraphBarCharts;
