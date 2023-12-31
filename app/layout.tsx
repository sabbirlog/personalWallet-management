import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ThemeContextProvider from '@/theme/index';
import DefaultLayout from '@/layouts/Default/index';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Wallet',
  description: 'Calculate your balance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <DefaultLayout>
              {children}
            </DefaultLayout>
          </AppRouterCacheProvider>
        </body>
      </ThemeContextProvider>
    </html>
  )
}
