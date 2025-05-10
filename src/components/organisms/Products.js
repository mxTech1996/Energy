'use client';

import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';

const products = dataSite.products;

export default function ProductsSection() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <section className='px-6 py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-4'>
          Explore these case studies to gain insights into our consulting
          impact.
        </h2>
        <a href='#more' className='text-sm underline mb-8 inline-block'>
          Discover more
        </a>
        <div className='grid md:grid-cols-3 gap-6'>
          {products.map((study, index) => {
            const isInCart = validateProductInCart(study.id);
            const handleClick = () => {
              handleAddOrRemoveProduct(study.id);
            };
            return (
              <div
                key={index}
                className='bg-white rounded-lg shadow-sm overflow-hidden'
              >
                <img
                  src={study.image}
                  alt={study.name}
                  className='w-full h-56 object-cover'
                />
                <div className='p-4'>
                  <h3 className='text-lg font-semibold'>{study.name}</h3>
                  <p className='text-gray-600 text-sm mt-2'>
                    {study.description}
                  </p>
                  {/* price */}
                  <p className='text-gray-800 text-lg font-bold mt-4'>
                    {study.price}
                  </p>
                  {/* button add to cart */}

                  <button
                    onClick={handleClick}
                    style={{
                      backgroundColor: isInCart ? '#f87171' : '#fbbf24',
                      color: isInCart ? '#fff' : '#000',
                      border: 'none',
                    }}
                    className='mt-4 bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition'
                  >
                    {isInCart ? (
                      <span>Remove from Cart</span>
                    ) : (
                      <span>Add to Cart</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
