import React from 'react'
import ChartsView from '../ChartsView'
import style from './SwitchView.module.css'

function SwitchView(props) {
  let temp = ''
  let _data = props.card.cardContent
  switch (_data.type) {
    case 'charts':
      temp = (
        <ChartsView {...props}/>
      )
      break
  }
  return (
    <>
      {temp}
    </>
  );
}

export default SwitchView;
