"use client"

import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function MessageInput() {
  const [message, setMessage] = useState("")

  return (
    <>
      <Textarea
        id="message"
        name="message"
        maxLength={500}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="min-h-[100px] w-full"
      />
      <p className="mt-1 text-sm text-gray-500">{message.length}/500 characters</p>
    </>
  )
}
