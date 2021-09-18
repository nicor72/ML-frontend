import PropTypes from 'prop-types'
import { ButtonStyle } from './ButtonStyle'

const Button = ({ children, ...props }) => {
  return (
    <ButtonStyle
      {...props}
    >
      {children}
    </ButtonStyle>
  )
}

Button.propTypes = {
  children: PropTypes.node
}

export default Button