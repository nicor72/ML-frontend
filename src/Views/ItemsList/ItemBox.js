import PropTypes from 'prop-types'
import { NumberFormat } from '../../utils/NumberFormat'

const ItemBox = ({ item }) => {
  return (
    <div className="item-box">
      <div className="item-main-details">
        <div className="item-picture" />
        <div className="item-title-section">
          <h2>
            $ {NumberFormat.format(item.price.amount)}
            {item.condition === 'new' &&
              <span className="item-new-span"/>
            }
          </h2>
          <p className="item-title">{item.title}</p>
        </div>
      </div>
      <div className="item-location">
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
  })
}

export default ItemBox