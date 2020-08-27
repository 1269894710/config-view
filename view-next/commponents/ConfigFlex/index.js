import React from 'react'
import style from './ConfigFlex.module.css'
import { flexData } from '../../pages/data.js'
import CardView from '../CardView'

function ConfigFlex() {
  let temp = []
  for (let i = 0; i < flexData.row; i++) {
    let row = flexData.list[i]
    let colTemp = []
    for (let n = 0; n < row.col; n++) {
      let item = row.items[n]
      if (flexData.direction === 'row') {
        colTemp.push(<div className={style.rowItem} key={n} style={{"margin-bottom": row.span, "flex": item.flex ? item.flex : 1}}>
          <CardView {...item}/>
        </div>)
      } else {
        colTemp.push(<div className={style.rowItem} key={n} style={{"margin-right": row.span, "flex": item.flex ? item.flex : 1}}>
          {/*{item.type}*/}
          <CardView {...item}/>
        </div>)
      }
    }
    if (flexData.direction === 'row') {
      temp.push(<div className={style.flexRow} key={i} style={{"flex": row.flex, "margin-right": flexData.span, "flex-direction": 'column'}}>{
        colTemp
      }</div>)
    } else {
      temp.push(<div className={style.flexRow} key={i} style={{"flex": row.flex, "margin-bottom": flexData.span}}>{
        colTemp
      }</div>)
    }
  }

  return (
    <div className={style.configFlex} style={{"padding": flexData.span, "flex-direction": flexData.direction}}>
      { temp }
    </div>
  );
}

export default ConfigFlex;
