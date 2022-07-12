import mongoose from 'mongoose'
import {config} from '../config/Constants'
export class MongoConnetion {
  public async connect(): Promise<void> {
    try {
      await mongoose.connect(config.MONGO_CONNECTION, { userNewUrlParser: true ,userUnifiedTopology: true})
      console.log('Database connected')
    } catch(err) {
      console.error(err.message)
      process.exit(1)

    }
  }
}