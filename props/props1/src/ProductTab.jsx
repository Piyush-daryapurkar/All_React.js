import React from 'react'
import Product from './Product'

const ProductTab = () => {
    
    let option=["boro-plus","borolin","fair n lovly"]
    let option1={a: "complain",b: "bornvita",c: "vicks"}
    let options2={aa:"boro",bb:"liki",cc:"siki"}


  return (
    <>
      { 
      <Product titel="pen" features={option}/>}
      <Product titel="car" price={6000} features1={option1} features2={options2} />
      {/* <Product titel="bike" price={2000}/> 
      <Product titel="laptop" price={1000}/> */}

    </>
  )
}

export default ProductTab
