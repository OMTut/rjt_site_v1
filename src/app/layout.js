import { Prompt } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Prompt({ subsets: ['latin'], 
                        weight: ['100','200','300'], })

export const metadata = {
  title: 'RJTuttle.com - Software Engineer & Former Bard',
  description: 'Developer of Projects, Dreams, & Diatribes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar/>
          {children}
          
        </div>
        <Footer/>  
      </body>
    </html>
  )
}
