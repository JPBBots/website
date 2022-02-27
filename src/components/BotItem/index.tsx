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
import { Bot, convertInvite } from 'hooks/useBots'
import { useMinWidth } from '../../hooks/useMinWidth'

import NextLink from 'next/link'

export function BotItem({ bot }: { bot: Bot }) {
  const [mobile] = useMinWidth(850)

  const buttons = (
    <>
      {
        <Button
          onClick={() => {
            window.open(convertInvite(bot))
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
        <NextLink href={`/${bot.slug}`}>
          <HStack
            cursor="pointer"
            w="full"
            justifyContent={mobile ? 'center' : 'space-between'}
          >
            <Text textStyle="heading.sm">
              {bot.name} (
              {(100 * Math.round(bot.serverCount / 100)).toLocaleString()}{' '}
              servers)
            </Text>
            {!mobile && <HStack justifySelf="flex-end">{buttons}</HStack>}
          </HStack>
        </NextLink>
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
