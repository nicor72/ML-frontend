import PropTypes from 'prop-types'
import { ButtonStyle } from './ButtonStyle'

/**
* Renders a Button
* 
* @param variant - change the style of the button (primary | secondary)
*/
const Button = ({ children, variant, ...props }) => {
  return (
    <ButtonStyle {...props}
      data-testid="Atom_button"
      modifiers={variant}
    >
      {children}
    </ButtonStyle>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary'])
}

export default Button