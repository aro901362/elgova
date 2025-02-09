import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Elgova AI - Your Spiritual Chat Companion",
  description: "Empowering young adults with Bible-based guidance, support, and encouragement.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />     
          <main className="flex flex-grow p-2">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
