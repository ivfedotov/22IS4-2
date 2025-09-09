import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.css'
import Button from './components/Button/Button'
import CardProduct from './components/cardProduct/CardProduct'

const api = [{
  id:1, 
  image:'url',
  price: '1900',
  text: 'колбаса'
},
{
  id:2, 
  image:'url',
  price: '2900',
  text: 'печенье'
},
{
  id:3, 
  image:'url',
  price: '3900',
  text: 'хлеб'
},
{
  id:4, 
  image:'url',
  price: '4900',
  text: 'молоко'
},
{
  id:5, 
  image:'url',
  price: '5900',
  text: 'сыр'
}]

function App() {
  
  const render = api.map((item) => (
    <div className = {style.block} key = {item.id}>
      <p className= {style.block}>123</p>
      <CardProduct image = {item.image} price = {item.price} text = {item.text}/>
    </div>
  ))

  return (
    <>
        {render}
        <Button/>
    </>
  )
}

export default App
