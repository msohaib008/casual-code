import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeSwitcher } from "./ThemeSwitcher"
import { ThemeProvider } from './theme-provider'
import Navbar from './components/Navbar';
import MyProfilePic from './components/MyProfilePic'
import { Analytics } from '@vercel/analytics/react';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Sohaib's Blog",
  description: 'Created by Muhammad Sohaib',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
      className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] `}
      >  
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main>
          <Navbar/>
          <ThemeSwitcher />
          <MyProfilePic/>
          {children}
          <Analytics />
          </main>
      </ThemeProvider></body>
    </html>
  )
}
