import { Loading } from '@/Loading'
import { Avatar, VStack, Text, HStack, Button, Box } from '@chakra-ui/react'
import { useBots } from 'hooks/useBots'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { HomeButton } from '@/HomeButton'

export default function BotPage() {
  const router = useRouter()
  const [bots] = useBots()

  const botName = router.query.bot as string
  const bot = bots?.find((x) => x.slug === botName)

  if (bots && !bot) {
    void router.push('/')
  }

  if (!bot) {
    return <Loading />
  }

  if (bot.site) {
    void router.push(bot.site)

    return <Loading />
  }

  return (
    <VStack p="10px">
      <Box w="full">
        <Text
          alignSelf="flex-start"
          justifyContent="center"
          textStyle="heading.xl"
        >
          <HomeButton />
        </Text>
      </Box>
      <VStack pt="160px">
        <Avatar src={bot.avatar} w="200px" />
        <Text textStyle="heading.xl" fontSize="65px">
          {bot.name}
        </Text>
        <Text maxW="30vw" minW="300px" textAlign="center">
          {bot.description}
        </Text>
        <HStack>
          <NextLink href={`/${bot.slug}/invite`}>
            <Button>Invite</Button>
          </NextLink>
          <NextLink href="/support">
            <Button>Support</Button>
          </NextLink>
        </HStack>
      </VStack>
    </VStack>
  )
}
