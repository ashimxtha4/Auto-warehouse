"use client";

import React, { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import ReviewList from '@/components/review/review-list';
import { useScrollRef } from '@/hooks/scroll.hooks';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews | Auto Glass Shop',
  description: 'Read reviews from our satisfied customers.',
  category: 'Auto Glass Shop',
  icons: {
    icon: '/favicon.ico',
  },
}

const Page = () => {
  const { ref } = useScrollRef(140);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <section ref={ref} className="container mx-auto p-4">
        <ReviewList />
      </section>
    </Suspense>
  );
};

export default Page;
