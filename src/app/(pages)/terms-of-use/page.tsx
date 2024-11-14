"use client";

import React, { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import TermsOfUse from '@/components/terms-and-return/terms-of-use';
import ReturnPolicy from '@/components/terms-and-return/return-policy';

const Page = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <div className="container mx-auto p-4">
      <TermsOfUse />
      <ReturnPolicy />
    </div>
  </Suspense>
);

export default Page;
