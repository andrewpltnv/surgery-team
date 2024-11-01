import { Dialog, Stack, Flex, Heading, Text, Button } from "@sanity/ui"
import { TrashIcon, StarIcon } from "@sanity/icons"
import type { Message } from "./types"

export default function MessageDialog({
  onClose,
  message,
  starMessage,
  deleteMessage,
}: {
  onClose: () => void
  message: Message
  starMessage: (message: Message) => void
  deleteMessage: (message: Message) => void
}) {
  return (
    <Dialog width={1} zOffset={1000} onClose={onClose} header="Message" id="message-dialog">
      <Stack space={5} style={{ padding: "0px 20px 20px 20px" }}>
        <DialogHeading message={message} />
        <DialogContent message={message} />
        <DialogActions onClose={onClose} message={message} starMessage={starMessage} deleteMessage={deleteMessage} />
      </Stack>
    </Dialog>
  )
}

function DialogHeading({ message }: { message: Message }) {
  const { subject } = message

  return (
    <Heading
      size={1}
      style={{
        padding: "24px 0 14px 0",
        borderTop: "1px solid #1b1d26",
        borderBottom: "1px solid #1b1d26",
      }}
    >
      Subject: &nbsp;
      <span style={{ fontWeight: "400" }}>{subject}</span>
    </Heading>
  )
}

function DialogContent({ message }: { message: Message }) {
  const { name, email, fields, text } = message

  return (
    <Flex
      direction="column"
      gap={5}
      style={{
        paddingBottom: "26px",
        borderBottom: "1px solid #1b1d26",
      }}
    >
      <DialogItem name="Name" value={name} />
      <DialogItem name="Email" value={email} />
      {fields?.map((field) => <DialogItem key={field.name} name={field.name} value={field.value} />)}
      <DialogItem name="Text" value={text} />
    </Flex>
  )
}

function DialogItem({ name, value }: { name: string; value: string }) {
  return (
    <Flex justify={"flex-start"} direction="column" gap={4}>
      <Heading style={{ fontSize: "16px" }}>{name}: </Heading>
      <Text style={{ marginTop: "" }} as="pre">
        {value}
      </Text>
    </Flex>
  )
}

function DialogActions({
  message,
  starMessage,
  deleteMessage,
  onClose,
}: {
  message: Message
  starMessage: (message: Message) => void
  deleteMessage: (message: Message) => void
  onClose: () => void
}) {
  const deleteIcon = <TrashIcon />
  const starIcon = <StarIcon style={{ color: "#ecc044" }} />

  const isStarred = message.starred

  return (
    <Flex gap={4}>
      <Button
        fontSize={[2]}
        mode="ghost"
        padding={[3]}
        text={isStarred ? "Unstar" : "Star"}
        onClick={() => starMessage(message)}
        icon={starIcon}
        style={{ flex: "1" }}
      />
      <Button
        fontSize={[2]}
        mode="ghost"
        padding={[3]}
        text="Delete"
        tone="critical"
        icon={deleteIcon}
        onClick={() => deleteMessage(message)}
        style={{ flex: "1" }}
      />
    </Flex>
  )
}
