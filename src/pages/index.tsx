import { VStack, Text, Divider } from '@chakra-ui/react'
import { bots } from '../bots'
import BotItem from './components/BotItem/BotItem'

export default function Home() {
  return (
    <VStack w="full" p={4}>
      <Text alignSelf="flex-start" textStyle="heading.xl">
        Bots
      </Text>
      <Divider />
      {bots.map((bot) => (
        <BotItem key={bot.id} bot={bot} />
      ))}
    </VStack>
  )
}
