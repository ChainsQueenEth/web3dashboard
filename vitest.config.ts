import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';
import { URL } from 'node:url';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  test: {
    environment: 'jsdom', // Simulate the browser for React components
    globals: true,        // Allows using describe/it/test without imports
    include: ['src/**/*.test.{ts,tsx}'], // Looks for test files in src/
    setupFiles: './vitest.setup.ts', // Global test setup (jest-dom, etc.)
  },
});
