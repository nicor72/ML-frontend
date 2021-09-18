import { useContext } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import { MainContext } from '../contexts/MainContext'
import { MainLayoutStyle } from './MainLayoutStyle'

const MainLayout = ({ children }) => {
  const { state } = useContext(MainContext)

  return (
    <MainLayoutStyle>
      <Header />
      <Breadcrumbs 
        path={state.breadcrumbs}
      />
      <div className="content-container">
        {children}
      </div>
    </MainLayoutStyle>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout