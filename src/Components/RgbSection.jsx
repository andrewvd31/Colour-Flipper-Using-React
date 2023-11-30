import React, { useContext } from 'react'
import '../Styles/Section.css'
import { userContext } from '../Helper/Context'

const RgbSection = () => {
  const {rgbState,rgbFunction,copyText,resetButton} = useContext(userContext)
  document.body.style.backgroundColor = rgbState
  return (
    <>
      <main>
        <div className="color-container">
            <h3 className='container-text'>BACKGROUND-COLOR: <span className="chose-color" onClick={()=>copyText(rgbState)}>{rgbState}</span></h3>
            <div className="color-button-container">
              <button className="container-button" onClick={()=>rgbFunction()}>CLICK ME</button>
              <button className="container-button" onClick={()=>resetButton('rgb')}>Reset</button>
            </div>
        </div>
      </main>
    </>
  )
}

export default RgbSection