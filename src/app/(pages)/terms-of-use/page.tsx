import React, { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import type { Metadata } from 'next';
import { PageMetadata } from '@/utils/meta-data';
// import TermsAndReturn from '@/components/terms-and-return';

export const metadata: Metadata = PageMetadata('Terms of Use & Return Policy', 'Review our terms and conditions to understand your rights and obligations when using our website and purchasing our auto glass products.');

const Page = () => {

  return (
    <Suspense fallback={<LoadingSpinner />}>
      {/* <TermsAndReturn /> */}
      <div className='text-center w-full my-4 text-base text-primary-text font-medium'>Terms of Use & Return Policy</div>
    </Suspense>
  )
}

export default Page;
