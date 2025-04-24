import localFont from "next/font/local";
import "./globals.css";
import {Aside} from "@/componentes/Aside";
import { Prompt} from 'next/font/google'

const prompt = Prompt({
  weight: ['400','600'],
  subsets: ['latin'],
  display: 'swap',

})

export const metadata = {
  title: "Code Connect",
  description: "Conectando programadores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={prompt.className}>
      <body >
        <div className="app-container">
        <Aside/>
        {children}
        </div>
      </body>
    </html>
  );
}
