export interface Bot {
  name: string
  id: string
  description: string
  avatar?: string
  site?: string
}

export const bots: Bot[] = [
  {
    name: 'Censor Bot',
    id: '394019914157129728',
    avatar: 'https://static.jpbbots.org/censorbot.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac sapien ut tellus ornare mattis a eu quam. Sed dapibus velit sed maximus vestibulum. Pellentesque luctus metus id dui mollis aliquet. Integer eget blandit neque. Nullam viverra elit a sagittis elementum',
    site: 'https://censor.bot'
  },
  {
    name: 'Easy Applications',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac sapien ut tellus ornare mattis a eu quam. Sed dapibus velit sed maximus vestibulum. Pellentesque luctus metus id dui mollis aliquet. Integer eget blandit neque. Nullam viverra elit a sagittis elementum',
    id: '737539715854761994',
    avatar:
      'https://cdn.discordapp.com/avatars/737539715854761994/920f947be6cf92308fc8231eb4b775d1.png',
    site: 'https://easyapps.bot'
  },
  {
    name: 'Weather',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac sapien ut tellus ornare mattis a eu quam. Sed dapibus velit sed maximus vestibulum. Pellentesque luctus metus id dui mollis aliquet. Integer eget blandit neque. Nullam viverra elit a sagittis elementum',
    id: '523260365950287906',
    avatar:
      'https://cdn.discordapp.com/avatars/523260365950287906/219b490d83595b8374cfeaf76ccbd440.png'
  },
  {
    name: 'Frog Bot',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac sapien ut tellus ornare mattis a eu quam. Sed dapibus velit sed maximus vestibulum. Pellentesque luctus metus id dui mollis aliquet. Integer eget blandit neque. Nullam viverra elit a sagittis elementum',
    id: '814660831472123934',
    avatar:
      'https://cdn.discordapp.com/avatars/814660831472123934/6476b6002842dafd4cd8135baf0aaa63.png'
  },
  {
    name: 'TI-84',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac sapien ut tellus ornare mattis a eu quam. Sed dapibus velit sed maximus vestibulum. Pellentesque luctus metus id dui mollis aliquet. Integer eget blandit neque. Nullam viverra elit a sagittis elementum',
    id: '550823464198471691',
    avatar:
      'https://cdn.discordapp.com/avatars/550823464198471691/d03cb837fd661b65fbfde3a540b43fe5.png?size=128'
  },
  {
    name: 'Famous Birthdays',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac sapien ut tellus ornare mattis a eu quam. Sed dapibus velit sed maximus vestibulum. Pellentesque luctus metus id dui mollis aliquet. Integer eget blandit neque. Nullam viverra elit a sagittis elementum',
    id: '540387160772050954',
    avatar:
      'https://cdn.discordapp.com/avatars/540387160772050954/08fa80037bf2d1bd13c276ad671c0cf4.png'
  }
]
