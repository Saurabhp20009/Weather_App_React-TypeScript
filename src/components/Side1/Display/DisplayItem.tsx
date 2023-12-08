import React from 'react'
import "../Display/DisplayItem.css"

type propsType={
  heading: string;
  value: any;
  
}

const DisplayData = ({heading,value}: propsType) => {
  return (
    <div className='DateTemp-container'>
        
        <h5> {heading}</h5>
        <h4>{value}</h4>
        
    </div>
  )
}

export default DisplayData