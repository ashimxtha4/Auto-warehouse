"use client";

import React, { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-green-700 mb-6">Privacy Policy</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-700 mb-4">1. Introduction</h3>
        <p className="text-gray-700">
          We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-700 mb-4">2. Information We Collect</h3>
        <p className="text-gray-700">
          We may collect personal information that you provide directly to us, such as when you create an account, fill out a form, or make a purchase. This may include your name, email address, phone number, and payment details.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-700 mb-4">3. How We Use Your Information</h3>
        <p className="text-gray-700">
          We use your information to provide, maintain, and improve our services, process transactions, communicate with you, and for marketing purposes with your consent.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-700 mb-4">4. Sharing Your Information</h3>
        <p className="text-gray-700">
          We do not share your personal information with third parties except as necessary to provide our services, comply with legal obligations, or protect our rights.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-700 mb-4">5. Data Security</h3>
        <p className="text-gray-700">
          We implement appropriate security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is 100% secure.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-700 mb-4">6. Cookies and Tracking Technologies</h3>
        <p className="text-gray-700">
          We use cookies and similar tracking technologies to enhance your experience on our website. You can adjust your browser settings to refuse cookies, but this may affect your use of some features.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-700 mb-4">7. Your Rights</h3>
        <p className="text-gray-700">
          You have the right to access, update, or delete your personal information at any time. Please contact us if you have any concerns regarding your data.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-700 mb-4">8. Changes to This Policy</h3>
        <p className="text-gray-700">
          We may update this Privacy Policy periodically to reflect changes to our practices or legal requirements. We will notify you of any significant changes.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-green-700 mb-4">9. Contact Us</h3>
        <p className="text-gray-700">
          If you have any questions or concerns about our Privacy Policy, please contact us at support@example.com.
        </p>
      </div>
    </div>
  );
};

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
