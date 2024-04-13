import React from 'react'
import './workouteTracker.css'
import chart from '../../assets/chart.png'
import upcomingworkout1 from '../../assets/upcomingWorlout1.png'
import upcomingworkout2 from '../../assets/upcomingWorkout2.png'
import workouts from '../../assets/workouts.png'
const WorkoutTracker = () => {
  return (
    <>
      <div className='worloutercontainer'>
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
        <div className='chart'>
          <img src={chart} />
        </div>
        <div className='alertBox'>
          <div className='innerAlertBox'>
            <img
              width='24'
              height='24'
              src='https://img.icons8.com/material-outlined/24/829DFF/error--v1.png'
              alt='error--v1'
            />
            <p>
              You've burned fewer calories than yesterday. Time to get moving!
            </p>
          </div>
        </div>
        <div className='upcomingWorkout'>
          <div className='Workoutheading'>
            <h4>Upcoming Workout</h4>
            <a href='/'>see more</a>
          </div>
          <div className='workoutCardBox'>
            <div className='workoutCard'>
              <img src={upcomingworkout1} alt='' srcset='' />
              <div className='workoutContent'>
                <h5>Full Body Workout</h5>
                <p>Today 3pm</p>
              </div>
              <input type='checkbox' className='one' id='checkboxone' />
              <label htmlFor='checkboxone' className='labelone'></label>
            </div>
            <div className='workoutCard'>
              <img src={upcomingworkout2} alt='' srcset='' />
              <div className='workoutContent'>
                <h5>Upper Body Workout</h5>
                <p>4 Feb, 3:30 pm</p>
              </div>
              <input type='checkbox' className=' two' id='checkboxtwo' />
              <label htmlFor='checkboxtwo' className='labeltwo'></label>
            </div>
            <div className='userChoice'>
              <div className='userChoiceheading'>
                <h4>What Do You Want to Train</h4>
              </div>
              <div className='workouts'>
                <div className='workoutsContent'>
                  <p>Full Body Workout</p>
                  <p>Arms</p>
                  <p>Chest</p>
                  <p>Legs</p>
                </div>
                <img src={workouts} alt='' srcset='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkoutTracker
