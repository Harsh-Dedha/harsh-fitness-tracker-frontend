import React, { useState } from 'react'
import './appinterface.css'
import WorkoutTracker from './workoutTracker'
import WorkOutsheadule from './workOutsheadule'

const Appinterface = () => {
  const [appInterfaceNo, setAppInterFaceNo] = useState(true)
  return (
    <>
      <div className='interfaceOuterContainer'>
        <div className='interfaceContent'>
          {appInterfaceNo === true && <WorkoutTracker />}
          {appInterfaceNo === false && <WorkOutsheadule />}
        </div>
        <div
          className='navBar'
          onClick={() => setAppInterFaceNo(!appInterfaceNo)}
        >
          <div className='navSearch'>
            <img
              src='https://img.icons8.com/fluency-systems-regular/48/ffffff/search--v2.png'
              alt=''
            />
          </div>
          <div className='navinnerContainer'>
            <img
              width='36'
              height='36'
              src='https://img.icons8.com/ios/50/7F7F7F/home--v3.png'
              alt='home--v2'
            />
            <img
              width='36'
              height='36'
              src='https://img.icons8.com/material-rounded/48/829DFF/bar-chart.png'
              alt='combo-chart'
            />
          </div>
          <div className='navinnerContainer'>
            <img
              width='36'
              height='36'
              src='https://img.icons8.com/ios/50/7F7F7F/camera--v4.png'
              alt='camera--v4'
            />
            <img
              width='36'
              height='36'
              src='https://img.icons8.com/ios/50/7F7F7F/gender-neutral-user--v4.png'
              alt='gender-neutral-user--v4'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Appinterface
