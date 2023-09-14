import { fastify } from 'fastify'
import {
  createTranscriptionRoute,
  getAllPromptsRoute,
  uploadVideoRoute,
} from './routes'

const PORT = 3333
const app = fastify()

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)

app
  .listen({ port: PORT })
  .then(() => console.log(`HTTP Server Running on http://localhost:${PORT}\n`))
