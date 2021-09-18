import useAxios from '../../customHooks/useAxios'
import { useParams } from 'react-router'
import { ItemDescriptionStyle } from './ItemDescriptionStyle'
import Button from '../../atoms/Button'

const ItemDescription = () => {
  let { id } = useParams()

  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useAxios({
    url: `/api/items/${id}`,
  })

  if (error) {
    return <div>Opss, Error :( {error.message}</div>
  }

  if (loading) {
    return <div>Cargando...</div>
  }

  return (
    <ItemDescriptionStyle 
      backgroundUrl={data.item.picture}
    >
      <div>
        <div className="item-description-picture" />
        <div className="item-description">
          <h2>Descripción del producto</h2>
          <p>{data.item.description}</p>
        </div>
      </div>
      <div>
        <p className="sold-quantity">
          {data.item.condition === 'new' && 'Nuevo -'}
          {' '}
          {data.item.sold_quantity > 0 && `${data.item.sold_quantity} vendidos`} 
        </p>
        <h2 className="item-description-title">
          {data.item.title}
        </h2>
        <h2 className="item-description-price">
          $ {data.item.price.amount}
          <span>
            {data.item.price.decimals}
          </span>
        </h2>
        <Button variant="primary">
          Comprar
        </Button>
      </div>
    </ItemDescriptionStyle>
  )
}

export default ItemDescription