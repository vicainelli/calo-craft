import { defineConfig } from 'vitest/config'

console.log('Current working directory:', process.cwd());

import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,ts}'],
    root: process.cwd(),
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  },
})