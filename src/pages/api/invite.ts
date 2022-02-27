import { Bot, convertInvite } from 'hooks/useBots'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function Invite(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bot: Bot = await fetch(
    `https://jpbbots.org/api/bots/${req.query.slug}`
  ).then(async (x) => await x.json())

  res.redirect(convertInvite(bot))
}
