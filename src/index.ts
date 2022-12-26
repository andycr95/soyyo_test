import express from 'express'
import entityRouter from './routes/entities'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.PORT || 5000

app.use(function (req: { method: string; }, res: { sendStatus: (arg0: number) => void; }, next: () => void) {
  if (!(['POST'].indexOf(req.method) > -1)) {
    res.sendStatus(405);
  } else {
    next();
  }
});

app.use('/api/entities', entityRouter)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
