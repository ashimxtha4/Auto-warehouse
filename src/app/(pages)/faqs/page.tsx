import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { PageMetadata } from '@/utils/meta-data';
import FAQ from '@/components/faq';

export const metadata: Metadata = PageMetadata('FAQS', 'Find answers to commonly asked questions about our auto glass products, ordering process, shipping, and more. Get the information you need quickly.');

const Page = () => {

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <FAQ />
    </Suspense>
  );
};

export default Page;
