import dotenv from 'dotenv'
import { env } from 'process'

dotenv.config()
const apiKey = env.OMDB_API_KEY

export { apiKey }
