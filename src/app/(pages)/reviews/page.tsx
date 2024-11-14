"use client";

import React, { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import ReviewList from '@/components/review/review-list';

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="container mx-auto p-4">
        <ReviewList />
      </div>
    </Suspense>
  );
};

export default Page;
