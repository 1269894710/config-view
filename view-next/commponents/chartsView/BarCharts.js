let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
import react, {useEffect} from 'react'
// import echarts from 'echarts'
import style from './Charts.module.css'

function BarCharts(props) {
  useEffect(() => {
    let myChart = echarts.init(document.getElementById(props.id))
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
  })
  return (
    <div className={style.chartsContent} id={props.id}></div>
  );
}

export default BarCharts;
