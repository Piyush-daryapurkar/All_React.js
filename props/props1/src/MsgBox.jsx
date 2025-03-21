import React from 'react'

const MsgBox = ({userName ,textColor}) => {
    const color = {color : textColor}
  return (
    <>
     <h1 style={color}>hello {userName}</h1> 
    </>
  )
}

export default MsgBox
