import './globals.css'
import {Heebo, Lato} from 'next/font/google';


const heebo = Heebo({
  subsets:['latin'],
  weight:'700',
  variable: '--font-heebo-bolder'
});
const lato = Lato({
  subsets:['latin'],
  weight:'400',
  variable: '--font-lato'
});


export const metadata = {
  title: 'MMA'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${heebo.variable} ${lato.variable}`}>
        {children}
        </body>
    </html>
  )
}
