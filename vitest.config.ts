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
    // Fast, reliable React component testing in a browser-like env
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: './vitest.setup.ts',

    // Performance & stability
    isolate: true,
    clearMocks: true,
    restoreMocks: true,
    pool: 'threads',
    // Vitest v3: configure thread limits under poolOptions.threads
    poolOptions: {
      threads: {
        maxThreads: process.env.CI ? 2 : undefined, // keep CI stable on small runners
        minThreads: 1,
      },
    },

    // Output & DX
    reporters: process.env.CI ? ['dot'] : ['default'],
    watch: !process.env.CI,
    cache: { dir: './node_modules/.vitest' },

    // Coverage is configured but disabled by default. Use `pnpm coverage`.
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      reporter: ['text', 'html'],
      enabled: false,
    },
  },
});
