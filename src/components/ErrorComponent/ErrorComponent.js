import PropTypes from 'prop-types'

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
    <div>{renderError(error.response.status)}</div>
  )
}

ErrorComponent.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    response: PropTypes.shape({
      status: PropTypes.number.isRequired
    }).isRequired
  })
}

export default ErrorComponent