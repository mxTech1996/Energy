'use client';
export default function CallToActionSection() {
  const handleClick = () => {
    // go to /more informatio
    window.location.href = '/more-information';
  };

  return (
    <section className='relative bg-gradient-to-b from-yellow-100 to-white py-16 px-6 text-center'>
      <div className='max-w-3xl mx-auto'>
        <p className='text-sm font-medium mb-2'>
          Get started on optimizing your organization today.
        </p>
        <h2 className='text-3xl font-bold mb-6'>
          Looking for expert administrative consulting services to improve your
          operational efficiency? Our team is ready to support you every step of
          the way.
        </h2>
        <button
          onClick={handleClick}
          className='bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full transition'
        >
          Contact Our Experts
        </button>
      </div>
    </section>
  );
}
