import { useEffect, useState } from 'react'

export interface Bot {
  name: string
  slug: string
  id: string
  description: string
  serverCount?: number
  avatar?: string
  site?: string
}

export const useBots = () => {
  const [bots, setBots] = useState<Bot[]>()

  useEffect(() => {
    void fetch('https://jpbbots.org/api/bots')
      .then(async (x) => await x.json())
      .then((bots) => {
        setBots(bots)
      })
  }, [])

  return [bots] as const
}
