import { Roboto, Anton } from 'next/font/google';
import './globals.css'
import Nav from '@/components/header/nav'
import Provider from '@/providers/provider'
import AuthProvider from '@/providers/authProvider'


const roboto = Roboto({
  weight:['400','700'],
  style:['normal','italic'],
  subsets:['latin'],
  display:'swap',
  variable: '--font-roboto'
});

const anton = Anton({
  weight:['400'],
  subsets:['latin'],
  display:'swap',
  variable:'--font-anton'
});


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${anton.variable}`}>
      <body>
        <AuthProvider>
          <Provider>
            <Nav/>
            {children}
          </Provider>
      </AuthProvider>
      </body>
    </html>
  )
}
