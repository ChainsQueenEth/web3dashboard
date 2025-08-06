import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Simulate the browser for React components
    globals: true,        // Allows using describe/it/test without imports
    include: ['src/**/*.test.{ts,tsx}'], // Looks for test files in src/
    // setupFiles: './vitest.setup.ts', // Uncomment if you add a setup file
  },
});
