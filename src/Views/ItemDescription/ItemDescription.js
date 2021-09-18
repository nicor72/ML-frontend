import { useParams } from 'react-router'
import useAxios from '../../customHooks/useAxios'
import ItemBreadcrumbs from './ItemBreadcrumbs'
import Button from '../../atoms/Button'
import { ItemDescriptionStyle } from './ItemDescriptionStyle'
import { NumberFormat } from '../../utils/NumberFormat'

const ItemDescription = () => {
  let { id } = useParams()

  const { data, loading, error } = useAxios({
    method: 'get',
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
      <ItemBreadcrumbs 
        categoryId={data.item.category_id}
      />
      <div>
        <div className="item-description-picture" />
        <div className="item-description">
          <h2>Descripción del producto</h2>
          <p>{data.item.description}</p>
        </div>
      </div>
      <div className="item-description-buy-section">
        <p className="sold-quantity">
          {data.item.condition === 'new' && 'Nuevo'}
          {(data.item.condition === 'new' && data.item.sold_quantity > 0) && ' - '}
          {data.item.sold_quantity > 0 && `${data.item.sold_quantity} vendidos`} 
        </p>
        <h2 className="item-description-title">
          {data.item.title}
        </h2>
        <h2 className="item-description-price">
          $ {NumberFormat.format(data.item.price.amount)}
          <span>
            {data.item.price.decimals || '00'}
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