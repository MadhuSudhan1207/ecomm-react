import React from 'react'

export default function Coffeeshop() {
   let arr= [{
    name:"Coffee",
    description: "Start your day with a coffee",
    price:100,
    image: "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg",
},
{
    name:"Green Tea",
    description: "Green Tea",
    price:45,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGLpId4D1Cvv7CufERmWUezi2sGMMvN3ZFw&usqp=CAU"
},
{
    name:"Cold Coffee",
    description: "Cold Coffee",
    price:70,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5HnJX97iFyQ0V7kOWRTJXlhg8vbQ_UUb7g&usqp=CAU"
},
{
    name:"Cappuccino",
    description: "",
    price:30,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yD78uEWbBkJ9HJqzxyCCuBy3Lj4nFf1-Dw&usqp=CAU"
},
{
    name:"BlackCoffee",
    description: "",
    price:45,
    image:"https://www.kahlua.com/wp-content/uploads/2023/10/kahlua_coffee_16x9.jpg",
},
{
    name:"Badham Milk",
    description: "Lyros Employees most favourite drink",
    price:120,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECCVnb_UTmeaHpprnBtCHmMbrqBhIm6LD2A&usqp=CAU",
},

]
  return (
    <div>
        {arr.map((value,index)=>(
            <div class="container">
                <div><img src={value.image} width={175} height={150} alt='fruitimg'></img></div>
                <div id="fname">{value.name}</div>
                <div>{value.description}</div>
                <div>{value.price}</div>
                <div><button id="btn" onclick="addCart(${index})">ADD</button></div>
            </div> 

            ))
        }
    </div>
  )
}