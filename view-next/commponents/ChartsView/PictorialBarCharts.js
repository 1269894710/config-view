let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pictorialBar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
import React, {useEffect} from 'react'
import style from './Charts.module.css'

function PictorialBarCharts(props) {
  useEffect(() => {
    let myChart = echarts.init(document.getElementById(props.id))
    myChart.setOption({
      grid: {
        top: '8%',
        left: '6%',
        right: '4%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: {
        data: [
          'symbol',
          'link',
          'image',
          'SVG',
          'pattern'
        ],
        axisLabel: {
          color: '#bbb'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#bbb'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#fff',
            type: 'dotted'
          }
        }
      },
      yAxis: {
        axisLabel: {
          color: '#bbb'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#bbb'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(238, 238, 238, .4)',
            type: 'dotted'
          }
        }
      },
      series: [{
        type: 'pictorialBar',
        name: 'pictorial element',
        symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
        symbolSize: ['100%', '70%'],
        symbolPosition: 'center',
        z: 10,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0,228,240,1)'
            }, {
              offset: 1,
              color: 'rgba(0,228,240,0.1)'
            }])
          }
        },
        data: [20,  160, 80, 40, 120]
      }]
    })
  })
  return (
    <div className={style.chartsContent} id={props.id}></div>
  );
}

export default PictorialBarCharts;
