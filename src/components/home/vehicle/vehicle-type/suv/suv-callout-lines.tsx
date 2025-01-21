'use client'

import { Button } from '@/components/ui/button'
import { useCallOutLines } from '@/hooks/callout-lines.hook'
import React from 'react'

const SuvCalloutLines = () => {
  const { handleCallOutLines } = useCallOutLines()

  return (
    <>
      {/* Windscreen */}
      <div className='absolute'>
        <span className='circle-dot left-[10px] top-[100px] md:top-[140px]' />
        <span className='vehicle-line left-[13px] top-[60px] !h-[45px] w-[2px] md:top-[100px]' />
        <span className='vehicle-line left-[13px] top-[60px] w-[80px] md:top-[100px] md:w-[160px]' />
        <Button
          onClick={() => handleCallOutLines('FRONT Windscreen')}
          className='callout-line-title left-[75px] top-[44px] md:left-[144px] md:top-[86px]'
        >
          Windscreen
        </Button>
      </div>
      {/* Front Left door */}
      <div className='absolute'>
        <span className='circle-dot -left-[49px] top-[134px] md:-left-[68px] md:top-[185px]' />
        <span className='vehicle-line -left-[98px] top-[137px] w-[50px] md:-left-[181px] md:top-[188px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('FRONT DOOR LH')}
          className='callout-line-title -left-[185px] top-[111px] md:-left-[260px] md:top-[174px]'
        >
          Left Front Door
        </Button>
      </div>
      {/* Right Front door */}
      <div className='absolute'>
        <span className='circle-dot left-[40px] top-[134px] md:left-[55px] md:top-[185px]' />
        <span className='vehicle-line left-[42px] top-[137px] w-[50px] md:left-[58px] md:top-[188px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('FRONT DOOR RH')}
          className='callout-line-title left-[75px] top-[111px] md:left-[144px] md:top-[174px]'
        >
          Right Front Door
        </Button>
      </div>
      {/* Left Back door */}
      <div className='absolute'>
        <span className='circle-dot -left-[49px] top-[170px] md:-left-[64px] md:top-[244px]' />
        <span className='vehicle-line -left-[98px] top-[173px] w-[50px] md:-left-[181px] md:top-[247px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('REAR DOOR LH')}
          className='callout-line-title -left-[185px] top-[152px] md:-left-[257px] md:top-[234px]'
        >
          Left Back Door
        </Button>
      </div>
      {/* Right Back door */}
      <div className='absolute'>
        <span className='circle-dot left-[40px] top-[170px] md:left-[55px] md:top-[244px]' />
        <span className='vehicle-line left-[42px] top-[173px] w-[50px] md:left-[58px] md:top-[247px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('REAR DOOR RH')}
          className='callout-line-title left-[75px] top-[152px] md:left-[144px] md:top-[232px]'
        >
          Right Back Door
        </Button>
      </div>
      {/* left back vent */}
      <div className='absolute'>
        <span className='circle-dot -left-[49px] top-[213px] md:-left-[64px] md:top-[285px]' />
        <span className='vehicle-line -left-[99px] top-[216px] w-[50px] md:-left-[181px] md:top-[288px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('left back vent')}
          className='callout-line-title -left-[185px] top-[198px] md:-left-[254px] md:top-[274px]'
        >
          Left Back Vent
        </Button>
      </div>
      {/* right back vent */}
      <div className='absolute'>
        <span className='circle-dot left-[37px] top-[213px] md:left-[55px] md:top-[285px]' />
        <span className='vehicle-line left-[40px] top-[216px] w-[50px] md:left-[58px] md:top-[288px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('right back vent')}
          className='callout-line-title left-[75px] top-[198px] md:left-[144px] md:top-[274px]'
        >
          Right Back Vent
        </Button>
      </div>
    </>
  )
}

export default SuvCalloutLines
