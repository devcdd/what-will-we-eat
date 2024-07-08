"use client"

import "./globals.css"
import { QueryClient } from "@tanstack/query-core"
import { QueryClientProvider } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import { ThemeProvider } from "@/components/provider/ThemeProvider"
import { useTheme } from "next-themes"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const queryClient = new QueryClient()
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    console.log(
      "%clayout.tsx:24 - %ctheme = ",
      "color:yellow;",
      "color:lightgreen; font-weight:bold",
      theme,
    )
  }, [theme])

  if (!mounted) return null

  return (
    <html lang="en">
      <body className={"h-screen p-2"}>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
