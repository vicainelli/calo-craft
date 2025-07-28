import { Hono } from 'hono'

export function createTestRequest(
  app: Hono, 
  path: string, 
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', 
  body?: string | FormData | object,
  headers?: Record<string, string>
) {
  const url = `http://localhost${path}`
  const reqInit: RequestInit = { method }

  if (headers) {
    reqInit.headers = headers
  }

  if (body) {
    if (body instanceof FormData) {
      reqInit.body = body
    } else if (typeof body === 'object') {
      reqInit.body = JSON.stringify(body)
      reqInit.headers = {
        ...reqInit.headers,
        'Content-Type': 'application/json'
      }
    } else {
      reqInit.body = body
    }
  }

  return app.request(url, reqInit)
}