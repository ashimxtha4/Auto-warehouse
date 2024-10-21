export type vanCalloutsProps = {
  href: string
  circleDotClass: string
  horizontalLineClass: string
  verticleLineClass?: string
  linkClass: string
  label: string
}

export const vanCallouts: vanCalloutsProps[] = [
  {
    href: `right-mirror`,
    circleDotClass: 'left-[142px] top-[178px]',
    horizontalLineClass: 'left-[143px] top-[181px] w-[153px]',
    linkClass: 'left-[13rem] top-[10.2rem]',
    label: 'Right Mirror'
  },
  {
    href: `left-mirror`,
    circleDotClass: '-left-[150px] top-[178px]',
    horizontalLineClass: '-left-[250px] top-[181px] w-[100px]',
    linkClass: '-left-[19rem] top-[10.2rem]',
    label: 'Left Mirror'
  },
  {
    href: `front-windshield`,
    circleDotClass: 'left-[70px] top-[194px]',
    horizontalLineClass: 'left-[73px] top-[122px] w-[210px]',
    verticleLineClass: '!h-[80px] w-[2px] left-[73px] top-[121px]',
    linkClass: 'left-[13rem] top-[104px]',
    label: 'Front WindShield'
  },
  {
    href: `front-left-door-1`,
    circleDotClass: '-left-[127px] top-[229px]',
    horizontalLineClass: '-left-[225px] top-[231px] w-[100px]',
    linkClass: '-left-[21.8rem] top-[13.4rem]',
    label: 'Front Left Door 1'
  },
  {
    href: `front-right-door-1`,
    circleDotClass: 'left-[120px] top-[229px]',
    horizontalLineClass: 'left-[121px] top-[232px] w-[170px]',
    linkClass: 'left-[13rem] top-[13.4rem]',
    label: 'Front Right Door 1'
  },
  {
    href: `front-left-door-2`,
    circleDotClass: '-left-[127px] top-[280px]',
    horizontalLineClass: '-left-[225px] top-[283px] w-[100px]',
    linkClass: '-left-[21.8rem] top-[16.6rem]',
    label: 'Front Left Door 2'
  },
  {
    href: `front-right-door-2`,
    circleDotClass: 'left-[120px] top-[280px]',
    horizontalLineClass: 'left-[121px] top-[283px] w-[170px]',
    linkClass: 'left-[13rem] top-[16.6rem]',
    label: 'Front Right Door 2'
  },
  {
    href: `back-left-door-1`,
    circleDotClass: '-left-[128px] top-[428px]',
    horizontalLineClass: '-left-[276px] top-[430px] w-[150px]',
    linkClass: '-left-[20.8rem] top-[25.9rem]',
    label: 'Back Left Door 1'
  },
  {
    href: `back-right-door-1`,
    circleDotClass: 'left-[120px] top-[428px]',
    horizontalLineClass: 'left-[124px] top-[431px] w-[170px]',
    linkClass: 'left-[13rem] top-[25.8rem]',
    label: 'Back Right Door 1'
  },
  {
    href: `back-left-door-2`,
    circleDotClass: '-left-[128px] top-[528px]',
    horizontalLineClass: '-left-[276px] top-[530px] w-[150px]',
    linkClass: '-left-[20.8rem] top-[32.2rem]',
    label: 'Back left door 2'
  },
  {
    href: `back-right-door-2`,
    circleDotClass: 'left-[120px] top-[528px]',
    horizontalLineClass: 'left-[124px] top-[530px] w-[170px]',
    linkClass: 'left-[13rem] top-[32.2rem]',
    label: 'Back right door 2'
  },
  {
    href: `back-windshield`,
    circleDotClass: 'left-[4px] top-[704px]',
    horizontalLineClass: 'left-[7px] top-[744px] w-[210px]',
    verticleLineClass: 'left-[7px] top-[704px] !h-[40px] w-[2px]',
    linkClass: 'left-[13rem] top-[45.5rem]',
    label: 'Back WindShield'
  }
]
