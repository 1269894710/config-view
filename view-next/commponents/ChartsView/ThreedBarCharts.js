let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/custom')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
import React, {useEffect} from 'react'
import style from './Charts.module.css'

function PictorialBarCharts(props) {
  useEffect(() => {
    // 绘制左侧面
    const CubeLeft = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0
      },
      buildPath: function(ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint
        const c0 = [shape.x, shape.y]
        const c1 = [shape.x - 8, shape.y - 8]
        const c2 = [xAxisPoint[0] - 8, xAxisPoint[1] - 8]
        const c3 = [xAxisPoint[0], xAxisPoint[1]]
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
      }
    })
// 绘制右侧面
    const CubeRight = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0
      },
      buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c1 = [shape.x, shape.y]
        const c2 = [xAxisPoint[0], xAxisPoint[1]]
        const c3 = [xAxisPoint[0] + 13, xAxisPoint[1] - 4]
        const c4 = [shape.x + 13, shape.y - 4]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
      }
    })
// 绘制顶面
    const CubeTop = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0
      },
      buildPath: function(ctx, shape) {
        const c1 = [shape.x, shape.y]
        const c2 = [shape.x + 13, shape.y - 4]
        const c3 = [shape.x + 5, shape.y - 12]
        const c4 = [shape.x - 8, shape.y - 8]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
      }
    })
// 注册三个面图形
    echarts.graphic.registerShape('CubeLeft', CubeLeft)
    echarts.graphic.registerShape('CubeRight', CubeRight)
    echarts.graphic.registerShape('CubeTop', CubeTop)

    const VALUE = [21.9, 26.8, 24.2, 54.9, 74.5, 78.3, 119.0, 126.9, 190.8,123.2,156.2,169.3,179.5,155.5]
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
        type: 'category',
        data: ['立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑','立秋','处暑'],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true,
          color: '#bbb',
          fontSize: 12
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          fontSize: 12
        }
      },
      series: [{
        type: 'custom',
        renderItem: (params, api) => {
          const location = api.coord([api.value(0), api.value(1)])
          var color = api.value(1) > 2000 ? 'red' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255,255,255,.5)'
            },
            {
              offset: 0.2,
              color: 'rgba(67,102,243,.6)'
            },
            {
              offset: 1,
              color: 'rgba(29,67,243,.4)'
            }
          ])
          var topColor = api.value(1) > 2000 ? 'red' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(67,102,243,.6)'
            },
            {
              offset: 1,
              color: 'rgba(29,67,243,.6)'
            }
          ])
          return {
            type: 'group',
            children: [{
              type: 'CubeLeft',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0])
              },
              style: {
                fill: color
              }
            }, {
              type: 'CubeRight',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0])
              },
              style: {
                fill: color
              }
            }, {
              type: 'CubeTop',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0])
              },
              style: {
                fill: topColor
              }
            }]
          }
        },
        animationEasing: 'cubicInOut',
        animationDelay: function (idx) {
          return idx * 100;
        },
        data: VALUE
      }]
    })
  })
  return (
    <div className={style.chartsContent} id={props.id}></div>
  );
}

export default PictorialBarCharts;
