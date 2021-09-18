import PropTypes from 'prop-types'
import { ButtonStyle } from './ButtonStyle'

const Button = ({ children, variant, ...props }) => {
  return (
    <ButtonStyle {...props}
      data-testid="Atom_button"
      variant={variant}
    >
      {children}
    </ButtonStyle>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string
}

export default Button