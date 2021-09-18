import { useContext } from 'react'
import { useLocation, Link } from 'react-router-dom'
import useAxios from '../../customHooks/useAxios'
import ItemBox from './ItemBox'
import { MainContext } from '../../contexts/MainContext'
import { ItemsBoxStyle } from './ItemsBoxStyle'
import { useEffect } from 'react'

const ItemsList = () => {
  const { dispatch } = useContext(MainContext)
  
  let query = new URLSearchParams(useLocation().search)

  const { data, loading, error } = useAxios({
    url: `/api/items?q=${query.get('search')}`,
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
    <>
      {data.items.map((item, key, items) => 
        <ItemsBoxStyle 
          key={item.id}
          backgroundUrl={item.picture || ''}
        >
          <Link to={`/items/${item.id}`}>
            <ItemBox
              item={item}
            />
          </Link>
          {key < items.length -1 && <hr />}
        </ItemsBoxStyle>
      )}
    </>
  )
}

export default ItemsList