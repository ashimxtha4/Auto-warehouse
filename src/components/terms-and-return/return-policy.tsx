"use client";

import { RETURN_POLICY_ITEMS } from '@/constants/return-policy-items';
import { SectionHeader } from '@/utils/section-header';
import React from 'react';

const ReturnPolicyItem = ({ title, content }: { title: string; content: string }) => (
  <div className="mb-8">
    <h3 className="mb-4 text-xl font-semibold text-green-700">{title}</h3>
    <p className="text-gray-700">{content}</p>
  </div>
);

const ReturnPolicy = () => (
  <div className="container mx-auto my-10 max-w-3xl rounded-lg bg-white p-6 shadow-lg">
    <SectionHeader>Return Policy</SectionHeader>
    {RETURN_POLICY_ITEMS.map((item) => (
      <ReturnPolicyItem key={item.id} title={item.title} content={item.content} />
    ))}
  </div>
);

export default ReturnPolicy;
