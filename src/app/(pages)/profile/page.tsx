"use client";

import React, { useState } from 'react';
import { Mail, Phone, Edit, Pencil, Home, Building, Hash } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  const handleSaveChanges = () => {
    toast.success('Changes have been saved!');
    setIsModalOpen(false);
  };

  return (
    <section className="container mx-auto my-8 flex justify-center">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm relative">
        <button
          onClick={handleModalToggle}
          className="absolute top-4 right-4 text-gray-500 hover:text-green-700"
        >
          <Edit className="w-5 h-5" />
        </button>

        <div className="flex justify-center items-center mb-6">
          <div className="w-32 h-32 bg-green-700 rounded-full flex items-center justify-center">
            <span className="text-white text-3xl">JD</span>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2 text-green-700">John Doe</h2>

          {/* Centered Email */}
          <div className="mb-4 flex items-center justify-center">
            <Mail className="mr-2 text-green-700 w-4 h-4" /> 
            <span>Email: johndoe@example.com</span>
          </div>

          <hr className="my-4" />

          {/* Phone Number */}
          <div className="text-left mb-4 flex items-center">
            <Phone className="mr-2 text-green-700 w-4 h-4" /> Phone: +1 (123) 456-7890
          </div>

          {/* Address */}
          <div className="text-left mb-4 flex items-center">
            <Home className="mr-2 text-green-700 w-4 h-4" /> Address: 123 Main Street
          </div>

          {/* City */}
          <div className="text-left mb-4 flex items-center">
            <Building className="mr-2 text-green-700 w-4 h-4" /> City: Melbourne
          </div>

          {/* Postal Code */}
          <div className="text-left mb-4 flex items-center">
            <Hash className="mr-2 text-green-700 w-4 h-4" /> Postal Code: 3000
          </div>

        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex items-center mb-6">
              <Pencil className="w-6 h-6 text-green-700 mr-2" />
              <h2 className="text-xl font-semibold text-green-700">Edit Profile</h2>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:border-green-700"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  defaultValue="johndoe@example.com"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:border-green-700"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  defaultValue="+1 (123) 456-7890"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:border-green-700"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  defaultValue="123 Main Street"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:border-green-700"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  defaultValue="Melbourne"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:border-green-700"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Postal Code</label>
                <input
                  type="text"
                  defaultValue="3000"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:border-green-700"
                />
              </div>

              <div className="flex justify-start space-x-4">
                <button
                  type="button"
                  onClick={handleSaveChanges}
                  className="bg-green-700 text-white rounded-lg px-4 py-2 hover:bg-green-600"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleModalToggle}
                  className="text-gray-500 rounded-lg px-4 py-2 hover:text-green-700"
                >
                  Discard Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserProfile;
