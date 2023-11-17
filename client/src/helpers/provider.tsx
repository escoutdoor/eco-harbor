'use client'

import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { store } from '@/store/store'
import AuthProvider from '@/providers/AuthProvider'
import { Provider } from 'react-redux'

function Providers({ children }: React.PropsWithChildren) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	})

	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>{children}</AuthProvider>
			</QueryClientProvider>
		</Provider>
	)
}

export default Providers
