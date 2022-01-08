import { VStack } from '@chakra-ui/react'
import { bots } from 'bots'
import { BotItem } from '@/BotItem'

export function BotList() {
  return (
    <VStack w="full" alignContent="center">
      {bots.map((bot) => (
        <BotItem key={bot.id} bot={bot} />
      ))}
    </VStack>
  )
}
