import { VStack, HStack, Avatar, Text, Tooltip } from '@chakra-ui/react'

function calcDate(date1: Date, date2: Date) {
  const diff = Math.floor(date1.getTime() - date2.getTime())
  const day = 1000 * 60 * 60 * 24

  const days = Math.floor(diff / day)
  let months = Math.floor(days / 30)
  const years = Math.floor(months / 12)

  months -= years * 12

  let time = ''

  if (years) time += `${years} year${years > 1 ? 's' : ''}`
  if (months)
    time += `${years ? ' & ' : ''}${months} month${months > 1 ? 's' : ''}`
  if (!months && !years)
    time += `${Math.floor(days) || 1} day${days > 1 ? 's' : ''}`

  return time
}

const toColor = (num: number): string => '#' + num.toString(16).padStart(6, '0')

export interface AdminUser {
  id: string
  tag: string
  since?: string
  rankColor: number
  rank: string
  name: string
  avatar: string
}

export interface StaffInfoProps {
  admin: AdminUser
}

export function StaffInfo({ admin }: StaffInfoProps) {
  return (
    <VStack
      rounded="lg"
      bg="darker.20"
      align="center"
      key={admin.id}
      justify="space-between"
      w={400}
      p={4}
      maxW={400}
      flexGrow={1}
    >
      <HStack w="full" spacing={4}>
        <Avatar src={admin.avatar} boxSize={70} />

        <VStack align="left">
          <HStack spacing={5}>
            <Text color={toColor(admin.rankColor)} textStyle="heading.sm">
              {admin.name}
            </Text>

            <Text fontSize="16px" fontWeight="300">
              {admin.tag}
            </Text>
          </HStack>

          <HStack>
            <Text textStyle="label.md">{admin.rank}</Text>

            {admin.since && (
              <Tooltip
                label={`${admin.name} has been with us for ${calcDate(
                  new Date(),
                  new Date(admin.since)
                )}`}
                color="lighter.80"
                hasArrow
                bg="darker.100"
                p={2}
                borderRadius="md"
              >
                <Text color="brand.100" textStyle="label.sm">
                  {admin.since}
                </Text>
              </Tooltip>
            )}
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  )
}
