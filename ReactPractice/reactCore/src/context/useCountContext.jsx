import React, { createContext, useReducer, useContext } from 'react'

export const countContext = createContext()


export const UseCountProvider = ({children}) => {

  

  const CountReducer = (state, action) => {

    switch (action.type) {
      case "Inc":
        return { count: state.count + 1 }
      case "Dec":
        return { count: state.count - 1 }
      case "Res":
        return { count: 0 }

    }
  }

  const [state, dispatch] = useReducer(CountReducer, { count: 0 })

  return (

    <countContext.Provider value={{ state, dispatch }}>
      {children}
    </countContext.Provider>)
}

