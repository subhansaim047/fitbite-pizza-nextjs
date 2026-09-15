/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/', destination: '/fitbitepizza/site.html', permanent: false }
    ]
  }
}
module.exports = nextConfig;
