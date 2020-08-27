let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
import react, {useEffect} from 'react'
import style from './Charts.module.css'

function BarCharts(props) {
  useEffect(() => {
    let myChart = echarts.init(document.getElementById(props.id))
    myChart.setOption({
      color: ['#4d96f3'],
      grid: {
        top: '8%',
        left: '6%',
        right: '4%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: {
        data: ['衬衫', '羊毛', '雪纺', '裤子', '高跟', '袜子'],
        axisLabel: {
          color: '#bbb',
          fontSize: 12
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
        name: '销量',
        type: 'bar',
        barWidth: 20,
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
  })
  return (
    <div className={style.chartsContent} id={props.id}></div>
  );
}

export default BarCharts;
