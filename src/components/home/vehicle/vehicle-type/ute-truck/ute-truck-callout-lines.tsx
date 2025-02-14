'use client'

import { Button } from '@/components/ui/button'
import { useCallOutLines } from '@/hooks/callout-lines.hook'
import React from 'react'

const UteTruckCalloutLines = () => {
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
          className='callout-line-title left-[75px] top-[42px] md:left-[144px] md:top-[86px]'
        >
          Windscreen
        </Button>
      </div>
      {/* Front Left door */}
      <div className='absolute'>
        <span className='circle-dot -left-[52px] top-[134px] md:-left-[68px] md:top-[185px]' />
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
        <span className='circle-dot left-[42px] top-[134px] md:left-[56px] md:top-[185px]' />
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
        <span className='circle-dot -left-[49px] top-[170px] md:-left-[68px] md:top-[233px]' />
        <span className='vehicle-line -left-[98px] top-[173px] w-[50px] md:-left-[181px] md:top-[236px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('REAR DOOR LH')}
          className='callout-line-title -left-[185px] top-[152px] md:-left-[257px] md:top-[222px]'
        >
          Left Back Door
        </Button>
      </div>
      {/* Right Back door */}
      <div className='absolute'>
        <span className='circle-dot left-[40px] top-[170px] md:left-[56px] md:top-[233px]' />
        <span className='vehicle-line left-[42px] top-[173px] w-[50px] md:left-[58px] md:top-[236px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('REAR DOOR RH')}
          className='callout-line-title left-[75px] top-[152px] md:left-[144px] md:top-[222px]'
        >
          Right Back Door
        </Button>
      </div>
      {/* left back vent */}
      <div className='absolute'>
        <span className='circle-dot -left-[55px] top-[200px] md:-left-[70px] md:top-[273px]' />
        <span className='vehicle-line -left-[99px] top-[203px] w-[50px] md:-left-[186px] md:top-[276px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('left back vent')}
          className='callout-line-title -left-[185px] top-[192px] md:-left-[254px] md:top-[262px]'
        >
          Left Back Vent
        </Button>
      </div>
      {/* right back vent */}
      <div className='absolute'>
        <span className='circle-dot left-[45px] top-[200px] md:left-[58px] md:top-[273px]' />
        <span className='vehicle-line left-[50px] top-[203px] w-[50px] md:left-[60px] md:top-[276px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('right back door')}
          className='callout-line-title left-[75px] top-[192px] md:left-[144px] md:top-[262px]'
        >
          Right Back Vent
        </Button>
      </div>
      {/* left back quarter */}
      <div className='absolute'>
        <span className='circle-dot -left-[52px] top-[236px] md:-left-[66px] md:top-[324px]' />
        <span className='vehicle-line -left-[99px] top-[238px] w-[50px] md:-left-[186px] md:top-[326px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('left back quarter')}
          className='callout-line-title -left-[185px] top-[230px] md:-left-[276px] md:top-[312px]'
        >
          Left Back Quarter
        </Button>
      </div>
      {/* right back quarter */}
      <div className='absolute'>
        <span className='circle-dot left-[45px] top-[236px] md:left-[58px] md:top-[324px]' />
        <span className='vehicle-line left-[50px] top-[238px] w-[50px] md:left-[60px] md:top-[326px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('right back quarter')}
          className='callout-line-title left-[70px] top-[230px] md:left-[144px] md:top-[312px]'
        >
          Right Back Quarter
        </Button>
      </div>
      {/* rear Windscreen */}
      <div className='absolute'>
        <span className='circle-dot left-[10px] top-[270px] md:top-[368px]' />
        <span className='vehicle-line left-[13px] top-[270px] !h-[30px] w-[2px] md:hidden' />
        <span className='vehicle-line left-[13px] top-[300px] w-[80px] md:top-[371px] md:w-[160px]' />
        <Button
          onClick={() => handleCallOutLines('rear windscreen')}
          className='callout-line-title left-[75px] top-[280px] md:left-[144px] md:top-[353px]'
        >
          Rear Windscreen
        </Button>
      </div>
    </>
  )
}

export default UteTruckCalloutLines
