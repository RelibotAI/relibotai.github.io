import Header from '@/app/components/header';
import Hero from '@/app/components/hero';
import Features from '@/app/components/features';
import Pricing from '@/app/components/pricing';
import Testimonials from '@/app/components/testimonials';
import Contact from '@/app/components/contact';
import Footer from '@/app/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}