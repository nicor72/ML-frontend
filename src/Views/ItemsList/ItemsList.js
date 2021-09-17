import { useLocation } from 'react-router-dom'
import useAxios from '../../customHooks/useAxios'

const ItemsList = () => {
  let query = new URLSearchParams(useLocation().search)
  const { data, loading, error } = useAxios({
    url: `/api/items?q=${query.get('q')}`,
  }) 

  if (error) {
    return <div>Opss, Error :(</div>
  }

  if (loading) {
    return <div>Cargando...</div>
  }

  return(
    <>
      <div>ItemsList</div>
      <p>{query.get('q')}</p>
      <p>{data.author.name}</p>
    </>
  )
}

export default ItemsList