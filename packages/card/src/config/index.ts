require('dotenv').config()

export const config = {
  mongoDBURL: process.env.DATABASE_URL,
  port: process.env.PORT,
}
