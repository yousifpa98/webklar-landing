// prerender.ts
import { prerender } from 'vike/prerender'

export default prerender(async (pageContexts) => {
  // Specify the routes you want to pre-render
  return {
    // Example: Pre-render all pages with routes
    routes: [
      '/',
      '/about',
      // Add your routes here
    ],
    // Optional: Add any additional configuration
    // For example, setting a base URL if not deploying at root
    // baseUrl: 'https://your-site.com/subpath'
  }
})