import React from 'react'
import TermsOfUse from './terms-of-use'
import ReturnPolicy from './return-policy'
import { useScrollRef } from '@/hooks/scroll.hooks'

const TermsAndReturn = () => {
    const { ref } = useScrollRef(140)

    return (
        <section ref={ref} className='container mx-auto p-4'>
            <TermsOfUse />
            <ReturnPolicy />
        </section>
    )
}

export default TermsAndReturn