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
              className={`w-5 h-5 ${
                index < rating ? 'text-yellow-500' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{review}</p>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-10">Customer Reviews</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ReviewCard
          name="John Doe"
          review="Excellent service! The team was professional and exceeded my expectations."
          rating={5}
        />
        <ReviewCard
          name="Jane Smith"
          review="Quick and efficient service. Highly recommend!"
          rating={4}
        />
        <ReviewCard
          name="Michael Brown"
          review="Affordable pricing and great customer support. Will definitely return!"
          rating={5}
        />
        <ReviewCard
          name="Emily Davis"
          review="Friendly staff and excellent service. Highly satisfied!"
          rating={4}
        />
        <ReviewCard
          name="Chris Wilson"
          review="Super fast response and quality work. Would use again!"
          rating={5}
        />
        <ReviewCard
          name="Sophia Taylor"
          review="The best auto glass service I've experienced. Highly recommend!"
          rating={5}
        />
      </div>
    </div>
  );
};

export default Page;
