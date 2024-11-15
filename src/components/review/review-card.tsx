"use client";

import React from 'react';
import { Star } from 'lucide-react';

type ReviewCardProps = {
  name: string;
  review: string;
  rating: number;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ name, review, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-green-700">{name}</h3>
        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{review}</p>
    </div>
  );
};

export default ReviewCard;
