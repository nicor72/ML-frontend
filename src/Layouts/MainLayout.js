import PropTypes from 'prop-types'

const MainLayout = ({ children }) => {
  return (
    <div>
      <p>Buscador</p>
      {children}
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout