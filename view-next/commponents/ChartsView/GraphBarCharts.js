let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
import React, {useEffect} from 'react'
import style from './Charts.module.css'

function GraphBarCharts(props) {
  useEffect(() => {
    const hexToRgba = (hex, opacity) => {
      let rgbaColor = "";
      let reg = /^#[\da-f]{6}$/i;
      if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
          "0x" + hex.slice(3, 5)
        )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
      }
      return rgbaColor;
    };

// 数据整理
    let xData = ['类别1', '类别2', '类别3', '类别4', '类别5', '类别6', '类别7', '类别8'];
    let yData = [4757, 3254, 2454, 2011, 1654, 1211, 1211, 254];
    let max = Math.max(...yData);
    let labelColor = ['#FD5360', '#FF962B', '#FFAA00']
    let emptyData = yData.map((v, i) => {
      let color = i > 2 ? '#1890FF' : labelColor[i];
      let item = {
        value: max,
        label: {
          formatter: '{a|' + v + '}',
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
    let xDataFormat = xData
    xData.reverse();
    xDataFormat.reverse();
    yData.reverse();
    emptyData.reverse();
    let myChart = echarts.init(document.getElementById(props.id))
    myChart.setOption({
      grid: {
        top: '8%',
        left: '0',
        right: '24%',
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
          color: '#bbb'
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
        data: xDataFormat
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
            color: 'rgba(225,225,225,0.4)'
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
                color: '#3D9FFF'
              }, {
                offset: 1,
                color: '#41D7F3'
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
