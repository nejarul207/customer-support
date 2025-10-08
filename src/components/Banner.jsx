import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';

const Banner = ({ inProgressCount = 0, resolvedCount = 0 }) => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* In Progress Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 p-8 text-white">
          {/* Two positioned vector images to recreate your wave look */}
          <img
            src="/asset/vector1.png"
            alt=""
            className="pointer-events-none select-none absolute -left-10 -top-8 w-[90%] max-w-none opacity-90 transform"
            style={{ objectFit: 'contain' }}
          />
          <img
            src="/asset/vector1.png"
            alt=""
            className="pointer-events-none select-none absolute -right-10 -bottom-8 w-[90%] max-w-none opacity-90 transform rotate-180"
            style={{ objectFit: 'contain' }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              {/* <Clock size={24} /> */}
              <h2 className="text-xl font-semibold">In-Progress</h2>
            </div>
            <div className="text-5xl font-bold mb-2">{inProgressCount}</div>
            {/* <p className="text-purple-100">Active tickets being worked on</p> */}
          </div>
        </div>

        {/* Resolved Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 via-green-600 to-teal-600 p-8 text-white">
          <img
            src="/asset/vector1.png"
            alt=""
            className="pointer-events-none select-none absolute -left-10 -top-8 w-[90%] max-w-none opacity-90 transform"
            style={{ objectFit: 'contain' }}
          />
          <img
            src="/asset/vector1.png"
            alt=""
            className="pointer-events-none select-none absolute -right-10 -bottom-8 w-[90%] max-w-none opacity-90 transform rotate-180"
            style={{ objectFit: 'contain' }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              {/* <CheckCircle size={24} /> */}
              <h2 className="text-xl font-semibold">Resolved</h2>
            </div>
            <div className="text-5xl font-bold mb-2">{resolvedCount}</div>
            {/* <p className="text-green-100">Successfully completed tickets</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
