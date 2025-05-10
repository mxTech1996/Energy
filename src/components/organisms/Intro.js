import { dataSite } from '@/data';

export default function AdminConsultingIntro() {
  return (
    <section className='bg-white px-6 py-20 lg:px-20'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* Left section */}
        <div>
          {/* Avatars */}

          <h2 className='text-4xl font-bold text-gray-900 mb-4 leading-snug'>
            Where business clarity meets <br /> tailored consulting.
          </h2>

          <p className='text-lg text-gray-500 mb-6'>
            Our mission is to empower organizations with strategic insights,
            operational efficiency, and custom management consulting tailored to
            their challenges and goals.
          </p>

          <a
            href='#about'
            className='text-sm font-medium underline underline-offset-4 hover:text-gray-800'
          >
            Learn more about us
          </a>
        </div>

        {/* Right image grid */}
        <div className='grid grid-cols-2 gap-6'>
          <img
            src={dataSite.image_hero2}
            alt='Consulting session'
            className='rounded-xl shadow-lg object-cover h-[300px] w-full'
          />
          <img
            src={dataSite.services[0].image}
            alt='Team strategy'
            className='rounded-xl shadow-lg object-cover h-[300px] w-full'
          />
        </div>
      </div>
    </section>
  );
}
