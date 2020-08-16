import React, {useState} from 'react';
import './ConfigFlex.less'
import { flexData } from '../../data.js'

function ConfigFlex() {
  let temp = []
  for (let i = 0; i < flexData.row; i++) {
    let row = flexData.list[i]
    let colTemp = []
    for (let n = 0; n < row.col; n++) {
      let item = row.items[n]
      colTemp.push(<div className="row-item" style={{"margin-right": row.span, "flex": item.flex ? item.flex : 1}}>
        {item.type}
      </div>)
    }
    temp.push(<div className="flex-row" style={{"margin-bottom": flexData.span}}>{
      colTemp
    }</div>)
  }

  return (
    <div className="config-flex" id="config-flex" style={{"padding": flexData.span}}>
      { temp }
    </div>
  );
}

export default ConfigFlex;
