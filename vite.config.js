import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<<< HEAD:vite.config.js
  plugins: [react()],
========
  plugins: [react(), tailwindcss()],
>>>>>>>> 4ca5dc6ca8fc1911617e7fb84a66f8eaa4f7cf6d:LandingPage/vite.config.js
})
