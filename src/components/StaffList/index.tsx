import { Loading } from '@/Loading'
import { Text, VStack, Divider, Wrap } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { AdminUser, StaffInfo } from './StaffInfo'

const SECTIONS = [
  {
    name: 'Team',
    ranks: [
      'Founder',
      'Co-Owner',
      'Designer',
      'Developer',
      'Communication Director',
      'Admin'
    ]
  },
  {
    name: 'Support',
    ranks: ['Support Team']
  }
]

export function StaffList() {
  const [admins, setAdmins] = useState<AdminUser[]>([])
  useEffect(() => {
    void fetch('https://jpbbots.org/api/admins')
      .then(async (x) => await x.json())
      .then((admins) => setAdmins(admins))
  }, [])

  return (
    <VStack>
      <VStack align="left">
        {admins.length ? (
          SECTIONS.map((section) => (
            <VStack align="flex-start" key={section.name}>
              <Text textStyle="heading.xl">{section.name}</Text>
              <Divider color="lighter.5" />
              <Wrap gridGap={2}>
                {admins
                  .filter((x) => section.ranks.includes(x.rank))
                  .map((admin) => (
                    <StaffInfo admin={admin} />
                  ))}
              </Wrap>
            </VStack>
          ))
        ) : (
          <Loading />
        )}
      </VStack>
    </VStack>
  )
}
