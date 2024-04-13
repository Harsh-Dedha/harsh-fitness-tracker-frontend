import { useState } from 'react'
import './App.css'
import Intro from './components/introduction/intro'
import Register from './components/account creatiion/register'
import Login from './components/account creatiion/loging'
import Goal from './components/account creatiion/goal'
import Appinterface from './components/appInterFace/appinterface'
Appinterface
function App() {
  const [currNO, setcurrNO] = useState(1)

  return (
    <>
      {currNO === 1 && <Intro setcurrNO={setcurrNO} />}
      {currNO === 2 && <Register setcurrNO={setcurrNO} />}
      {currNO === 3 && <Login setcurrNO={setcurrNO} />}
      {currNO === 4 && <Goal setcurrNO={setcurrNO} />}
      {currNO === 5 && <Appinterface />}
    </>
  )
}

export default App
