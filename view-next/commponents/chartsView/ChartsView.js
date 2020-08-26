import BarCharts from './BarCharts'
import style from './Charts.module.css'

function ChartsView(props) {
  let cardItem = ''
  switch (props.type) {
    case '1':
      cardItem = (
        <div>

        </div>
      )
  }
  return (
    <div className={style.chartsContainer}>
      <BarCharts {...props}/>
    </div>
  );
}

export default ChartsView;
