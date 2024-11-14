"use client";

import React, { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import FAQAccordion from '@/components/faq/accordion';
import { SectionDescription, SectionHeader } from '@/utils/section-header';

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="container max-w-xl mx-auto my-10">
        <SectionHeader>Frequently Asked Questions</SectionHeader>
        <SectionDescription>
          Find answers to the most common questions about our services.
        </SectionDescription>
        <FAQAccordion />
      </div>
    </Suspense>
  );
};

export default Page;
