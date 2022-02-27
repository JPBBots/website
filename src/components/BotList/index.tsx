import { Spinner, VStack } from '@chakra-ui/react'
import { BotItem } from '@/BotItem'
import { useBots } from 'hooks/useBots'

export function BotList() {
  const [bots] = useBots()
  return (
    <VStack w="full" alignContent="center">
      {!bots && <Spinner w="100px" h="100px" />}
      {bots?.map((bot) => (
        <BotItem key={bot.id} bot={bot} />
      ))}
    </VStack>
  )
}
