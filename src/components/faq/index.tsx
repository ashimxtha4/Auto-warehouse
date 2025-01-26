'use client'

import React from 'react'
import { useScrollRef } from '@/hooks/scroll.hooks';
import { SectionDescription, SectionHeader } from '@/utils/section-header';
import FAQAccordion from './accordion';

const FAQ = () => {

    const { ref } = useScrollRef(140);

    return (
        <section ref={ref} className="container max-w-xl mx-auto my-10">
            <SectionHeader>Frequently Asked Questions</SectionHeader>
            <SectionDescription>
                Find answers to the most common questions about our services.
            </SectionDescription>
            <FAQAccordion />
        </section>
    )
}

export default FAQ