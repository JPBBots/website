import { useEffect, useState } from 'react'

export interface Bot {
  name: string
  slug: string
  id: string
  description: string
  serverCount: number
  avatar?: string
  site?: string
  invite: `/${string}` | number
}

export const convertInvite = (bot: Bot) => {
  if (typeof bot.invite === 'string' && bot.site) {
    return `${bot.site}${bot.invite}`
  } else {
    return `https://discord.com/oauth2/authorize?client_id=${bot.id}&scope=bot+applications.commands&permissions=${bot.invite}`
  }
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
