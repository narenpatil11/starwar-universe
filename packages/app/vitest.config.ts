import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    test: {
        clearMocks: true,
        browser: {
            enabled: true,
            provider: 'playwright',
            instances: [
                {browser: 'chromium'},
            ],
        },
    },
})
