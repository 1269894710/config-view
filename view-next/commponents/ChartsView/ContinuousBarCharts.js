let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
import React, {useEffect} from 'react'
import style from './Charts.module.css'

function BarCharts(props) {
  useEffect(() => {
    var spNum = 5,_max=100;
    var legendData = ['常住人口', '户籍人口', '农村人口','城镇居民','外籍居民'];
    var y_data = ['成都市'];
    var _datamax = [100],
      _data1 = [20],
      _data2 = [20],
      _data3 = [20],
      _data4 = [20],
      _data5= [20];
    var _label = {
      normal: {
        show: true,
        position: ['0', '-180%'],
        formatter: (v) => {
          return v.seriesName + '\n' + v.data
        },
        textStyle: {
          color: '#fff',
          align: 'left',
          fontSize: 10
        }
      }
    };
    let myChart = echarts.init(document.getElementById(props.id))
    myChart.setOption({
      color: ['#4d96f3', '#448652', '#9f8737', '#702d9d', '#944154'],
      grid: {
        top: '18%',
        left: '4%',
        right: '4%',
        bottom: '0',
        containLabel: true
      },
      tooltip: {
        show: true,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        textStyle: {
          color: '#3c3c3c',
          fontSize: 12
        },
        formatter: function(p) {
          console.log(p);
          var _arr = p.seriesName.split('/'),
            idx = p.seriesIndex;//1，2，3
          return '名称：' + p.seriesName + '<br>' + '完成：' + p.value + '<br>' + '占比：' + (p.value / _max * 100).toFixed(0) + '%';
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)'
      },
      xAxis: {
        splitNumber: spNum,
        interval: _max / spNum,
        max: _max,
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        }

      },
      yAxis: [{
        data: y_data,
        axisLabel: {
          show: false

        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        }
      }],
      series: [{
        type: 'bar',
        name: '常住人口',
        stack: '2',
        label: _label,
        legendHoverLink: false,
        barWidth: 14,
        itemStyle: {
          normal: {
            barBorderRadius: [6, 0, 0, 0]
          }
        },
        data: _data1
      }, {
        type: 'bar',
        name: '户籍人口',
        stack: '2',
        legendHoverLink: false,
        barWidth: 14,
        label: _label,
        data: _data2
      }, {
        type: 'bar',
        stack: '2',
        name: '农村人口',
        legendHoverLink: false,
        barWidth: 14,
        label: _label,
        data: _data3
      }, {
        type: 'bar',
        stack: '2',
        name: '城镇居民',
        legendHoverLink: false,
        barWidth: 14,
        label: _label,
        data: _data4
      }, {
        type: 'bar',
        stack: '2',
        name: '外籍居民',
        legendHoverLink: false,
        barWidth: 14,
        label: _label,
        itemStyle: {
          normal: {
            barBorderRadius: [0, 10, 10, 0]
          }
        },
        data: _data5
      }]
    })
  })
  return (
    <div className={style.chartsContent} id={props.id}></div>
  );
}

export default BarCharts;
