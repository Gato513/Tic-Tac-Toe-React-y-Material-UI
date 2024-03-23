import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://Gato513.github.io/Tic-Tac-Toe-React-y-Material-UI'
})
