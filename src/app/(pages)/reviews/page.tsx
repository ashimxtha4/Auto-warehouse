import React, { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import type { Metadata } from 'next';
import { PageMetadata } from '@/utils/meta-data';
import UserReview from '@/components/review';

export const metadata: Metadata = PageMetadata('Reviews', 'Read honest customer reviews about our auto glass products and services. See what others have to say and share your own experience.')

const Page = () => {

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <UserReview />
    </Suspense>
  );
};

export default Page;
