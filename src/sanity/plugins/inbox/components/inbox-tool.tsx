import { useClient } from "sanity"
import { ToastProvider, useToast, Spinner, Card, Text, Container, Stack, Flex } from "@sanity/ui"
import { useListeningQuery } from "sanity-plugin-utils"
import MessageList from "./message-list"
import type { Message } from "./types"

export default function InboxTool() {
  const toast = useToast()
  const client = useClient({ apiVersion: "2021-06-07" })

  const { data, loading, error } = useListeningQuery<Message[]>(`*[_type == 'message'] | order(_createdAt desc)`, {
    initialValue: [
      {
        name: "",
        email: "",
        subject: "",
        _id: "",
        starred: false,
        read: false,
        text: "",
        fields: [
          {
            name: "string",
            value: "name",
          },
        ],
      },
    ],
  })

  const messages = data as Message[]

  async function deleteMessage(message: Message) {
    try {
      await client.delete(message._id).then(() => {
        toast.push({
          status: "success",
          title: "Message Deleted",
        })
      })
    } catch (error) {
      toast.push({
        status: "error",
        title: "Failed to Delete Message",
      })
    }
  }

  async function starMessage(message: Message) {
    const isStarred = !message.starred

    try {
      await client
        .patch(message._id)
        .set({ starred: isStarred })
        .commit()
        .then(() => {
          toast.push({
            status: "success",
            title: `Message ${message.starred ? "Unstarred" : "Starred"}`,
          })
        })
    } catch (error) {
      toast.push({
        status: "error",
        title: "Failed to Star Message",
      })
    }
  }

  async function readMessage(message: Message) {
    try {
      await client.patch(message._id).set({ read: true }).commit()
    } catch (error) {
      toast.push({
        status: "error",
        title: "Failed to Load Message",
      })
    }
  }

  if (loading) return <LoadingView />
  if (error) return <ErrorView />

  return (
    <ToastProvider>
      <MessageList
        messages={messages}
        deleteMessage={(id: string) => {
          const message = messages.find((message) => message._id === id)
          if (message) deleteMessage(message)
        }}
        starMessage={(id: string) => {
          const message = messages.find((message) => message._id === id)
          if (message) starMessage(message)
        }}
        readMessage={(id: string) => {
          const message = messages.find((message) => message._id === id)
          if (message) readMessage(message)
        }}
      />
    </ToastProvider>
  )
}

function LoadingView() {
  return (
    <Container style={{ marginTop: "60px" }}>
      <Card padding={4} radius={2} shadow={1} tone="positive">
        <Flex gap={4} align="center" justify="center">
          <Text align="center" size={3}>
            Loading Messages
          </Text>
          <Spinner muted />
        </Flex>
      </Card>
    </Container>
  )
}

function ErrorView() {
  return (
    <Container style={{ marginTop: "60px" }}>
      <Card padding={4} radius={2} shadow={1} tone="critical">
        <Stack space={2}>
          <Text align="center" size={3}>
            Error Loading Messages
          </Text>
          <Text align="center" size={2}>
            Please try again later
          </Text>
        </Stack>
      </Card>
    </Container>
  )
}
