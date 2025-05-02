"use client"

import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"
import { useEffect, useState } from "react"

export default function PrintButton() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <Button onClick={handlePrint} className="fixed bottom-4 right-4 bg-[#387F65] hover:bg-[#2c6550] print:hidden">
      <Printer className="mr-2 h-4 w-4" />
      Print Resume
    </Button>
  )
}
