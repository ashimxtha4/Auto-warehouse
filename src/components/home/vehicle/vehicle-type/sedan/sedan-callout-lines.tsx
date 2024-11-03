import React from 'react'
import { Button } from '@/components/ui/button'
import { useCallOutLines } from '@/hooks/callout-lines.hook'

const SedanCallOutLines = () => {
  const { handleCallOutLines } = useCallOutLines()
  return (
    <>
      {/* WindScreen */}
      <div className='absolute'>
        <span className='circle-dot left-[10px] top-[140px]' />
        <span className='vehicle-line left-[13px] top-[100px] !h-[50px] w-[2px]' />
        <span className='vehicle-line left-[13px] top-[100px] w-[160px]' />
        <Button
          onClick={() => handleCallOutLines('wind screen')}
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
          onClick={() => handleCallOutLines('left front door')}
          className='callout-line-title -left-[260px] top-[174px]'
        >
          Left Front Door
        </Button>
      </div>
      {/* Right Front door */}
      <div className='absolute'>
        <span className='circle-dot left-[59px] top-[185px]' />
        <span className='vehicle-line left-[62px] top-[188px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('right front door')}
          className='callout-line-title left-[144px] top-[174px]'
        >
          Right Front Door
        </Button>
      </div>
      {/* Left Back door */}
      <div className='absolute'>
        <span className='circle-dot -left-[68px] top-[244px]' />
        <span className='vehicle-line -left-[181px] top-[247px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('left back door')}
          className='callout-line-title -left-[257px] top-[234px]'
        >
          Left Back Door
        </Button>
      </div>
      {/* Right Back door */}
      <div className='absolute'>
        <span className='circle-dot left-[58px] top-[244px]' />
        <span className='vehicle-line left-[61px] top-[247px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('right back door')}
          className='callout-line-title left-[144px] top-[232px]'
        >
          Right Back Door
        </Button>
      </div>
      {/* left back vent */}
      <div className='absolute'>
        <span className='circle-dot -left-[68px] top-[285px]' />
        <span className='vehicle-line -left-[181px] top-[288px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('left back vent')}
          className='callout-line-title -left-[254px] top-[274px]'
        >
          Left Back Vent
        </Button>
      </div>
      {/* right back vent */}
      <div className='absolute'>
        <span className='circle-dot left-[59px] top-[285px]' />
        <span className='vehicle-line left-[62px] top-[288px] w-[120px]' />
        <Button
          onClick={() => handleCallOutLines('right back vent')}
          className='callout-line-title left-[144px] top-[274px]'
        >
          Right Back Vent
        </Button>
      </div>
    </>
  )
}

export default SedanCallOutLines
