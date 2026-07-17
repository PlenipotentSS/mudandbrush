import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (mudandbrush.com via CNAME) serves from the root, so base is '/'.
// If you ever host at https://<user>.github.io/mudandbrush instead, set
// VITE_BASE=/mudandbrush/ in the build environment.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
})
