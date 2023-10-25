import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {
  
  switch (action.type) {
    case "RED":
      return {...state, color: 'red'}
    case "BLUE":
      return {...state, color: 'blue'}
    case "YELLOW":
      return {...state, color: 'yellow'}
    case "BROWN":
      return {...state, color: 'brown'}
    case "PINK":
      return {...state, color: 'pink'}
    case "CYAN":
      return {...state, color: 'cyan'}
    case "GREEN":
      return { ...state, color: 'green' }
    default:
      return state
  }

}

export const TitleColorProvider = ({ children }) => {

  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" })
  
  console.log("Title color context: ", state)

  return <TitleColorContext.Provider value={{...state, dispatch}}>
     {children}
   </TitleColorContext.Provider>
 }