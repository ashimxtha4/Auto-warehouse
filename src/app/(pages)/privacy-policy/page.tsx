"use client";

import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { PageMetadata } from '@/utils/meta-data';
// import PrivacyPolicy from '@/components/privacy-policy/privacy-policy';

export const metadata: Metadata = PageMetadata('Privacy Policy');

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {/* <PrivacyPolicy /> */}
      <div className='text-center w-full my-4 text-base text-primary-text font-medium'>Privacy Policy</div>
    </Suspense>
  );
};

export default Page;