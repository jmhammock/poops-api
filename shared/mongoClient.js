const MongoClient = require('mongodb').MongoClient

function buildConnString () {
  const pass = process.env.MONGO_PASS
  const db = process.env.MONGO_DB
  const connString = process.env.MONGO_CONN
    .replace('<pass>', pass)
    .replace('<db>', db)
  return connString
}

module.exports = new MongoClient(
  buildConnString(),
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
