import React from 'react'
import introimg from '../../assets/intro1.png'
const Intro1 = ({ setInteroNo }) => {
  return (
    <>
      <div className='interoinnercontainer'>
        <div className='imagecontentbox'>
          <img src={introimg} alt='' srcset='' />
          <div className='introcontent'>
            <h3>Track Your Goal</h3>
            <p>
              Don’t worry if you have trouble determining your goals, We can
              help you determine your goals and track your goals
            </p>
          </div>
        </div>

        <div className='introbutton'>
          <button onClick={() => setInteroNo(2)}>
            <img
              width='30'
              height='30'
              src='https://img.icons8.com/ios-glyphs/30/FFFFFF/chevron-right.png'
              alt='chevron-right'
            />
          </button>
        </div>
      </div>
    </>
  )
}

export default Intro1
