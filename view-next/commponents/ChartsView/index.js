import React from 'react'
import BarCharts from './BarCharts'
import PictorialBarCharts from './PictorialBarCharts'
import GraphBarCharts from './GraphBarCharts'
import ContinuousBarCharts from './ContinuousBarCharts'
import style from './Charts.module.css'

function ChartsView(props) {
  let temp = ''
  let _data = props.card.cardContent
  switch (_data.chartsType) {
    case 'bar':
      temp = (
        <BarCharts id={props.id} />
      )
      break
    case 'pictorialBar':
      temp = (
        <PictorialBarCharts id={props.id} />
      )
      break
    case 'graphBar':
      temp = (
        <GraphBarCharts id={props.id} />
      )
      break
    case 'continuousBar':
      temp = (
        <ContinuousBarCharts id={props.id} />
      )
      break
  }
  return (
    <div className={style.chartsContainer}>
      {temp}
    </div>
  );
}

export default ChartsView;
