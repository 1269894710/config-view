import React, {useState} from 'react';
import './ConfigFlex.less'
import { flexData } from '../../data.js'

function ConfigFlex() {
  let [test, setTest] = useState(0)
  let temp = []
  for (let i = 0; i < flexData.row; i++) {
    let row = flexData.list[i]
    let colTemp = []
    for (let n = 0; n < row.col; n++) {
      colTemp.push(<div className="row-item" style={{"margin-right": row.span}}>

      </div>)
    }
    temp.push(<div className="flex-row" style={{"margin": flexData.span}}>{
      colTemp
    }</div>)
  }

  return (
    <div className="config-flex">
      { temp }
    </div>
  );
}

export default ConfigFlex;
