/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4900/api/:path*',
			},
			{
				source: '/ai/:path*',
				destination: 'http://localhost:4555/ai/:path*',
			},
		]
	},
}

module.exports = nextConfig
