import React from 'react'
import style from '../../index.module.css'

function Button({text, tectColor}) {
  return (
    <>
        <button style = {{color:tectColor}}>{text}</button>
        <div className={style.block}>123</div>
    </>
  )
}

export default Button