"use client";

import React, { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import FAQAccordion from '@/components/faq/accordion';
import { SectionDescription, SectionHeader } from '@/utils/section-header';
import { useScrollRef } from '@/hooks/scroll.hooks';

const Page = () => {
    const { ref } = useScrollRef(140);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <section ref={ref} className="container max-w-xl mx-auto my-10">
        <SectionHeader>Frequently Asked Questions</SectionHeader>
        <SectionDescription>
          Find answers to the most common questions about our services.
        </SectionDescription>
        <FAQAccordion />
      </section>
    </Suspense>
  );
};

export default Page;
