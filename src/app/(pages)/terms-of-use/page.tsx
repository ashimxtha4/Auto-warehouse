"use client";

import React, { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import TermsAndReturn from '@/components/terms-and-return';

const Page = () => {

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <TermsAndReturn />
    </Suspense>
  )
}

export default Page;
