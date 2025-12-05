import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

//https://vite.dev/config/
export default defineConfig(({ mode }) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the
    // `VITE_` prefix.

    const env = loadEnv(mode, ".", '')

    return {
        define: {
            __APP_ENV__: JSON.stringify(env.WEB_APP_PORT),
        },
        server: {
            port: env.WEB_APP_PORT ? Number(env.WEB_APP_PORT) : 5173,
        },
        plugins: [react(), tailwindcss()],
        alias: {
            "@": path.resolve('.')
        },
    }
})
