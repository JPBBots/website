/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/join',
        destination: '/api/join'
      },
      {
        source: '/support',
        destination: '/api/join'
      },
      {
        source: '/:bot/invite',
        destination: '/api/invite?slug=:bot'
      }
    ]
  }
}
