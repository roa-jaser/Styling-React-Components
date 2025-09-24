import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Tailwind v3 لا يحتاج @tailwindcss/vite
export default defineConfig({
  plugins: [react()],
})
