"use client"
import { createQuestion } from "@/actions/createQuestion"
import { useToast } from "@/hooks/use-toast"
import Form from "next/form"
import { useActionState, useRef } from "react"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import MessageInput from "./MessageInput"

export default function MessageForm() {
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, action, isPending] = useActionState(createQuestion, null)

  const handleSendMessage = async (data: FormData) => {
    await action(data)

    if (formState?.success && formRef.current) {
      formRef.current.reset()
    }

    toast({
      title: "Question Submitted",
      description: "Your question has been sent to our surgeons. We'll get back to you soon.",
    })
  }

  return (
    <Form action={handleSendMessage} className="space-y-4" ref={formRef}>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input name="name" className="w-full" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" required className="w-full" />
      </div>
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input name="subject" className="w-full" />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <MessageInput />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox name="urgent" />
        <Label
          htmlFor="urgent"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          This is an urgent question
        </Label>
      </div>
      <Button type="submit" className="w-full" aria-disabled={isPending}>
        Submit Question
      </Button>
    </Form>
  )
}
