/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: false,
    },
    // Remove the experimental appDir flag since we're using pages for API
  }
  
  module.exports = nextConfig