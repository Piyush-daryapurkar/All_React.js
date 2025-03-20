import React from 'react'

const Product = ({titel,price ='NA',features=[],features1={}}) => {  //we set the defualt price as NA 

    const list = features.map((feature)=> <li>{feature}</li>)
  return (
    <>
      <h1>product name : {titel} </h1>
      <h2>price : {price} </h2>
      <h3>{list}</h3>
      <h1>      {features1.a}
      </h1>
    </>
  )
}

export default Product
