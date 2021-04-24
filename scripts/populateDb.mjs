import { generateFakes } from '../utils/genData.mjs'
import { writeToDb } from '../utils/writeToDb.mjs'

const data = {
  artPieces: generateFakes('art_piece', 10),
}

writeToDb(data)