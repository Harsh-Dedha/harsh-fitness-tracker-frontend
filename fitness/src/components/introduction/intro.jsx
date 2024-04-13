import React, { useEffect, useState } from 'react'
import Intro1 from './intro-1'
import Intro2 from './intro-2'
import './intro.css'
const Intro = ({ setcurrNO }) => {
  const [interNo, setInteroNo] = useState(1)
  useEffect(() => {
    // setIntero(false)
    if (interNo > 2) {
      setcurrNO(2)
    }
  }, [interNo])
  return (
    <>
      <dIv className='introOuterContainer'>
        <div className='IntroSkipButton'>
          <a href='/'>skip</a>
        </div>
        {interNo == 1 && <Intro1 setInteroNo={setInteroNo} />}
        {interNo == 2 && <Intro2 setInteroNo={setInteroNo} />}
      </dIv>
    </>
  )
}

export default Intro
