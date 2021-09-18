import { useContext } from 'react'
import { useLocation, Link } from 'react-router-dom'
import useAxios from '../../customHooks/useAxios'
import ItemBox from './ItemBox'
import { MainContext } from '../../contexts/MainContext'
import { ItemBoxStyle } from './ItemBoxStyle'
import { ItemsListStyle } from './ItemsListStyle'
import { useEffect } from 'react'

const ItemsList = () => {
  const { dispatch } = useContext(MainContext)
  
  const QUERY_LIMIT = '&limit=4'
  let query = new URLSearchParams(useLocation().search)

  const { data, loading, error } = useAxios({
    method: 'get',
    url: `/api/items?q=${query.get('search')}${QUERY_LIMIT}`,
  }) 

  useEffect(() => {
    if (data) {
      dispatch({ type: 'FILL_BREADCRUMBS', payload: data.categories })
    }
  }, [data])

  if (error) {
    return <div>Opss, Error :( {error.message}</div>
  }

  if (loading) {
    return <div>Cargando...</div>
  }

  return(
    <ItemsListStyle data-testid="Items_list">
      {data.items.map((item, key, items) => 
        <ItemBoxStyle 
          key={item.id}
          backgroundUrl={item.picture || ''}
        >
          <Link to={`/items/${item.id}`}>
            <ItemBox
              item={item}
            />
          </Link>
          {key < items.length -1 && <hr />}
        </ItemBoxStyle>
      )}
    </ItemsListStyle>
  )
}

export default ItemsList