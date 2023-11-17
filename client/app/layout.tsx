import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Header from '@/components/layout/header/Header'
import Providers from '@/helpers/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Eco harbor',
	description: 'Eco harbor website',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<main>
					<div className="wrapper">
						<Providers>
							<>
								<Header />
								{children}
							</>
						</Providers>
					</div>
				</main>
			</body>
		</html>
	)
}
