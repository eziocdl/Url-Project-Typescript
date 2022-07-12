import express, { application } from 'express'
import { URLController } from './controller/URLController'
import { MongoConnetion } from 'database/MongoConnection'

const api = express ()
api.use(express.json())

const database = new MongoConnetion()
database.connect


const urlController = new URLController()
application.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

application.listen(5000, () => console.log('Express listening'))
