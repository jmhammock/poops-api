const { artPieceClient } = require('../shared/apiClient')

module.exports = async (context, req) => {
  const { getOne, insertOne, updateOne, deleteOne } = await artPieceClient()
  let res
  let error = false
  try {
    switch (req.method.toUpperCase()) {
      case 'GET':
        res = getOne(req.query.id)
        break
      case 'POST':
        res = insertOne(req.body.artPiece)
        break
      case 'PUT':
        res = updateOne(req.query.id, req.body.artPiece)
        break
      case 'DELETE':
        res = deleteOne(req.query.id)
        break
      default:
        break
    }
  } catch (e) {
    error = true
    res = e.message
  } finally {
    context.res = {
      status: error ? 400 : 200,
      body: res
    }
  }
}
