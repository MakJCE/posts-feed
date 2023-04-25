import Navigation from '../components/Navigation';
import '../../styles/globals.css';
import { Kanit } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Kanit({
  weight: '400',
  subsets: ['latin']
});

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={inter.className}>
        <Navigation />
        <marquee>⚛️⚛️ made by Jhonny Camacho ⚛️⚛️</marquee>
        {children}
      </body>
    </html>
  );
}
