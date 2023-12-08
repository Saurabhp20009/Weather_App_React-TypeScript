import React from 'react'
import "../components/Weather.css"
import Side1 from './Side1/Side1'
import Side2 from './Side2/Side2'


const Weather = () => {
    

  return (
    <div className='weather-container'>
        <div className='sides-flex'>
            <Side1/>
            <Side2/>
        </div>
    </div>
  )
}

export default Weather