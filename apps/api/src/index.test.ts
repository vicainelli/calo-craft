import { describe, it, expect } from 'vitest'
import app from './index'
import { createTestRequest } from './test-utils'

describe('API Application', () => {
  it('should have a root route', async () => {
    const res = await createTestRequest(app, '/')
    expect(res.status).toBe(200)
    const text = await res.text()
    expect(text).toBe('Hello, Calo Craft API!')
  })
})