import PropTypes from 'prop-types'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { BreadcrumbsStyle } from './BreadcrumbsStyle'

const Breadcrumbs = ({ path = [] }) => {
  const location = useLocation()
  const history = useHistory()

  if (location.pathname === '/') return null
  
  return (
    <BreadcrumbsStyle>
      <ul data-testid="Breadcrumbs_ul" className="breadcrumbs-desktop">
        <Link to="/">
          <li>Inicio {'>'} {' '}</li>
        </Link>
        {path.map((p, key) =>
          <li key={key}>{p} {key < path.length -1 && ' > '}</li>
        )}
      </ul>
      <ul className="breadcrumbs-mobile">
        <li onClick={() => history.goBack()}>{'<'} Volver</li>
      </ul>
    </BreadcrumbsStyle>
  )
}

Breadcrumbs.propTypes = {
  path: PropTypes.array
}

export default Breadcrumbs