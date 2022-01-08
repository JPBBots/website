import { Divider, VStack, Text } from '@chakra-ui/react'
import { BotList } from '@/BotList'
import { HomeButton } from '@/HomeButton'

export default function List() {
  return (
    <VStack w="full" p={4}>
      <Text
        alignSelf="flex-start"
        justifyContent="center"
        textStyle="heading.xl"
      >
        <HomeButton /> Bots
      </Text>
      <Divider />
      <BotList />
    </VStack>
  )
}
