import { dataSite } from '@/data';

export default function Hero() {
  return (
    <section className='relative bg-white overflow-hidden bg-gradient-to-l from-yellow-50 to-white'>
      {/* Degradado suave a la derecha */}

      <div className=' relative z-10 max-w-7xl mx-auto  lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {/* Texto */}
        <div>
          <h1 className='text-5xl font-bold text-gray-900 leading-tight mb-6'>
            {dataSite.subtitle}
          </h1>
          <p className='text-lg text-gray-500 font-medium'>
            {dataSite.description}
          </p>
        </div>

        {/* CTA Button */}
        <div className='flex items-start lg:justify-end'>
          <button
            onClick={() => (window.location.href = '/more-information')}
            className='bg-white border border-gray-300 text-gray-900 font-medium py-3 px-6 rounded-full shadow hover:shadow-md transition'
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* Imagen debajo */}
      <img
        src={dataSite.image_hero2}
        alt='Consulting meeting'
        className='w-full h-[400px] object-cover'
      />
    </section>
  );
}
