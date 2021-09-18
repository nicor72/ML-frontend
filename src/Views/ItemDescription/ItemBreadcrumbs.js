import { useEffect, useContext } from 'react'
import useAxios from '../../customHooks/useAxios'
import { MainContext } from '../../contexts/MainContext'

const ItemBreadcrumbs = ({ categoryId }) => {
  const { dispatch } = useContext(MainContext)

  const { data } = useAxios({
    method: 'get',
    url: `/api/categories/${categoryId}`,
  })

  useEffect(() => {
    if (data) {
      dispatch({ type: 'FILL_BREADCRUMBS', payload: data.categories })
    }
  }, [data])

  return null
}

export default ItemBreadcrumbs