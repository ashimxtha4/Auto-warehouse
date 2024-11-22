'use client'

import { Button } from '@/components/ui/button'
import { useCallOutLines } from '@/hooks/callout-lines.hook'
import React from 'react'

const UteTruckCalloutLines = () => {
  const { handleCallOutLines } = useCallOutLines()

  return (
    <>
      {/* WindScreen */}
      <div className='absolute'>
        <span className='circle-dot left-[10px] top-[140px]' />
        <span className='vehicle-line left-[13px] top-[100px] !h-[45px] w-[2px]' />
        <span className='vehicle-line left-[13px] top-[100px] w-[160px]' />
        <Button
          onClick={() => handleCallOutLines('FRONT WINDSCREEN')}
          className='callout-line-title left-[144px] top-[86px]'
        >
          WindScreen
        </Button>
      </div>
      {/* Front Left door */}
      <div className='absolute'>
        <span className='circle-dot -left-[68px] top-[185px]' />
        <span className='vehicle-line -left-[181px] top-[188px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('FRONT DOOR LH')}
          className='callout-line-title -left-[260px] top-[174px]'
        >
          Left Front Door
        </Button>
      </div>
      {/* Right Front door */}
      <div className='absolute'>
        <span className='circle-dot left-[56px] top-[185px]' />
        <span className='vehicle-line left-[58px] top-[188px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('FRONT DOOR RH')}
          className='callout-line-title left-[144px] top-[174px]'
        >
          Right Front Door
        </Button>
      </div>
      {/* Left Back door */}
      <div className='absolute'>
        <span className='circle-dot -left-[68px] top-[233px]' />
        <span className='vehicle-line -left-[181px] top-[236px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('REAR DOOR LH')}
          className='callout-line-title -left-[257px] top-[222px]'
        >
          Left Back Door
        </Button>
      </div>
      {/* Right Back door */}
      <div className='absolute'>
        <span className='circle-dot left-[56px] top-[233px]' />
        <span className='vehicle-line left-[58px] top-[236px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('REAR DOOR RH')}
          className='callout-line-title left-[144px] top-[222px]'
        >
          Right Back Door
        </Button>
      </div>
      {/* left back vent */}
      <div className='absolute'>
        <span className='circle-dot -left-[70px] top-[273px]' />
        <span className='vehicle-line -left-[186px] top-[276px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('left back vent')}
          className='callout-line-title -left-[254px] top-[262px]'
        >
          Left Back Vent
        </Button>
      </div>
      {/* right back vent */}
      <div className='absolute'>
        <span className='circle-dot left-[58px] top-[273px]' />
        <span className='vehicle-line left-[60px] top-[276px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('right back door')}
          className='callout-line-title left-[144px] top-[262px]'
        >
          Right Back Vent
        </Button>
      </div>
      {/* left back quarter */}
      <div className='absolute'>
        <span className='circle-dot -left-[66px] top-[324px]' />
        <span className='vehicle-line -left-[186px] top-[326px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('left back quarter')}
          className='callout-line-title -left-[276px] top-[312px]'
        >
          Left Back Quarter
        </Button>
      </div>
      {/* right back quarter */}
      <div className='absolute'>
        <span className='circle-dot left-[58px] top-[324px]' />
        <span className='vehicle-line left-[60px] top-[326px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('right back quarter')}
          className='callout-line-title left-[144px] top-[312px]'
        >
          Right Back Quarter
        </Button>
      </div>
    </>
  )
}

export default UteTruckCalloutLines
