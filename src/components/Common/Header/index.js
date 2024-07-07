import React from 'react'
import TemporaryDrawer from './drawer';
import Button from '../Button';
import './styles.css'

function Header() {
  return (
    <div className="navigbar">
      <h1 className="logo">
        TrackCoin<span style={{ color: "var(--blue)" }}>!</span>
      </h1>
      <div className="links">
        <a href="/">
          <p className="link">Главная</p>
        </a>
        <a href="/">
          <p className="link">Сопоставить</p>
        </a>
        <a href="/">
          <p className="link">Наблюдение</p>
        </a>
        <a href="/">
          <Button
            text={"Dashboard"}
            outLined={true}
            onClick={() => console.log("Button clicked")}
          />
        </a>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header
