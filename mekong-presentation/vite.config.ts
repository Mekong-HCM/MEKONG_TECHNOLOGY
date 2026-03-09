import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/MEKONG_TECHNOLOGY/',
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'vendor-motion': ['framer-motion'],
                    'vendor-charts': ['recharts'],
                },
            },
        },
    },
})
