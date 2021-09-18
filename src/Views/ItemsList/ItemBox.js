import PropTypes from 'prop-types'

const ItemBox = ({ item }) => {
  return (
    <div className="item-box">
      <div className="item-main-details">
        <div className="item-picture" />
        <div>
          <h2>$ {item.price.amount}</h2>
          <p>{item.title}</p>
        </div>
      </div>
      <div>
        {/* {item.title} */}
      </div>
    </div>
  )
}

ItemBox.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.shape({
      amount: PropTypes.string,
      decimals: PropTypes.string
    }),
    picture: PropTypes.string
  })
}

export default ItemBox