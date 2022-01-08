/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/join',
        destination: '/api/join'
      }
    ]
  }
}
