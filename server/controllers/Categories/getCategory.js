const axios = require('axios')
const { API_URL, AUTHOR } = require('../../constants')

module.exports = {
  getCategory: (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
  
    if (!req.params.id) {
      res.status(404).send({ message: 'Missing param' })
    }

    let categories = []

    axios.get(`${API_URL}/categories/${req.params.id}`)
      .then(function ({ data }) {

        if (data) {
          categories = data.path_from_root.map(path => path.name)
        }

        res.send({
          author: AUTHOR,
          categories
        })
      })
      .catch(function (error) {
        res.status(error.response.status).send({ message: error.message })
      })
  }
}