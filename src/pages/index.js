import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className='w-full h-auto'>
        <NavBar/>
      </main>
  )
}
