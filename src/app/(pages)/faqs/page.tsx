import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { PageMetadata } from '@/utils/meta-data';
import FAQ from '@/components/faq';

export const metadata: Metadata = PageMetadata('FAQS', 'Find answers to the most common questions about our services.');

const Page = () => {

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <FAQ />
    </Suspense>
  );
};

export default Page;
