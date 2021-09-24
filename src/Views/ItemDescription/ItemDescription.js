import { useParams } from 'react-router'
import useAxios from '../../customHooks/useAxios'
import ItemBreadcrumbs from './ItemBreadcrumbs'
import ErrorComponent from '../../components/ErrorComponent'
import Button from '../../atoms/Button'
import { ItemDescriptionStyle } from './ItemDescriptionStyle'
import { NumberFormat } from '../../utils/NumberFormat'

/**
* Renders a Item Description with the api response
*/
const ItemDescription = () => {
  let { id } = useParams()

  const { data, loading, error } = useAxios({
    method: 'get',
    url: `/api/items/${id}`,
  })

  if (error) {
    return <ErrorComponent error={error} />
  }

  if (loading) {
    return <div>Cargando...</div>
  }

  return (
    <ItemDescriptionStyle
      data-testid="Item_description"
      backgroundUrl={data.item.picture}
    >
      <ItemBreadcrumbs 
        categoryId={data.item.category_id}
      />
      <div>
        <div className="item-description__picture" />
        <div className="item-description__description">
          <h2>Descripción del producto</h2>
          <p>{data.item.description}</p>
        </div>
      </div>
      <div className="buy-section">
        <p className="buy-section__sold-quantity">
          {data.item.condition === 'new' && 'Nuevo'}
          {(data.item.condition === 'new' && data.item.sold_quantity > 0) && ' - '}
          {data.item.sold_quantity > 0 && `${data.item.sold_quantity} vendidos`} 
        </p>
        <h2 className="buy-section__title">
          {data.item.title}
        </h2>
        <h2 className="buy-section__price">
          $ {NumberFormat.format(data.item.price.amount)}
          <span className="buy-section__decimals">
            {data.item.price.decimals || '00'}
          </span>
        </h2>
        <Button 
          type="button"
          variant="primary"
        >
          Comprar
        </Button>
      </div>
    </ItemDescriptionStyle>
  )
}

export default ItemDescription