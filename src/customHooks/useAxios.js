
import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000'

const useAxios = ({ url, method, body = null, headers = null }) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setloading] = useState(true)

  const resetRequest = () => {
    setData(null)
    setError('')
    setloading(true)
  }

  const fetchData = () => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setloading(false)
      })
  }

  useEffect(() => {
    resetRequest()
    fetchData()
  }, [method, url, body, headers])

  return { data, error, loading }
}

export default useAxios