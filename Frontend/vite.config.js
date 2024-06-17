import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

    // server: {
    //   // host: '0.0.0.0', // Bind to all network interfaces
    //   // port: 5174,

    //   // change here before production?
    //   proxy: {
    //     // Proxying API requests
    //     '/api': {
    //       target: 'https://api.boats.com', // Target API
    //       changeOrigin: true,  // Needed for virtual hosted sites
    //       rewrite: (path) => path.replace(/^\/api/, ''),  // Rewrite path removing '/api'
    //     }
    //   }
    // },

  // Configuration options for the production build
  build: {
    minify: 'esbuild', // Using esbuild for faster builds; switch to 'terser' for more complex scenarios
    sourcemap: false, // Turning off source maps for production to reduce size and hide source
  }
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],


//   //remove later
//   // server: {
//   //   port: 5174  //remove when in production!!
//   // },

//   //-------------------

//   server: {
//     // host: '0.0.0.0', // Bind to all network interfaces
//     // port: 5174, 

//     //change here before production?
//     // proxy: {
//     //   // Proxying API requests
//     //   '/api': {
//     //     target: 'https://api.boats.com', // Target API
//     //     changeOrigin: true,  // Needed for virtual hosted sites
//     //     rewrite: (path) => path.replace(/^\/api/, ''),  // Rewrite path removing '/api'
//     //   }
//     // }
//   },

//   build: {
//     // Configuration options for the production build
//     minify: 'esbuild', // or 'terser' if you need more complex minifications
//     sourcemap: false, // Consider turning off source maps for production
//     // More options...
//   }

// })
