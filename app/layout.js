import './globals.css'
import {Heebo, Lato, MuseoModerno} from 'next/font/google';


const museo = MuseoModerno({
  subsets:['latin'],
  weight:'700',
  variable: '--font-museo-bolder'
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
      <body className={`${museo.variable} ${lato.variable}`}>
        {children}
        </body>
    </html>
  )
}
