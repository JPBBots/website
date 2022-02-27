import {
  Divider,
  VStack,
  Text,
  Spinner,
  Button,
  HStack
} from '@chakra-ui/react'
import { HomeButton } from '@/HomeButton'
import { useBots } from 'hooks/useBots'
import { useState } from 'react'

export default function Controller() {
  const [selected, setSelected] = useState<string | null>(null)
  const [bots] = useBots()

  return (
    <VStack w="full" p={4}>
      <Text
        alignSelf="flex-start"
        justifyContent="center"
        textStyle="heading.xl"
      >
        <HomeButton /> Controller
      </Text>
      <Divider />
      <HStack>
        {!bots && <Spinner w="100px" h="100px" />}
        {bots?.map((x) => (
          <Button
            variant={selected === x.slug ? 'primary' : 'default'}
            onClick={async () =>
              setSelected(selected === x.slug ? null : x.slug)
            }
          >
            {x.name}
          </Button>
        ))}
      </HStack>
      {selected && bots && (
        <VStack>
          <Divider />
          <Text>{bots.find((x) => x.id === selected)?.name}</Text>
          <Button>
            <Text>Change IP</Text>
          </Button>
          <Button>
            <Text>Restart</Text>
          </Button>
          <Button>
            <Text>Die</Text>
          </Button>
        </VStack>
      )}
      <Divider />
      <Button>
        <Text>Restart All</Text>
      </Button>
    </VStack>
  )
}
