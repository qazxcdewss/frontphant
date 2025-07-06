import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/phantom-frontend/', // 👈 важно!
  plugins: [react()],
})