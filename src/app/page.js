'use client';
import CallToActionSection from '@/components/organisms/CallAction';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import Info from '@/components/organisms/Info';
import AdminConsultingIntro from '@/components/organisms/Intro';
import Navbar from '@/components/organisms/Navbar';
import ProductsSection from '@/components/organisms/Products';
import AdminServicesGrid from '@/components/organisms/Services';
import TestimonialsCarousel from '@/components/organisms/Testimonials';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AdminConsultingIntro />
      <AdminServicesGrid />
      <Info />
      <ProductsSection />
      <TestimonialsCarousel />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
