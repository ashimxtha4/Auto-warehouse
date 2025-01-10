"use client";

import React from 'react';
import { FaStar } from "react-icons/fa";

type ReviewCardProps = {
  name: string;
  review: string;
  rating: number;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ name, review, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-primary-main">{name}</h3>
        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
              key={index}
              className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-primary-text/40'}`}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{review}</p>
    </div>
  );
};

export default ReviewCard;
