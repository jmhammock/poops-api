const { getCollection, ART_PIECES } = require('./collections')

async function artPieceClient () {
  const collection = await getCollection(ART_PIECES)
  return {
    getAll: async () => await collection.find().toArray(),
    getOne: async (id) => await collection.findOne({ _id: id }),
    insertOne: async (artPiece) => await collection.insertOne(artPiece),
    updateOne: async (id, artPiece) => {
      const update = {
        $set: artPiece
      }
      return await collection.updateOne({ _id: id, update })
    },
    deleteOne: async (id) => await collection.deleteOne({ _id: id })
  }
}

module.exports = {
  artPieceClient
}
