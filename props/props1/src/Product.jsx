import React from 'react'

const Product = ({titel,price ='NA',features=[],features1={}}) => {  //we set the defualt price as NA 

    const list = features.map((i)=> <li>{i}</li>)
    const isDis=price>3000;
    const styles = {  backgroundColor: isDis ? "pink" : null}

  return (
    <>
    <div className="boss" style={styles}>
    <h1>product name : {titel} </h1>
      <h2>price : {price} </h2>
      <h1>{features1.b}</h1>
      <h1>{list}</h1>
      <h1>{isDis ? <p>diccount 4% </p> : null }</h1>
    </div>

    </>
  )
}

export default Product
