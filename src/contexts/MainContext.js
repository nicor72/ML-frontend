import { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import produce from 'immer'

const initialState = {
  breadcrumbs: []
}

export const MainContext = createContext(initialState)

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    produce((draft, action) => {
      switch (action.type) {
      case 'FILL_BREADCRUMBS':
        draft['breadcrumbs'] = action.payload
        break
      case 'CLEAR_BREADCRUMBS':
        draft['breadcrumbs'] = action.payload
        break
      default:
        break
      }
    }), initialState)

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