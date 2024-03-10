import React from 'react'
import "./Coffeeshop.css"
import Coffeeshop from './Coffeeshop'

export default function coffeehtml() {
  return (
   <> <div><h1 id='title'>Coffee Shop</h1></div>
    <hr></hr>
    <div id="products" class="main"><Coffeeshop /></div>
    </>
    )
}