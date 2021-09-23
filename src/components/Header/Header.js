import Seeker from '../Seeker'
import { Link } from 'react-router-dom'
import { HeaderStyle } from './HeaderStyle'

/**
* Renders a Header component
*/
const Header = () => {
  return (
    <HeaderStyle>
      <Link to="/">
        <img 
          id="Logo_img"
          data-testid="Logo_img"
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.1/mercadolibre/logo__small.png"
          alt="Mercado libre logo"
          width="44"
          heigth="32"
        />
      </Link>
      <Seeker />
    </HeaderStyle>
  )
}

export default Header