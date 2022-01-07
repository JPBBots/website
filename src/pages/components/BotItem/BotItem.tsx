import {
  Avatar,
  HStack,
  VStack,
  Text,
  Divider,
  Button,
  Wrap,
  Flex
} from '@chakra-ui/react'
import { Bot } from '../../../bots'
import { useMinWidth } from '../../../hooks/useMinWidth'

export default function BotItem({ bot }: { bot: Bot }) {
  const [mobile] = useMinWidth(690)

  const buttons = (
    <>
      {
        <Button
          onClick={() => {
            window.open(`https://top.gg/bot/${bot.id}/invite`)
          }}
        >
          Invite
        </Button>
      }
      {bot.site && (
        <Button onClick={() => window.open(bot.site)}>Visit Site</Button>
      )}
    </>
  )
  return (
    <Wrap
      bg="darker.20"
      w="full"
      p={4}
      pl={6}
      rounded="lg"
      alignContent="center"
    >
      <Flex
        w={mobile ? 'full' : '10%'}
        minW="fit-content"
        justifyContent="center"
        alignSelf="center"
      >
        <Avatar src={bot.avatar} h="100px" w="100px" />
      </Flex>
      <VStack
        w={mobile ? 'full' : '85%'}
        p={2}
        alignItems={mobile ? 'center' : 'flex-start'}
      >
        <HStack w="full" justifyContent={mobile ? 'center' : 'space-between'}>
          <Text textStyle="heading.sm">{bot.name}</Text>
          {!mobile && <HStack justifySelf="flex-end">{buttons}</HStack>}
        </HStack>
        <Divider />
        <VStack w="full" alignItems={mobile ? 'center' : 'flex-start'}>
          <Wrap flexShrink={1} maxW="80vw">
            <Text textStyle="label.md">{bot.description}</Text>
          </Wrap>
          {mobile && <HStack>{buttons}</HStack>}
        </VStack>
      </VStack>
    </Wrap>
  )
}
