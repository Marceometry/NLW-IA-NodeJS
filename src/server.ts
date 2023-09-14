import 'dotenv/config'
import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import {
  createTranscriptionRoute,
  generateAICompletionRoute,
  getAllPromptsRoute,
  uploadVideoRoute,
} from './routes'

const PORT = 3333
const app = fastify()

app.register(fastifyCors, { origin: process.env.FRONTEND_URL })

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app
  .listen({ port: PORT })
  .then(() => console.log(`HTTP Server Running on http://localhost:${PORT}\n`))
