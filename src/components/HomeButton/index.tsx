import { Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FaHome } from 'react-icons/fa'

export function HomeButton() {
  const router = useRouter()

  return (
    <Icon
      as={FaHome}
      onClick={async () => await router.push('/')}
      color="lighter.20"
      cursor="pointer"
      _hover={{
        color: 'lighter.40'
      }}
      _focus={{
        outlineColor: 'outline'
      }}
      _active={{
        color: 'lighter.50'
      }}
    />
  )
}
