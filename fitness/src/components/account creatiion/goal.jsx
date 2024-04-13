import React from 'react'
import './Goal.css'
const Goal = ({ setcurrNO }) => {
  return (
    <>
      <div className='outerGoalComponent'>
        <div className='heading'>What are your goals?</div>
        <div className='select1'>
          <div className='itembox'>
            <p>Weight Loss</p>
            <input type='checkbox' />
          </div>
          <div className='itembox'>
            <p>Muscle Gain</p>
            <input type='checkbox' />
          </div>
          <div className='itembox'>
            <p>Flexibility and Mobility</p>
            <input type='checkbox' />
          </div>
          <div className='itembox'>
            <p>General Fitness</p>
            <input type='checkbox' />
          </div>
          <div className='itembox'>
            <p>Event - specific training</p>
            <input type='checkbox' />
          </div>
          <div className='itembox'>
            <p>Mindfulness and Mental Health</p>
            <input type='checkbox' />
          </div>
        </div>
        <div className='btnbox'>
          <button className='goalButton' onClick={() => setcurrNO(5)}>
            Confirm
          </button>
        </div>
      </div>
    </>
  )
}

export default Goal
