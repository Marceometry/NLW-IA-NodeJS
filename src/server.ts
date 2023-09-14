import { fastify } from 'fastify'
import { getAllPromptsRoute, uploadVideoRoute } from './routes'

const PORT = 3333
const app = fastify()

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)

app
  .listen({ port: PORT })
  .then(() => console.log(`HTTP Server Running on http://localhost:${PORT}\n`))
