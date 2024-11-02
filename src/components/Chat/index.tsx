"use client"

import { useChat } from "ai/react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { ScrollArea } from "../ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useScrollToBottom } from "@/hooks/use-scroll-to-bottom"

export default function Chat() {
  const [messagesContainerRef, messagesEndRef] = useScrollToBottom<HTMLDivElement>()

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Вітаємо! Я ваш віртуальний помічник, готовий надати вам швидкі відповіді на ваші запитання. Однак, справжню турботу та професійну допомогу ви отримаєте від наших досвідчених хірургів: Посохова Дмитра Миколайовича та Жовніренка Дмитра Олександровича. Як я можу вам допомогти сьогодні?",
      },
    ],
  })

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(e)
  }

  return (
    <Card className="mx-auto mb-8 w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Віртуальний помічник</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          <div className="mb-4 flex items-start space-x-4">
            <Avatar>
              <AvatarFallback>AI</AvatarFallback>
              <AvatarImage src="/ai-avatar.png" alt="AI Assistant" />
            </Avatar>
            <div className="rounded-lg bg-secondary p-3">
              <p className="text-sm">{messages[0].content}</p>
            </div>
          </div>
          <div ref={messagesContainerRef}>
            {messages.slice(1).map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex items-start space-x-4 ${message.role === "user" ? "justify-end" : ""}`}
              >
                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="/ai-avatar.png" alt="AI Assistant" />
                  </Avatar>
                )}
                <div
                  className={`rounded-lg p-3 ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>You</AvatarFallback>
                    <AvatarImage src="/user-avatar.png" alt="User" />
                  </Avatar>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
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
