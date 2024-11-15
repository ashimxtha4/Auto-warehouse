"use client";

import React from 'react';
import ReviewCard from './review-card';
import { SectionDescription, SectionHeader } from '@/utils/section-header';

const reviews = [
  { name: "John Doe", review: "Excellent service! The team was professional and exceeded my expectations.", rating: 5 },
  { name: "Jane Smith", review: "Quick and efficient service. Highly recommend!", rating: 4 },
  { name: "Michael Brown", review: "Affordable pricing and great customer support. Will definitely return!", rating: 5 },
  { name: "Emily Davis", review: "Friendly staff and excellent service. Highly satisfied!", rating: 4 },
  { name: "Chris Wilson", review: "Super fast response and quality work. Would use again!", rating: 5 },
  { name: "Sophia Taylor", review: "The best auto glass service I've experienced. Highly recommend!", rating: 5 }
];

const ReviewList: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <SectionHeader>Customer Reviews</SectionHeader>
      <SectionDescription>See what our satisfied customers have to say about our services</SectionDescription>
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            review={review.review}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
