"use client"

import { useChat } from "ai/react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { ScrollArea } from "../ui/scroll-area"
import { Avatar } from "../ui/avatar"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Computer, User } from "lucide-react"
import { useRef } from "react"

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Вітаємо! 👋 Я дружній медичний помічник, який допоможе вам краще зрозуміти ваші симптоми та підготуватися до консультації з лікарем. Я використовуватиму просту мову без складних медичних термінів та допоможу вам чітко описати ваш стан. Будь ласка, розкажіть, що вас турбує найбільше?",
      },
    ],
  })
  const isInteracted = useRef(false)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    isInteracted.current = true
    handleSubmit(e)
  }

  return (
    <Card className="mx-auto mb-8 w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Віртуальний помічник</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4" isInteracted={isInteracted.current}>
          <div className="mb-4 flex items-start space-x-4">
            <Avatar>
              <Computer className="m-auto h-6 w-6" />
            </Avatar>
            <div className="rounded-lg bg-secondary p-3">
              <p className="text-sm">{messages[0].content}</p>
            </div>
          </div>
          {messages.slice(1).map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex items-start space-x-4 ${message.role === "user" ? "justify-end" : ""}`}
            >
              {message.role === "assistant" && (
                <Avatar>
                  <Computer className="m-auto h-6 w-6" />
                </Avatar>
              )}
              <div
                className={`rounded-lg p-3 ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              {message.role === "user" && (
                <Avatar>
                  <User className="m-auto h-6 w-6" />
                </Avatar>
              )}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleFormSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            className="flex-grow"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Thinking..." : "Send"}
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
