const axios = require('axios')
const { API_URL, AUTHOR } = require('../../constants')

/**
* Call to categories/:id endpoint
* 
* @returns array with the path_from_root of the category
*/
module.exports = {
  getCategory: async (req, res) => {
    if (!req.params.id) {
      res.status(400).send({ message: 'Missing param' })
    }

    try {
      let categories = []

      const { data } = await axios.get(`${API_URL}/categories/${req.params.id}`)

      if (data) {
        categories = data.path_from_root.map(path => path.name)
      }

      res.send({
        author: AUTHOR,
        categories
      })
    } catch (error) {
      res.status(error.response?.status || 500).send({ message: error.message })
    }
  }
}