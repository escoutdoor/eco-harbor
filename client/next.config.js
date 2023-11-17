/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4900/api/:path*',
			},
		]
	},
}

module.exports = nextConfig
