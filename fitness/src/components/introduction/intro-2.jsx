import React from 'react'
import introimg from '../../assets/intro2.png'
const Intro2 = ({ setInteroNo }) => {
  return (
    <>
      <div className='interoinnercontainer'>
        <div className='imagecontentbox'>
          <img src={introimg} className='introimg2' alt='' srcset='' />
          <div className='introcontent'>
            <h3>Get Burn</h3>
            <p>
              Let’s keep burning to achieve your goals, it hurts only
              temporarily, if you give up now you will be in pain forever
            </p>
          </div>
        </div>

        <div className='introbutton'>
          <button onClick={() => setInteroNo(3)}>
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

export default Intro2
