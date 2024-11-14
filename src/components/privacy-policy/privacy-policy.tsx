"use client";

import React from 'react';
import { PRIVACY_POLICY_ITEMS } from '@/constants/privacy-policy-items';
import { SectionHeader } from '@/utils/section-header';

type PrivacyPolicyItemProps = {
  title: string;
  content: string;
};

const PrivacyPolicyItem: React.FC<PrivacyPolicyItemProps> = ({ title, content }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-green-700 mb-4">{title}</h3>
    <p className="text-gray-700">{content}</p>
  </div>
);

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <SectionHeader>Privacy Policy</SectionHeader>
      {PRIVACY_POLICY_ITEMS.map((item) => (
        <PrivacyPolicyItem key={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default PrivacyPolicy;
