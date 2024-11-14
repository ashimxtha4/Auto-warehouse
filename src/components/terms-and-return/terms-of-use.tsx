"use client";

import { TERMS_OF_USE_ITEMS } from '@/constants/terms-of-use-items';
import { SectionHeader } from '@/utils/section-header';
import React from 'react';

const TermsOfUseItem = ({ title, content }: { title: string; content: string }) => (
  <div className="mb-8">
    <h3 className="mb-4 text-xl font-semibold text-green-700">{title}</h3>
    <p className="text-gray-700">{content}</p>
  </div>
);

const TermsOfUse = () => (
  <div className="container mx-auto my-10 max-w-3xl rounded-lg bg-white p-6 shadow-lg">
    <SectionHeader>Terms of Use</SectionHeader>
    {TERMS_OF_USE_ITEMS.map((item) => (
      <TermsOfUseItem key={item.id} title={item.title} content={item.content} />
    ))}
  </div>
);

export default TermsOfUse;
