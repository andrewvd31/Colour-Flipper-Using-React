import React, { useState } from 'react'
import Header from './Components/Header'
import RgbSection from './Components/RgbSection'
import HexSection from './Components/HexSection'
import { Routes,Route } from 'react-router-dom'
import { userContext } from './Helper/Context'

const App = () => {
  const DEFAULT_RGB_VALUE = 'rgb(255,255,255)'
  const DEFAULT_HEX_VALUE = '#FFFFFF'
  const [rgbState, setrgbState] = useState(DEFAULT_RGB_VALUE)
  const colorArray = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
  const [hexState, sethexState] = useState(DEFAULT_HEX_VALUE)
    
  function getRgbRandomNumber(){
    return Math.floor(Math.random()*255)
  }

  function getHexRandomNumber(){
    return Math.floor(Math.random()*colorArray.length)
  }

  function getRgbValues(){
    let newRgbValue = ''
    for (let i=0; i<3; i++){
      newRgbValue += getRgbRandomNumber() + ","
    }
    newRgbValue = newRgbValue.slice(0,-1)
    return `rgb(${newRgbValue})`
  }

  function getHexValues(){
    let newHexValue = ''
    for (let i=0; i<6;i++){
      newHexValue += colorArray[getHexRandomNumber()]
    }
    return `#${newHexValue}`
  }

  function rgbFunction(){
    setrgbState(getRgbValues())
    document.body.style.backgroundColor = rgbState
  }

  function hexFunction(){
    sethexState(getHexValues())
    document.body.style.backgroundColor = hexState
  }

  function copyText(data){
    navigator.clipboard.writeText(data)
    alert('Copied the text')
  }

  function resetButton(section){
    if (section === 'rgb'){
      document.body.style.backgroundColor = DEFAULT_RGB_VALUE
      setrgbState(DEFAULT_RGB_VALUE)
    }
    else{
      document.body.style.backgroundColor = DEFAULT_HEX_VALUE
      sethexState(DEFAULT_HEX_VALUE)
    }
  }

  return (
    <userContext.Provider value={{rgbState,hexState,rgbFunction,hexFunction,copyText,resetButton}}>
      <Header/>
      <Routes>
        <Route exact path='/' element={<RgbSection/>}/>
        <Route path='/RgbSection' element={<RgbSection/>}/>
        <Route path='/HexSection' element={<HexSection/>}/>
      </Routes>
    </userContext.Provider>
  )
}

export default App