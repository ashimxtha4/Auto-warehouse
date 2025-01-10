'use client'

import { Button } from '@/components/ui/button'
import { useCallOutLines } from '@/hooks/callout-lines.hook'
import React from 'react'

const VanCalloutLines = () => {
  const { handleCallOutLines } = useCallOutLines()

  return (
    <>
      {/* Windscreen */}
      <div className='absolute'>
        <span className='circle-dot left-[10px] top-[80px] md:top-[97px]' />
        <span className='vehicle-line left-[13px] top-[38px] !h-[45px] w-[2px] md:top-[55px]' />
        <span className='vehicle-line left-[13px] top-[38px] w-[80px] md:top-[56px] md:w-[160px]' />
        <Button
          onClick={() => handleCallOutLines('FRONT Windscreen')}
          className='callout-line-title left-[86px] top-[20px] md:left-[144px] md:top-[42px]'
        >
          Windscreen
        </Button>
      </div>
      {/* Front Left door */}
      <div className='absolute'>
        <span className='circle-dot -left-[54px] top-[84px] md:-left-[76px] md:top-[120px]' />
        <span className='vehicle-line -left-[98px] top-[86px] w-[50px] md:-left-[195px] md:top-[123px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('FRONT DOOR LH')}
          className='callout-line-title -left-[185px] top-[64px] md:-left-[260px] md:top-[115px]'
        >
          Left Front Door
        </Button>
      </div>
      {/* Right Front door */}
      <div className='absolute'>
        <span className='circle-dot left-[46px] top-[84px] md:left-[66px] md:top-[120px]' />
        <span className='vehicle-line left-[48px] top-[86px] w-[50px] md:left-[68px] md:top-[123px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('FRONT DOOR RH')}
          className='callout-line-title left-[86px] top-[64px] md:left-[144px] md:top-[115px]'
        >
          Right Front Door
        </Button>
      </div>
      {/* Left Back door */}
      <div className='absolute'>
        <span className='circle-dot -left-[54px] top-[116px] md:-left-[74px] md:top-[158px]' />
        <span className='vehicle-line -left-[98px] top-[118px] w-[50px] md:-left-[192px] md:top-[161px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('REAR DOOR LH')}
          className='callout-line-title -left-[185px] top-[104px] md:-left-[257px] md:top-[148px]'
        >
          Left Back Door
        </Button>
      </div>
      {/* Right Back door */}
      <div className='absolute'>
        <span className='circle-dot left-[46px] top-[116px] md:left-[66px] md:top-[158px]' />
        <span className='vehicle-line left-[48px] top-[118px] w-[50px] md:left-[68px] md:top-[161px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('REAR DOOR RH')}
          className='callout-line-title left-[86px] top-[104px] md:left-[144px] md:top-[148px]'
        >
          Right Back Door
        </Button>
      </div>
      {/* left back vent */}
      <div className='absolute'>
        <span className='circle-dot -left-[56px] top-[176px] md:-left-[74px] md:top-[238px]' />
        <span className='vehicle-line -left-[100px] top-[178px] w-[50px] md:-left-[192px] md:top-[241px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('left back vent')}
          className='callout-line-title -left-[185px] top-[162px] md:-left-[254px] md:top-[226px]'
        >
          Left Back Vent
        </Button>
      </div>
      {/* right back vent */}
      <div className='absolute'>
        <span className='circle-dot left-[46px] top-[176px] md:left-[67px] md:top-[238px]' />
        <span className='vehicle-line left-[48px] top-[178px] w-[50px] md:left-[69px] md:top-[241px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('right back vent')}
          className='callout-line-title left-[86px] top-[162px] md:left-[144px] md:top-[226px]'
        >
          Right Back Vent
        </Button>
      </div>
      {/* left back quarter */}
      <div className='absolute'>
        <span className='circle-dot -left-[56px] top-[238px] md:-left-[75px] md:top-[310px]' />
        <span className='vehicle-line -left-[100px] top-[240px] w-[50px] md:-left-[190px] md:top-[313px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('left back quarter')}
          className='callout-line-title -left-[185px] top-[222px] md:-left-[276px] md:top-[298px]'
        >
          Left Back Quarter
        </Button>
      </div>
      {/* right back quarter */}
      <div className='absolute'>
        <span className='circle-dot left-[46px] top-[238px] md:left-[66px] md:top-[310px]' />
        <span className='vehicle-line left-[48px] top-[240px] w-[50px] md:left-[68px] md:top-[313px] md:w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('right back quarter')}
          className='callout-line-title left-[86px] top-[222px] md:left-[144px] md:top-[298px]'
        >
          Right Back Quarter
        </Button>
      </div>
    </>
  )
}

export default VanCalloutLines

{
  /* <>
      {vanCallouts.map(item => (
        <div className='absolute' key={item.href}>
          <span className={cn('circle-dot', item.circleDotClass)} />
          {item?.verticleLineClass && (
            <span className={cn('vehicle-line', item.verticleLineClass)} />
          )}
          <span className={cn('vehicle-line', item.horizontalLineClass)} />
          <Button
            href={pathname + `?part=${item.href}`}
            className={cn('callout-line-title', item.linkClass)}
          >
            {item.label}
          </Button>
        </div>
      ))}
    </>*/
}
