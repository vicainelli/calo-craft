import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello, Calo Craft API!')
})

export default app