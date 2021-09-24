import PropTypes from 'prop-types'
import { NumberFormat } from '../../utils/NumberFormat'

/**
* Renders a Item Box inside de ItemsList
* 
* @param item - object with the item info to render
*/
const ItemBox = ({ item }) => {
  return (
    <div data-testid="Item_box" className="item-box">
      <div className="item-box__main-details">
        <div className="item-box__picture" />
        <div className="item-title">
          <h2>
            $ {NumberFormat.format(item.price?.amount || '')}
            {item.condition === 'new' &&
              <span className="item-title__new-span"/>
            }
          </h2>
          <p className="item-title__title">{item.title}</p>
        </div>
      </div>
      <div className="item-box__location">
        {item.location}
      </div>
    </div>
  )
}

ItemBox.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    condition: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.shape({
      amount: PropTypes.string
    }),
    picture: PropTypes.string
  }).isRequired
}

export default ItemBox