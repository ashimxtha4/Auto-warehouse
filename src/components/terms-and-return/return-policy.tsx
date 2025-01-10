import React from 'react';
import { RETURN_POLICY_ITEMS } from '@/constants/return-policy-items';
import { SectionHeader } from '@/utils/section-header';

const ReturnPolicyItem = ({ title, content }: { title: string; content: string }) => (
  <div className="mb-8">
    <h3 className="mb-4 text-xl font-semibold text-primary-main">{title}</h3>
    <p className="text-primary-text">{content}</p>
  </div>
);

const ReturnPolicy = () => (
  <div className="mx-auto my-10 max-w-3xl rounded-lg bg-white p-6 shadow-lg">
    <SectionHeader>Return Policy</SectionHeader>
    {RETURN_POLICY_ITEMS.map((item) => (
      <ReturnPolicyItem key={item.id} title={item.title} content={item.content} />
    ))}
  </div>
);

export default ReturnPolicy;
