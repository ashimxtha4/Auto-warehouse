import React from 'react';
import { PRIVACY_POLICY_ITEMS } from '@/constants/privacy-policy-items';
import { SectionHeader } from '@/utils/section-header';
import { useScrollRef } from '@/hooks/scroll.hooks';

type PrivacyPolicyItemProps = {
  title: string;
  content: string;
};

const PrivacyPolicyItem = ({ title, content }: PrivacyPolicyItemProps) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-primary-main mb-4">{title}</h3>
    <p className="text-primary-text">{content}</p>
  </div>
);

const PrivacyPolicy = () => {
  const { ref } = useScrollRef(140);

  return (
    <section ref={ref} className="container max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <SectionHeader>Privacy Policy</SectionHeader>
      {PRIVACY_POLICY_ITEMS.map((item) => (
        <PrivacyPolicyItem key={item.id} title={item.title} content={item.content} />
      ))}
    </section>
  );
};

export default PrivacyPolicy;
