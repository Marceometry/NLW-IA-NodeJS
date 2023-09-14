import { fastify } from 'fastify'
import {
  createTranscriptionRoute,
  generateAICompletionRoute,
  getAllPromptsRoute,
  uploadVideoRoute,
} from './routes'

const PORT = 3333
const app = fastify()

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app
  .listen({ port: PORT })
  .then(() => console.log(`HTTP Server Running on http://localhost:${PORT}\n`))
