import { defineConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'UiLibrary',
      // the proper extensions will be added
      fileName: 'ui-library',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'ReactDOM': "react-dom",
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
});
