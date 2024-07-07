import React from 'react'
import './styles.css'

function Button({text, onClick, outLined}) {
  return (
    <div
        className={outLined ? "outLined-btn" : "btn"}
        onClick={() => onClick()}
    >
      {text}
    </div>
  );
}

export default Button;
