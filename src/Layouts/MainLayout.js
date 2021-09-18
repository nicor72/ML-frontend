import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import { MainContext } from '../contexts/MainContext'
import { MainLayoutStyle } from './MainLayoutStyle'

const MainLayout = ({ children }) => {
  let location = useLocation()
  const { state, dispatch } = useContext(MainContext)

  useEffect(() => {
    if (location?.pathname === '/') {
      dispatch({ type: 'CLEAR_BREADCRUMBS' })
    }
  }, [location])

  return (
    <MainLayoutStyle>
      <Header />
      <Breadcrumbs 
        path={state.breadcrumbs}
      />
      <div data-testid="Content_container" className="content-container">
        {children}
      </div>
    </MainLayoutStyle>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout