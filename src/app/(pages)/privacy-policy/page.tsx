"use client";

import React, { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import PrivacyPolicy from '@/components/privacy-policy/privacy-policy';

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="container mx-auto p-4">
        <PrivacyPolicy />
      </div>
    </Suspense>
  );
};

export default Page;
