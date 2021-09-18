import { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const initialState = {
  breadcrumbs: []
}

export const MainContext = createContext(initialState)

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
    case 'FILL_BREADCRUMBS':
      return {
        ...state,
        breadcrumbs: action.payload
      }
    case 'CLEAR_BREADCRUMBS':
      return {
        ...state,
        breadcrumbs: []
      }
    default:
      return state
    }
  }, initialState)

  return (
    <MainContext.Provider 
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

MainProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { MainProvider }