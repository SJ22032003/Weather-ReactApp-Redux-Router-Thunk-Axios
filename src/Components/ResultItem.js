import React from 'react'
import {FaWind , FaWater , FaMapPin} from 'react-icons/fa'
function ResultItem({ temp , wind , humidity , city  }) {
  return (
    <>
        <div className='heading-temp'>
            <div className='flex text-lg flex justify-center'><FaMapPin className='m-1'/>{city}</div>
            <h1>{(temp - 273.15).toFixed(1)} C</h1>
        </div>
        <div className='temp-info'>
            <div className='flex'><FaWind className='m-3'/>{wind}</div>
            <div className='flex'><FaWater className='m-3'/>{humidity}</div>
        </div>
    </>
  )
}

export default ResultItem