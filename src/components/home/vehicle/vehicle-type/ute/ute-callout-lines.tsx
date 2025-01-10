'use client'

import { Button } from '@/components/ui/button'
import { useCallOutLines } from '@/hooks/callout-lines.hook'
import React from 'react'

const UteCalloutLines = () => {
  const { handleCallOutLines } = useCallOutLines()

  return (
    <>
      {/* Windscreen */}
      <div className='absolute'>
        <span className='circle-dot left-[10px] top-[97px]' />
        <span className='vehicle-line left-[13px] top-[55px] !h-[45px] w-[2px]' />
        <span className='vehicle-line left-[13px] top-[56px] w-[80px] md:w-[160px]' />
        <Button
          onClick={() => handleCallOutLines('FRONT Windscreen')}
          className='callout-line-title left-[86px] top-[38px] md:left-[144px] md:top-[42px]'
        >
          Windscreen
        </Button>
      </div>
      {/* Front Left door */}
      <div className='absolute'>
        <span className='circle-dot -left-[52px] top-[134px] md:-left-[62px] md:top-[168px]' />
        <span className='vehicle-line -left-[98px] top-[137px] w-[50px] md:-left-[174px] md:top-[171px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('FRONT DOOR LH')}
          className='callout-line-title -left-[185px] top-[120px] md:-left-[260px] md:top-[158px]'
        >
          Left Front Door
        </Button>
      </div>
      {/* Right Front door */}
      <div className='absolute'>
        <span className='circle-dot left-[45px] top-[134px] md:left-[54px] md:top-[168px]' />
        <span className='vehicle-line left-[48px] top-[137px] w-[50px] md:left-[56px] md:top-[171px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('FRONT DOOR RH')}
          className='callout-line-title left-[86px] top-[120px] md:left-[144px] md:top-[156px]'
        >
          Right Front Door
        </Button>
      </div>
      {/* Left Back door */}
      <div className='absolute'>
        <span className='circle-dot -left-[50px] top-[185px] md:-left-[62px] md:top-[220px]' />
        <span className='vehicle-line -left-[98px] top-[188px] w-[50px] md:-left-[174px] md:top-[223px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('REAR DOOR LH')}
          className='callout-line-title -left-[185px] top-[170px] md:-left-[257px] md:top-[210px]'
        >
          Left Back Door
        </Button>
      </div>
      {/* Right Back door */}
      <div className='absolute'>
        <span className='circle-dot left-[42px] top-[185px] md:left-[54px] md:top-[220px]' />
        <span className='vehicle-line left-[42px] top-[188px] w-[50px] md:left-[56px] md:top-[223px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('REAR DOOR RH')}
          className='callout-line-title left-[86px] top-[170px] md:left-[144px] md:top-[210px]'
        >
          Right Back Door
        </Button>
      </div>
    </>
  )
}

export default UteCalloutLines
