import React from 'react'
import SwitchView from '../SwitchView'
import style from './CardView.module.css'

function CardView(props) {
  let card = props.card
  let cardItem = ''
  switch (card.cardType) {
    case 'bgCard':
      cardItem = (
        <div className={style.cardItem}>
          <img className={style.bgImg} src={card.img} alt="卡片背景图"/>
          <div className={style.cardHeader}>
            <span className={style.cardTitle}>{card.cardHeader.title}</span>
          </div>
          <div className={style.cardContent}>
            <SwitchView {...props}/>
          </div>
        </div>
      )
      break
    case 'borderCard':
      cardItem = (
        <div className={style.cardItem} style={{"border-width": card.boderWidth ? card.boderWidth : '1px', "border-style": card.boderStyle ? card.boderStyle : 'solid', "border-color": card.boderColor ? card.boderColor : '#2e63a2'}}>
          <div className={style.cardHeader}>
            <span className={style.cardTitle}>{card.cardHeader.title}</span>
          </div>
          <div className={style.cardContent}>
            <SwitchView {...props}/>
          </div>
        </div>
      )
      break
    default:
      let header = ''
      if (card.cardHeader) {
        header = (<div className={style.cardHeader}>
          <span className={style.cardTitle}>{card.cardHeader.title}</span>
        </div>)
      }
      cardItem = (
        <div className={style.cardItem}>
          {header}
          <div className={style.cardContent}>
            <SwitchView {...props}/>
          </div>
        </div>
      )
  }
  return (
    <>
      {cardItem}
    </>
  );
}

export default CardView;
