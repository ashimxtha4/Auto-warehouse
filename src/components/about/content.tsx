"use client";

import React from 'react';
import { CheckCircle, Shield, Clock, MapPin, Wrench, Mail } from 'lucide-react';
import { ABOUT_US_ITEMS } from '@/constants/about-us-items';
import { SectionDescription, SectionHeader } from '@/utils/section-header';

const Content = () => {
  const { introduction, commitment, whyChooseUs, services, contact } = ABOUT_US_ITEMS;

  return (
    <div className="container mx-auto my-10 max-w-4xl rounded-lg bg-white p-6 shadow-xl">
      <SectionHeader>About Us</SectionHeader>
      <SectionDescription>
        Since <span className="font-semibold text-green-700">{introduction.year}</span>, {introduction.description}
      </SectionDescription>

      <section className="mb-12 rounded-lg bg-gray-100 p-6 shadow-inner">
        <SectionHeader>Our Commitment</SectionHeader>
        <blockquote className="mb-4 border-l-4 border-green-700 pl-4 text-xl italic text-gray-800">
          “{commitment.quote}”
        </blockquote>
        <p className="text-gray-700">{commitment.description}</p>
      </section>

      <section className="mb-12">
        <SectionHeader>Why Choose Us?</SectionHeader>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon === "MapPin" ? MapPin :
              item.icon === "Wrench" ? Wrench :
                item.icon === "Shield" ? Shield :
                  item.icon === "CheckCircle" ? CheckCircle : Clock;

            return (
              <div key={index} className="flex items-start rounded-lg bg-green-50 p-4 shadow-sm">
                <Icon className="mr-3 h-6 w-6 text-green-700" />
                <span className="text-lg text-gray-700">{item.description}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-12">
        <SectionHeader>Our Services</SectionHeader>
        <SectionDescription>We offer a wide range of services to meet your needs:</SectionDescription>
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
          {services.map((service, index) => (
            <p key={index} className="border-l-4 border-green-700 pl-4 text-lg text-gray-700">{service}</p>
          ))}
        </div>
      </section>

      <section className="mt-10 text-center">
        <SectionHeader>Get in Touch</SectionHeader>
        <SectionDescription>
          Ready to experience quality craftsmanship? Contact us today for a free quote or emergency service.
        </SectionDescription>
        <div className="mx-auto max-w-xl rounded-lg bg-green-50 p-6 shadow-md">
          {contact.locations.map((location, index) => (
            <p key={index} className="mb-4 flex items-center justify-center text-lg text-gray-700">
              <MapPin className="mr-2 h-5 w-5 text-green-700" />
              <span className="font-semibold text-green-700">{location.label}:</span>{' '}
              <a href={`tel:${location.phone}`} className="ml-2 text-green-700 hover:underline">
                {location.phone}
              </a>
            </p>
          ))}
          <p className="mb-4 flex items-center justify-center text-lg text-gray-700">
            <Mail className="mr-2 h-5 w-5 text-green-700" />
            <span className="font-semibold text-green-700">Email:</span>{' '}
            <a href={`mailto:${contact.email}`} className="ml-2 text-green-700 hover:underline">
              {contact.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Content;
