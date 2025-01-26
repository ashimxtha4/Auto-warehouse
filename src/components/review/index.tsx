'use client'

import React from 'react'
import { useScrollRef } from '@/hooks/scroll.hooks';
import ReviewList from './review-list';

const UserReview = () => {
    const { ref } = useScrollRef(140);

    return (
        <section ref={ref} className="container mx-auto p-4">
            <ReviewList />
        </section>
    )
}

export default UserReview