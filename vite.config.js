import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  assetsInclude: ["**/*.JPG"], // Allow uppercase .JPG imports
  server: {
    host: true, // 👈 This allows local network access
  },
})
