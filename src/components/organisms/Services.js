import { dataSite } from '@/data';
import { FaArrowAltCircleRight } from 'react-icons/fa';
const services = dataSite.services;
export default function AdminServicesGrid() {
  return (
    <section className='bg-white px-6 py-20 lg:px-16'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex justify-between items-start flex-wrap mb-12'>
          <p className='text-gray-500 max-w-xl text-lg'>
            We offer a comprehensive range of administrative consulting services
            tailored to help organizations operate efficiently, adapt to change,
            and achieve long-term success.
          </p>
          <a
            href='#more'
            className='text-sm font-medium underline underline-offset-4 hover:text-gray-800'
          >
            Discover more
          </a>
        </div>

        {/* Grid */}
        <div id='services' className='grid gap-6 md:grid-cols-2 lg:grid-cols-2'>
          {services.map((item, index) => (
            <div
              key={+index}
              className='bg-yellow-200 rounded-lg p-6 relative hover:shadow-xl transition group  content-center '
            >
              <img
                src={item.image}
                alt={item.title}
                className=' mx-auto mb-4 w-32 h-32 object-cover rounded-full shadow-lg'
              />
              {/* <FaArrowAltCircleRight className='absolute top-4 right-4 text-xl group-hover:scale-110 transition' /> */}
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                {item.title}
              </h3>
              <p className='text-sm text-gray-800'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
