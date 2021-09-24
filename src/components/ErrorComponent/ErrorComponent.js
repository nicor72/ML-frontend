import PropTypes from 'prop-types'

/**
* Renders an Error depending on status code
* 
* @param error - Object with te error response
*/
const ErrorComponent = ({ error }) => {
  const renderError = (status) => {
    switch (status) {
    case 404:
      return <p>Opss, Página no encontrada</p>
    default:
      return <p>Opss, Error :( {error.message}</p>  
    }
  }

  return (
    <div>{renderError(error.response?.status)}</div>
  )
}

ErrorComponent.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    response: PropTypes.shape({
      status: PropTypes.number
    })
  }).isRequired
}

export default ErrorComponent