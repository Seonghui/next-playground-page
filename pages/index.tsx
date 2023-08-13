import { Inter } from 'next/font/google'
import {useEffect, useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isClient, setIsClient] = useState('')

  useEffect(() => {
    console.log(window)
  }, [])
  const side = typeof window === "undefined" ? 'server' : 'client'

  console.log(side)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      hello
    </main>
  )
}
