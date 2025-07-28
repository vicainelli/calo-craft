import { describe, it, expect } from 'vitest'
import app from './index'
import { Hono } from 'hono'

describe('API Application', () => {
  it('should have a root route', async () => {
    const res = await app.request('/')
    expect(res.status).toBe(200)
    const text = await res.text()
    expect(text).toBe('Hello, Calo Craft API!')
  })
})