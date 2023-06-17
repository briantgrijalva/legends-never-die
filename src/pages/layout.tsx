import styles from '../styles/Home.module.css'
import Image from 'next/image'
// import logo from '../assets/img/logo.svg'
// import { font } from '@/assets/fonts/font'
// import { FormattedMessage } from 'react-intl'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <nav>
          nav
        </nav>
        {children}
        <footer>
          footer
        </footer>
    </>
  )
}