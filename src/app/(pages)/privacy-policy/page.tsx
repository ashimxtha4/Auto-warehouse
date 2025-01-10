"use client";

import React, { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import PrivacyPolicy from '@/components/privacy-policy/privacy-policy';

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <PrivacyPolicy />
    </Suspense>
  );
};

export default Page;