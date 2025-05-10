'use client';
import { dataSite } from '@/data';
import Image from 'next/image';

const items = dataSite.info;

export default function Info() {
  return (
    <section id='info' className='bg-white py-20 px-6 lg:px-16'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
        {/* Text Content */}
        <div>
          <h2 className='text-4xl font-bold text-gray-700 mb-8 leading-tight'>
            Our approach to administrative consulting is centered around a
            fusion of strategy, adaptability, and measurable impact.
          </h2>

          <div className='space-y-10'>
            {items.map((item, i) => (
              <div key={i} className='flex items-start gap-6'>
                <div className='text-lg font-semibold text-gray-400 w-10 shrink-0'>
                  {(i + 1).toString().padStart(3, '0')}
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-1'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 text-sm'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className='rounded-2xl overflow-hidden shadow-lg'>
          <Image
            src={dataSite.image_hero2}
            alt='Consulting meeting'
            width={700}
            height={500}
            className='object-cover w-full h-auto'
          />
        </div>
      </div>
    </section>
  );
}
