import express from 'express'
import swaggerUi from 'swagger-ui-express'

import router from './routes.js'

import swaggerDocs from './swagger.json' assert { type: 'json' };

const app = express()

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(router)

app.listen(3333, () => console.log('Server is running'))