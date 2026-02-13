import React, { useContext } from 'react'

import { countContext } from '../context/useCountContext'

import useWindowDimensions from '../hooks/useWindowDimensions';



const boxColor = ({ value }) => {

  const { width, height } = useWindowDimensions();


  const { state, dispatch } = useContext(countContext)


  const TrueFalseFunc = (value) => {
    
    if (value % 2 == 0) {
      return true
    } else {
      return false
    }

  }

  return (
    <>
      <div className={`BoxShape ${TrueFalseFunc(state.count) ? `bg-red` : `bg-green`} `}>
      <h1>Window Dimensions</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>

      </div>
      <button onClick={() => dispatch({ type: "Res" })}> ResetAll </button>
    </>
  )
}

export default boxColor