import { VStack, Text, Divider, HStack, Button } from '@chakra-ui/react'
import { useMinWidth } from 'hooks/useMinWidth'

import { BotList } from '@/BotList'
import { StaffList } from '@/StaffList'

import { useRouter } from 'next/router'
import { useBots } from 'hooks/useBots'

export default function Home() {
  const [mobiled] = useMinWidth(950)
  const router = useRouter()
  const [bots] = useBots()

  return (
    <VStack margin={mobiled ? '30px 10px' : '30px 50px'}>
      <HStack
        w="full"
        justifyContent={mobiled ? 'center' : 'left'}
        gridGap={mobiled ? 0 : 200}
      >
        <VStack align="left" ml={10}>
          <Text textStyle="heading.xl">JPBBots</Text>
          <Text textStyle="heading.sm">Creating the bots you love</Text>
          <Text textStyle="label.sm">
            Serving{' '}
            {bots?.reduce((a, b) => a + b.serverCount!, 0).toLocaleString()}{' '}
            communities
          </Text>
          <HStack>
            <Button
              variant="primary"
              onClick={() => window.open('/join', '_blank')}
            >
              Join Us
            </Button>
            <Button onClick={async () => await router.push('/list')}>
              View bots
            </Button>
          </HStack>
        </VStack>
      </HStack>
      <Divider />
      <BotList />
      <Divider />
      <StaffList />
    </VStack>
  )
}
