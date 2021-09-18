import PropTypes from 'prop-types'
import { BreadcrumbsStyle } from './BreadcrumbsStyle'

const Breadcrumbs = ({ path }) => {
  return (
    <BreadcrumbsStyle>
      <li>Inicio {'>'} {' '}</li>
      {path.map((p, key) =>
        <li key={key}>{p} {key < path.length -1 && ' > '}</li>
      )}
    </BreadcrumbsStyle>
  )
}

Breadcrumbs.propTypes = {
  path: PropTypes.array
}

export default Breadcrumbs