import { useParams } from 'react-router'
import useAxios from '../../customHooks/useAxios'

const ItemDescription = () => {
  let { id } = useParams()

  const { data, loading, error } = useAxios({
    url: `/api/items/${id}`,
  })

  if (error) {
    return <div>Opss, Error :(</div>
  }

  if (loading) {
    return <div>Cargando...</div>
  }

  return (
    <>
      <div>Itemdescription</div>
      <p>{data.author.name}</p>
    </>
  )
}

export default ItemDescription