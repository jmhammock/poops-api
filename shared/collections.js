const client = require('./mongoClient')

const ART_PIECES = 'artPieces'

async function getCollection (collection) {
  const conn = await client.connect()
  return conn.db(process.env.MONGO_DB).collection(collection)
}

module.exports = {
  ART_PIECES,
  getCollection
}
