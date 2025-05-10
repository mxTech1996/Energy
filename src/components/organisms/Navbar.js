'use client';

import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import Link from 'next/link';

//Cart icon
import { AiOutlineShoppingCart } from 'react-icons/ai';
export default function StickyNavbar() {
  const { products } = useCart();
  return (
    <header className='sticky top-0 z-50 bg-white shadow-sm'>
      <nav className='flex justify-between items-center px-6 md:px-12 py-4 bg-gradient-to-r from-white to-yellow-50'>
        {/* Logo */}
        <div className='flex items-center'>
          <img
            src={dataSite.iconImage}
            alt='Logo'
            className='w-12 h-12 mr-2 rounded-full'
          />
        </div>
        <div className='text-xl font-bold tracking-tight'>
          Energy<sup>®</sup>
        </div>

        {/* Links */}
        <ul className='hidden md:flex gap-8 text-sm text-gray-500 font-medium items-center'>
          <a href='/#services' className='hover:text-black'>
            Services
          </a>
          <a href='/#portfolio' className='hover:text-black'>
            Portfolio
          </a>
          <a href='/#testimonials' className='hover:text-black'>
            Testimonials
          </a>
          <a href='/#know-us' className='hover:text-black'>
            Know Us
          </a>
        </ul>

        {/* Cart */}

        <div className='hidden md:flex items-center gap-4'>
          <Link href={`/my-cart`} className='relative'>
            <AiOutlineShoppingCart className='text-2xl text-gray-500 hover:text-black cursor-pointer' />
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center'>
              {products.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
