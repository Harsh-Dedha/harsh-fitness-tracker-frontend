import React from 'react'
import './workoutsheadule.css'

const WorkOutsheadule = () => {
  return (
    <>
      <div className='workoutSheaduleOuterContainer'>
        <div className='heading'>
          <button>
            <img
              width='30'
              height='30'
              src='https://img.icons8.com/ios-glyphs/30/chevron-left.png'
              alt='chevron-left'
            />
          </button>
          <div className='headinginnerBox'>
            <h1>Workout Tracker</h1>
          </div>
        </div>
        <div className='month'>
          <img
            width='30'
            height='30'
            src='https://img.icons8.com/ios-glyphs/30/chevron-left.png'
            alt='chevron-left'
          />
          <p>Feb 2024</p>
          <img
            width='30'
            height='30'
            src='https://img.icons8.com/ios-glyphs/30/chevron-right.png'
            alt='chevron-right'
          />
        </div>
        <div className='celender'>
          <div className='individulaDate '>
            <p>Sun</p>
            <h4>5</h4>
          </div>
          <div className='individulaDate select'>
            <p>Mon</p>
            <h4>6</h4>
          </div>
          <div className='individulaDate'>
            <p>Tue</p>
            <h4>7</h4>
          </div>
          <div className='individulaDate'>
            <p>Wed</p>
            <h4>8</h4>
          </div>
          <div className='individulaDate'>
            <p>Thu</p>
            <h4>9</h4>
          </div>
        </div>
        <div className='sheadule'>
          <div className='timeframe'>
            <p>06:00 AM</p>
          </div>
          <div className='timeframe'>
            <p>07:00 AM</p>
          </div>
          <div className='timeframe'>
            <p>08:00 AM</p>
          </div>
          <div className='timeframe'>
            <p>09:00 AM</p>
          </div>
          <div className='timeframe'>
            <p>10:00 AM</p>
          </div>
          <div className='timeframe'>
            <p>11:00 AM</p>
          </div>
          <div className='timeframe'>
            <p>12:00 PM</p>
          </div>
          <div className='timeframe'>
            <p>01:00 PM</p>
          </div>
          <div className='timeframe'>
            <p>02:00 PM</p>
          </div>
          <div className='timeframe'>
            <p>03:00 PM</p>
          </div>
          <div className='timeframe'>
            <p>04:00 PM</p>
          </div>
          <div className='addbutton'>+</div>
        </div>
      </div>
    </>
  )
}

export default WorkOutsheadule
