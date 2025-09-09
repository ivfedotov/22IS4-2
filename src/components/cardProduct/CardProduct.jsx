import React from 'react'

function CardProduct({image, price, text}) {
  return (
    <div>
        <img src = {image}/>
        <p>Цена:{price}</p>
        <span>Описание:{text}</span>
    </div>
  )
}

export default CardProduct