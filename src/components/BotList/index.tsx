import { VStack } from '@chakra-ui/react'
import { BotItem } from '@/BotItem'
import { useBots } from 'hooks/useBots'
import { Loading } from '@/Loading'

export function BotList() {
  const [bots] = useBots()
  return (
    <VStack w="full" alignContent="center">
      {!bots && <Loading />}
      {bots?.map((bot) => (
        <BotItem key={bot.id} bot={bot} />
      ))}
    </VStack>
  )
}
