const { artPieceClient } = require('../shared/apiClient')

module.exports = async function (context) {
  try {
    const { getAll } = await artPieceClient()
    const response = await getAll()
    context.res.body = JSON.stringify(response)
  } catch (e) {
    context.res = {
      status: 400,
      body: e.message
    }
  }
}
