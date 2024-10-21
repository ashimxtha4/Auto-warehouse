'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const VanCalloutLines = () => {
  const pathname = usePathname()

  return (
    <>
      {/* right mirror */}
      <div className='absolute'>
        <span className='circle-dot left-[142px] top-[178px]' />
        <span className='vehicle-line left-[143px] top-[181px] w-[153px]' />
        <Link
          href={pathname + '?part=right-mirror'}
          className='callout-line-title left-[13rem] top-[10.2rem]'
        >
          Right Mirror
        </Link>
      </div>
      {/* left mirror */}
      <div className='absolute'>
        <span className='circle-dot -left-[150px] top-[178px]' />
        <span className='vehicle-line -left-[250px] top-[181px] w-[100px]' />
        <Link
          href={pathname + '?part=left-mirror'}
          className='callout-line-title -left-[19rem] top-[10.2rem]'
        >
          Left Mirror
        </Link>
      </div>
      {/* Front windshield */}
      <div className='absolute'>
        <span className='circle-dot left-[70px] top-[194px]' />
        <span className='vehicle-line left-[73px] top-[122px] !h-[80px] w-[2px]' />
        <span className='vehicle-line left-[73px] top-[121px] w-[210px]' />
        <Link
          href={pathname + '?part=front-windshield'}
          className='callout-line-title left-[13rem] top-[104px]'
        >
          Front WindShield
        </Link>
      </div>
      {/* left headlight */}
      {/* <div className='absolute'>
        <span className='circle-dot -left-[120px] top-[95px]' />
        <span className='vehicle-line -left-[299px] top-[97px] w-[180px]' />
        <Link
          href={pathname + '?part=left-headlight'}
          className='absolute -left-[20.8rem] top-[5.2rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Left Headlight
        </Link>
      </div> */}
      {/* right headlight */}
      {/* <div className='absolute'>
        <span className='circle-dot left-[105px] top-[95px]' />
        <span className='vehicle-line left-[112px] top-[97px] w-[180px]' />
        <Link
          href={pathname + '?part=right-headlight'}
          className='absolute left-[18rem] top-[5.1rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Right Headlight
        </Link>
      </div> */}
      {/* Front Left door 1 */}
      <div className='absolute'>
        <span className='circle-dot -left-[127px] top-[229px]' />
        <span className='vehicle-line -left-[225px] top-[231px] w-[100px]' />
        <Link
          href={pathname + '?part=front-left-door'}
          className='callout-line-title -left-[21.8rem] top-[13.4rem]'
        >
          Front Left Door 1
        </Link>
      </div>
      {/* Front Right door 1 */}
      <div className='absolute'>
        <span className='circle-dot left-[120px] top-[229px]' />
        <span className='vehicle-line left-[121px] top-[232px] w-[170px]' />
        <Link
          href={pathname + '?part=front-right-door'}
          className='callout-line-title left-[13rem] top-[13.4rem]'
        >
          Front Right Door 1
        </Link>
      </div>
      {/* Front Left door 2 */}
      <div className='absolute'>
        <span className='circle-dot -left-[127px] top-[280px]' />
        <span className='vehicle-line -left-[225px] top-[283px] w-[100px]' />
        <Link
          href={pathname + '?part=front-left-door'}
          className='callout-line-title -left-[21.8rem] top-[16.6rem]'
        >
          Front Left Door 2
        </Link>
      </div>
      {/* Front Right door 2 */}
      <div className='absolute'>
        <span className='circle-dot left-[120px] top-[280px]' />
        <span className='vehicle-line left-[121px] top-[283px] w-[170px]' />
        <Link
          href={pathname + '?part=front-right-door'}
          className='callout-line-title left-[13rem] top-[16.6rem]'
        >
          Front Right Door 2
        </Link>
      </div>
      {/* Back Left door 1*/}
      <div className='absolute'>
        <span className='circle-dot -left-[128px] top-[428px]' />
        <span className='vehicle-line -left-[276px] top-[430px] w-[150px]' />
        <Link
          href={pathname + '?part=back-left-door'}
          className='callout-line-title -left-[20.8rem] top-[25.9rem]'
        >
          Back Left Door 1
        </Link>
      </div>
      {/* Back Right door 1 */}
      <div className='absolute'>
        <span className='circle-dot left-[120px] top-[428px]' />
        <span className='vehicle-line left-[124px] top-[431px] w-[170px]' />
        <Link
          href={pathname + '?part=back-right-door'}
          className='callout-line-title left-[13rem] top-[25.8rem]'
        >
          Back Right Door 1
        </Link>
      </div>
      {/* Back left door 2 */}
      <div className='absolute'>
        <span className='circle-dot -left-[128px] top-[528px]' />
        <span className='vehicle-line -left-[276px] top-[530px] w-[150px]' />
        <Link
          href={pathname + '?part=back-left-vent'}
          className='callout-line-title -left-[20.8rem] top-[32.2rem]'
        >
          Back left door 2
        </Link>
      </div>
      {/* Back right door 2 */}
      <div className='absolute'>
        <span className='circle-dot left-[120px] top-[528px]' />
        <span className='vehicle-line left-[124px] top-[530px] w-[170px]' />
        <Link
          href={pathname + '?part=back-right-vent'}
          className='callout-line-title left-[13rem] top-[32.2rem]'
        >
          Back right door 2
        </Link>
      </div>
      {/* Back windshield */}
      <div className='absolute'>
        <span className='circle-dot left-[4px] top-[704px]' />
        <span className='vehicle-line left-[7px] top-[704px] !h-[40px] w-[2px]' />
        <span className='vehicle-line left-[7px] top-[744px] w-[210px]' />
        <Link
          href={pathname + '?part=back-windshield'}
          className='callout-line-title left-[13rem] top-[45.5rem]'
        >
          Back WindShield
        </Link>
      </div>
    </>
  )
}

export default VanCalloutLines
