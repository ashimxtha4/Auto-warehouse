'use client'

import { Button } from '@/components/ui/button'
import { useCallOutLines } from '@/hooks/callout-lines.hook'
import React from 'react'

const UteCalloutLines = () => {
  const { handleCallOutLines } = useCallOutLines()

  return (
    <>
      {/* WindScreen */}
      <div className='absolute'>
        <span className='circle-dot left-[10px] top-[97px]' />
        <span className='vehicle-line left-[13px] top-[55px] !h-[45px] w-[2px]' />
        <span className='vehicle-line left-[13px] top-[56px] w-[160px]' />
        <Button
          onClick={() => handleCallOutLines('FRONT WINDSCREEN')}
          className='callout-line-title left-[144px] top-[42px]'
        >
          WindScreen
        </Button>
      </div>
      {/* Front Left door */}
      <div className='absolute'>
        <span className='circle-dot -left-[62px] top-[168px]' />
        <span className='vehicle-line -left-[174px] top-[171px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('FRONT DOOR LH')}
          className='callout-line-title -left-[260px] top-[158px]'
        >
          Left Front Door
        </Button>
      </div>
      {/* Right Front door */}
      <div className='absolute'>
        <span className='circle-dot left-[54px] top-[168px]' />
        <span className='vehicle-line left-[56px] top-[171px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('FRONT DOOR RH')}
          className='callout-line-title left-[144px] top-[156px]'
        >
          Right Front Door
        </Button>
      </div>
      {/* Left Back door */}
      <div className='absolute'>
        <span className='circle-dot -left-[62px] top-[220px]' />
        <span className='vehicle-line -left-[174px] top-[223px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('REAR DOOR LH')}
          className='callout-line-title -left-[257px] top-[210px]'
        >
          Left Back Door
        </Button>
      </div>
      {/* Right Back door */}
      <div className='absolute'>
        <span className='circle-dot left-[54px] top-[220px]' />
        <span className='vehicle-line left-[56px] top-[223px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('REAR DOOR RH')}
          className='callout-line-title left-[144px] top-[210px]'
        >
          Right Back Door
        </Button>
      </div>
    </>
  )
}

export default UteCalloutLines
