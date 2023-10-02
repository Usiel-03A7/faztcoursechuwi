import './globals.css'
import { Inter } from 'next/font/google'
import Nabvar from '../components/navbar/navbar'
import FooterComponent from '@/components/footer/footerComponent'

export const metadata = {
  title:"Fazt code cursito de nextjs <3 "
}
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nabvar />
        {children}
        </body>
        <FooterComponent />
    </html>
  )
}

