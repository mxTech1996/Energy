import { dataSite } from '@/data';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = dataSite.references;

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  const getInitials = (name) =>
    name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

  return (
    <section className='bg-gray-50 py-16 px-6'>
      <div className='max-w-4xl mx-auto text-center'>
        <blockquote className='text-2xl font-semibold text-gray-800 mb-6'>
          &quot;{current.description}&quot;
        </blockquote>
        <div className='flex items-center justify-center gap-4 mb-8'>
          {current.image ? (
            <img
              src={current.image}
              alt={current.name}
              className='w-12 h-12 rounded-full object-cover'
            />
          ) : (
            <div className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold'>
              {getInitials(current.name)}
            </div>
          )}
          <div className='text-left'>
            <p className='font-semibold'>{current.name}</p>
            <p className='text-sm text-gray-500'>Client Testimonial</p>
          </div>
        </div>
        <div className='flex justify-center gap-4'>
          <button
            onClick={prev}
            className='p-3 rounded-full bg-white border hover:bg-gray-100 transition'
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={next}
            className='p-3 rounded-full bg-white border hover:bg-gray-100 transition'
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
