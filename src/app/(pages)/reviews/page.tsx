import React, { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import type { Metadata } from 'next';
import { PageMetadata } from '@/utils/meta-data';
import UserReview from '@/components/review';

export const metadata: Metadata = PageMetadata('Reviews', 'Read reviews from our satisfied customers.')

const Page = () => {

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <UserReview />
    </Suspense>
  );
};

export default Page;
