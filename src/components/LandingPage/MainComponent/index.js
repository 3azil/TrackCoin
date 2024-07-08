import React from 'react'
import "./styles.css"
import Button from '../../Common/Button';

function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-comp">
        <h1 className="track-coin-heading">Отслеживай Крипто-Валюту</h1>
        <h1 className="real-time-heading">Прямо Сейчас.</h1>
        <p className="info-text">
          Отслеживайте криптовалюту через общедоступный API в режиме реального
          времени. Посетите панель управления, чтобы сделать это!
        </p>
        <div className="btn-flex">
          <Button text={"Dashboard"} />
          <Button text={"Поделиться"} outLined={true} />
        </div>
      </div>
      {/*<div className='phone-container'>
        <img src={}/>                          добавить фотку дэшбоарда мобильного,  либо анимированное лого с кем то...
        <img src={}/>
  </div>*/}
    </div>
  );
}

export default MainComponent
