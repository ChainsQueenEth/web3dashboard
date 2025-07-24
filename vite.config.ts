import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/web3dashboard/', // 👈 Add this line
  plugins: [
    tailwindcss(),
  ],
})
