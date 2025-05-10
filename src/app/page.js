'use client';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import Info from '@/components/organisms/Info';
import AdminConsultingIntro from '@/components/organisms/Intro';
import Navbar from '@/components/organisms/Navbar';
import AdminServicesGrid from '@/components/organisms/Services';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AdminConsultingIntro />
      <AdminServicesGrid />
      <Info />
      <Footer />
    </main>
  );
}
