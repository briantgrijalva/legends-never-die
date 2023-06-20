import styles from '../styles/Home.module.css'
import Image from 'next/image'
// import logo from '../assets/img/logo.svg'
// import { font } from '@/assets/fonts/font'
// import { FormattedMessage } from 'react-intl'
import Navbar from '../components/Navbar';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Navbar fixed={false} />
        <main className='bg-gray-dark'>
          {children}
        </main>
        <footer className='bg-gray'>
          footer
        </footer>
    </>
  )
}