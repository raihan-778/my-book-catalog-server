import status from 'http-status'

import cors from 'cors'
import express, { Application, Request, Response } from 'express'

import globalErrorHandler from './app/middleware/globalErrorHandler'
import routes from './app/routes'

// import { UserRoutes } from './app/modules/user/user.router';
// import routes from './app/routes';

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
app.use('/api/v1', routes)

//api for testing
app.get('/', async (req: Request, res: Response) => {
  res.send('My Book catalog app is running perfectly ')
  // Promise.reject(new Error('Unhandeled promise rejection'));
  // throw new Error('ore Baba Error')
  // next('Ore baba Error');
})

//global error handler
app.use(globalErrorHandler)

//handle not found
app.use((req, res) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [{ path: req.originalUrl, message: 'Api not exist' }],
  })
})

// console.log(process.env)

export default app
