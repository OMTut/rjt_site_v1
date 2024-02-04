import { Prompt } from 'next/font/google'
import './globals.css'
import { auth } from "@/lib/auth"
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Prompt({ subsets: ['latin'], 
                        weight: ['100','200','300'], })

export const metadata = {
  title: {
    default: 'RJTuttle.com - Software Engineer & Former Bard',
    template: '%s - RJTuttle.com'
  },
  description: 'Developer of Projects, Dreams, & Diatribes',
};

const session = await auth();

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
