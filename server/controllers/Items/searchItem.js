const axios = require('axios')
const { API_URL, AUTHOR } = require('../../constants')

module.exports = {
  searchItem: async (req, res) => {
    if (!req.query.q) {
      res.status(400).send({ message: 'Missing query' })
    }

    try {
      const query = req.query.q.replace(/[|&;$%@"<>()+,·¨ÇñÑ´]/g, '')
      const limit = req.query.limit ? `&limit=${req.query.limit}` : ''
    
      let items = []
      let categories = []
    
      const { data: { results, filters } } = await axios.get(`${API_URL}/sites/MLA/search?q=${query}${limit}`)

      if (results.length) {
        const categoryValues = filters.find(filter => filter.id === 'category')?.values[0]
        categories = categoryValues?.path_from_root.map(path => path.name) || []
        
        items = results.map(item => ({
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price.toString().split('.')[0],
            decimals: item.price.toString().split('.')[1]
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping?.free_shipping || false,
          location: item.address.city_name
        }))
      }

      res.send({
        author: AUTHOR,
        categories,
        items
      })
    } catch (error) {
      res.status(error.response?.status ||500).send({ message: error.message })
    }
  }
}