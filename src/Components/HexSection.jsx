import React,{ useContext } from 'react'
import '../Styles/Section.css'
import { userContext } from '../Helper/Context'

const HexSection = () => {
  const {hexState,hexFunction,copyText,resetButton} = useContext(userContext)
  document.body.style.backgroundColor = hexState
  return (
    <>
      <main>
        <div className="color-container">
            <h3 className='container-text'>BACKGROUND-COLOR: <span className="chose-color" onClick={()=>copyText(hexState)}>{hexState}</span></h3>
            <div className="color-button-container">
              <button className="container-button" onClick={()=>hexFunction()}>CLICK ME</button>
              <button className="container-button" onClick={()=>resetButton('hex')}>Reset</button>
            </div>
        </div>
      </main>
    </>
  )
}

export default HexSection