import {
 Text,
 Button,
 Blockquote,
 Code,
 Em,
 Kbd,
 Link,
 Quote,
 AlertDialog,
 Flex,
 AspectRatio,
 Avatar,
 Badge,
 Callout,
 Card,
 Box,
 Checkbox,
 ContextMenu,
 Dialog,
 DropdownMenu,
 HoverCard,
 Popover,
 RadioGroup,
 TextArea,
 Select,
 Separator,
 Slider,
 Switch,
 Table,
 Tabs,
 TextField,
 Tooltip,
 IconButton,
 ScrollArea,
 Heading,
} from "@radix-ui/themes";

export default function App() {
 return (
  <div
   style={{
    padding: 20,
    maxWidth: 600,
    width: "100%",
   }}
  >
   <Text>Hello from Radix Themes :)</Text>
   <br />
   <br />
   <Button>Let's go</Button>
   <br />
   <br />
   <Blockquote
    style={{
     maxWidth: 400,
    }}
   >
    Perfect typography is certainly the most elusive of all arts. Sculpture in
    stone alone comes near it in obstinacy.
   </Blockquote>
   <br />
   <br />
   <Code>console.log()</Code>
   <br />
   <br />
   <Text>
    We <Em>had</Em> to do something about it.
   </Text>
   <br />
   <br />
   <Kbd>Shift + Tab</Kbd>
   <br />
   <br />
   <Link>The quick brown fox jumps over the lazy dog.</Link>
   <br />
   <br />
   <Text>
    His famous quote,{" "}
    <Quote>Styles come and go. Good design is a language, not a style</Quote>,
    elegantly summs up Massimo’s philosophy of design.
   </Text>
   <br />
   <br />
   <AlertDialog.Root>
    <AlertDialog.Trigger>
     <Button color="red">Revoke access</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content style={{ maxWidth: 450 }}>
     <AlertDialog.Title>Revoke access</AlertDialog.Title>
     <AlertDialog.Description size="2">
      Are you sure? This application will no longer be accessible and any
      existing sessions will be expired.
     </AlertDialog.Description>

     <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
       <Button variant="soft" color="gray">
        Cancel
       </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
       <Button variant="solid" color="red">
        Revoke access
       </Button>
      </AlertDialog.Action>
     </Flex>
    </AlertDialog.Content>
   </AlertDialog.Root>
   <br />
   <br />
   <div
    style={{
     maxWidth: 600,
    }}
   >
    <AspectRatio ratio={16 / 9}>
     <img
      src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
      alt="A house in a forest"
      style={{
       objectFit: "cover",
       width: "100%",
       height: "100%",
       borderRadius: "var(--radius-2)",
      }}
     />
    </AspectRatio>
   </div>
   <br />
   <br />
   <Avatar fallback="A" />
   <br />
   <br />
   <Flex gap="2">
    <Badge color="orange">In progress</Badge>
    <Badge color="blue">In review</Badge>
    <Badge color="green">Complete</Badge>
   </Flex>
   <br />
   <br />
   <Flex align="center" gap="3">
    <Button variant="classic">Edit profile</Button>
    <Button variant="solid">Edit profile</Button>
    <Button variant="soft">Edit profile</Button>
    <Button variant="surface">Edit profile</Button>
    <Button variant="outline">Edit profile</Button>
   </Flex>
   <br />
   <br />
   <Callout.Root>
    <Callout.Icon>
     <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     >
      <path
       d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
       fill="currentColor"
      />
      <path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="currentColor" />
     </svg>
    </Callout.Icon>
    <Callout.Text>
     You will need admin privileges to install and access this application.
    </Callout.Text>
   </Callout.Root>
   <br />
   <br />
   <Card style={{ maxWidth: 240 }}>
    <Flex gap="3" align="center">
     <Avatar
      size="3"
      src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
      radius="full"
      fallback="T"
     />
     <Box>
      <Text as="div" size="2" weight="bold">
       Teodros Girmay
      </Text>
      <Text as="div" size="2" color="gray">
       Engineering
      </Text>
     </Box>
    </Flex>
   </Card>
   <br />
   <br />
   <Text as="label" size="2">
    <Flex gap="2">
     <Checkbox defaultChecked /> Agree to Terms and Conditions
    </Flex>
   </Text>
   <br />
   <br />
   <div
    style={{
     width: "300px",
     height: "300px",
     background: "lightgray",
     borderRadius: "var(--radius-2)",
    }}
   >
    <ContextMenu.Root
     style={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
     }}
    >
     <ContextMenu.Trigger>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
       <path
        d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7ZM12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9ZM12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15Z"
        fill="currentColor"
       />
      </svg>
     </ContextMenu.Trigger>
     <ContextMenu.Content>
      <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
      <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
      <ContextMenu.Separator />
      <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

      <ContextMenu.Sub>
       <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
       <ContextMenu.SubContent>
        <ContextMenu.Item>Move to project…</ContextMenu.Item>
        <ContextMenu.Item>Move to folder…</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>Advanced options…</ContextMenu.Item>
       </ContextMenu.SubContent>
      </ContextMenu.Sub>

      <ContextMenu.Separator />
      <ContextMenu.Item>Share</ContextMenu.Item>
      <ContextMenu.Item>Add to favorites</ContextMenu.Item>
      <ContextMenu.Separator />
      <ContextMenu.Item shortcut="⌘ ⌫" color="red">
       Delete
      </ContextMenu.Item>
     </ContextMenu.Content>
    </ContextMenu.Root>
   </div>

   <br />
   <br />
   <Dialog.Root>
    <Dialog.Trigger>
     <Button>Edit profile</Button>
    </Dialog.Trigger>

    <Dialog.Content style={{ maxWidth: 450 }}>
     <Dialog.Title>Edit profile</Dialog.Title>
     <Dialog.Description size="2" mb="4">
      Make changes to your profile.
     </Dialog.Description>

     <Flex direction="column" gap="3">
      <label>
       <Text as="div" size="2" mb="1" weight="bold">
        Name
       </Text>
       <TextField.Input
        defaultValue="Freja Johnsen"
        placeholder="Enter your full name"
       />
      </label>
      <label>
       <Text as="div" size="2" mb="1" weight="bold">
        Email
       </Text>
       <TextField.Input
        defaultValue="freja@example.com"
        placeholder="Enter your email"
       />
      </label>
     </Flex>

     <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
       <Button variant="soft" color="gray">
        Cancel
       </Button>
      </Dialog.Close>
      <Dialog.Close>
       <Button>Save</Button>
      </Dialog.Close>
     </Flex>
    </Dialog.Content>
   </Dialog.Root>
   <br />
   <br />
   <DropdownMenu.Root>
    <DropdownMenu.Trigger>
     <Button variant="soft" size="2">
      Options
     </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content size="2">
     <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
     <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
     <DropdownMenu.Separator />
     <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

     <DropdownMenu.Separator />
     <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
      Delete
     </DropdownMenu.Item>
    </DropdownMenu.Content>
   </DropdownMenu.Root>
   <br />
   <br />
   <Text>
    Follow{" "}
    <HoverCard.Root>
     <HoverCard.Trigger>
      <Link href="https://twitter.com/radix_ui" target="_blank">
       @radix_ui
      </Link>
     </HoverCard.Trigger>
     <HoverCard.Content>
      <Flex gap="4">
       <Avatar
        size="3"
        fallback="R"
        radius="full"
        src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
       />
       <Box>
        <Heading size="3" as="h3">
         Radix
        </Heading>
        <Text as="div" size="2" color="gray">
         @radix_ui
        </Text>

        <Text as="div" size="2" style={{ maxWidth: 300 }} mt="3">
         React components, icons, and colors for building high-quality,
         accessible UI.
        </Text>
       </Box>
      </Flex>
     </HoverCard.Content>
    </HoverCard.Root>{" "}
    for updates.
   </Text>
   <br />
   <br />
   <Popover.Root>
    <Popover.Trigger>
     <Button variant="soft">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
       <path
        d="M8 2C4.68629 2 2 3.68629 2 7C2 10.3137 4.68629 12.9999 8 12.9999C11.3137 12.9999 13.9999 10.3137 13.9999 7C13.9999 3.68629 11.3137 2 8 2ZM8 11.9999C5.23858 11.9999 3.00012 9.76143 3.00012 7C3.00012 4.23858 5.23858 2.00012 8 2.00012C10.7614 2.00012 13 4.23858 13 7C13 9.76143 10.7614 11.9999 8 11.9999Z"
        fill="currentColor"
       />
       <path
        d="M8 4C7.44772 4 7 4.44772 7 5V7C7 7.55228 7.44772 8 8 8C8.55228 8 9 7.55228 9 7V5C9 4.44772 8.55228 4 8 4Z"
        fill="currentColor"
       />
       <path
        d="M8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9Z"
        fill="currentColor"
       />
      </svg>
      Comment
     </Button>
    </Popover.Trigger>
    <Popover.Content style={{ width: 360 }}>
     <Flex gap="3">
      <Avatar
       size="2"
       src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
       fallback="A"
       radius="full"
      />
      <Box grow="1">
       <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
       <Flex gap="3" mt="3" justify="between">
        <Flex align="center" gap="2" asChild>
         <Text as="label" size="2">
          <Checkbox />
          <Text>Send to group</Text>
         </Text>
        </Flex>

        <Popover.Close>
         <Button size="1">Comment</Button>
        </Popover.Close>
       </Flex>
      </Box>
     </Flex>
    </Popover.Content>
   </Popover.Root>
   <br />
   <br />
   <RadioGroup.Root defaultValue="1">
    <Flex gap="2" direction="column">
     <Text as="label" size="2">
      <Flex gap="2">
       <RadioGroup.Item value="1" /> Default
      </Flex>
     </Text>
     <Text as="label" size="2">
      <Flex gap="2">
       <RadioGroup.Item value="2" /> Comfortable
      </Flex>
     </Text>
     <Text as="label" size="2">
      <Flex gap="2">
       <RadioGroup.Item value="3" /> Compact
      </Flex>
     </Text>
    </Flex>
   </RadioGroup.Root>
   <br />
   <br />
   <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>
    <Box p="2" pr="8">
     <Heading size="4" mb="2" trim="start">
      Principles of the typographic craft
     </Heading>
     <Flex direction="column" gap="4">
      <Text as="p">
       Three fundamental aspects of typography are legibility, readability, and
       aesthetics. Although in a non-technical sense “legible” and “readable”
       are often used synonymously, typographically they are separate but
       related concepts.
      </Text>

      <Text as="p">
       Legibility describes how easily individual characters can be
       distinguished from one another. It is described by Walter Tracy as “the
       quality of being decipherable and recognisable”. For instance, if a “b”
       and an “h”, or a “3” and an “8”, are difficult to distinguish at small
       sizes, this is a problem of legibility.
      </Text>

      <Text as="p">
       Typographers are concerned with legibility insofar as it is their job to
       select the correct font to use. Brush Script is an example of a font
       containing many characters that might be difficult to distinguish. The
       selection of cases influences the legibility of typography because using
       only uppercase letters (all-caps) reduces legibility.
      </Text>
     </Flex>
    </Box>
   </ScrollArea>
   <br />
   <br />
   <Select.Root defaultValue="apple">
    <Select.Trigger />
    <Select.Content>
     <Select.Group>
      <Select.Label>Fruits</Select.Label>
      <Select.Item value="orange">Orange</Select.Item>
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="grape" disabled>
       Grape
      </Select.Item>
     </Select.Group>
     <Select.Separator />
     <Select.Group>
      <Select.Label>Vegetables</Select.Label>
      <Select.Item value="carrot">Carrot</Select.Item>
      <Select.Item value="potato">Potato</Select.Item>
     </Select.Group>
    </Select.Content>
   </Select.Root>
   <br />
   <br />
   <Text size="2">
    Tools for building high-quality, accessible UI.
    <Separator my="3" size="4" />
    <Flex gap="3" align="center">
     Themes
     <Separator orientation="vertical" />
     Primitives
     <Separator orientation="vertical" />
     Icons
     <Separator orientation="vertical" />
     Colors
    </Flex>
   </Text>
   <br />
   <br />
   <Slider defaultValue={[50]} />
   <br />
   <br />
   <Text as="label" size="2">
    <Flex gap="2">
     <Switch defaultChecked /> Sync settings
    </Flex>
   </Text>
   <br />
   <br />
   <Table.Root>
    <Table.Header>
     <Table.Row>
      <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
     </Table.Row>
    </Table.Header>

    <Table.Body>
     <Table.Row>
      <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
      <Table.Cell>danilo@example.com</Table.Cell>
      <Table.Cell>Developer</Table.Cell>
     </Table.Row>

     <Table.Row>
      <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
      <Table.Cell>zahra@example.com</Table.Cell>
      <Table.Cell>Admin</Table.Cell>
     </Table.Row>

     <Table.Row>
      <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
      <Table.Cell>jasper@example.com</Table.Cell>
      <Table.Cell>Developer</Table.Cell>
     </Table.Row>
    </Table.Body>
   </Table.Root>
   <br />
   <br />
   <Tabs.Root defaultValue="account">
    <Tabs.List>
     <Tabs.Trigger value="account">Account</Tabs.Trigger>
     <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
     <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
    </Tabs.List>

    <Box px="4" pt="3" pb="2">
     <Tabs.Content value="account">
      <Text size="2">Make changes to your account.</Text>
     </Tabs.Content>

     <Tabs.Content value="documents">
      <Text size="2">Access and update your documents.</Text>
     </Tabs.Content>

     <Tabs.Content value="settings">
      <Text size="2">Edit your profile or update contact information.</Text>
     </Tabs.Content>
    </Box>
   </Tabs.Root>
   <br />
   <br />
   <TextArea placeholder="Reply to comment…" />
   <br />
   <br />
   <TextField.Root>
    <TextField.Slot>
     <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     >
      <path
       fillRule="evenodd"
       clipRule="evenodd"
       d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9ZM12 13C15.3137 13 18 14.6863 18 18H6C6 14.6863 8.68629 13 12 13ZM12 4C7.58172 4 4 7.58172 4 12H2C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12H20C20 7.58172 16.4183 4 12 4Z"
       fill="currentColor"
      />
     </svg>
    </TextField.Slot>
    <TextField.Input placeholder="Search the docs…" />
   </TextField.Root>
   <br />
   <br />
   <Tooltip content="Add to library">
    <IconButton radius="full">
     <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     >
      <path
       fillRule="evenodd"
       clipRule="evenodd"
       d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9ZM12 13C15.3137 13 18 14.6863 18 18H6C6 14.6863 8.68629 13 12 13ZM12 4C7.58172 4 4 7.58172 4 12H2C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12H20C20 7.58172 16.4183 4 12 4Z"
       fill="currentColor"
      />
     </svg>
    </IconButton>
   </Tooltip>
  </div>
 );
}
