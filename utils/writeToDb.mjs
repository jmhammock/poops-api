import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const DB_FILE_PATH = path.join(process.cwd(), 'db.json')

const writeFile = promisify(fs.writeFile)

async function writeToDb(data) {
  const stringified = JSON.stringify(data, null, 4)
  try {
    await writeFile(DB_FILE_PATH, stringified)
    console.log(`${DB_FILE_PATH} populated`)
  } catch (e) {
    console.error(e.message)
  }
}

export {
  writeToDb,
}