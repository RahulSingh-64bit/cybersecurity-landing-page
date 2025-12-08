import Hero from '../app/components/landing/hero';
import About from './components/landing/about';
import Certifications from './components/landing/certifications';
import FAQ from './components/landing/faq';
import Features from './components/landing/features';
import Footer from './components/landing/footer';
import HandsOn from './components/landing/hands-on';
import Pathways from './components/landing/pathways';
import Pricing from './components/landing/pricing';
import Testimonials from './components/landing/testimonials';
import WhyCyberSection from './components/landing/why-cyber-section';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About/>
      <Pathways/>
      <HandsOn/>
      <Testimonials/>
      <Certifications/>
      <WhyCyberSection/>
      <Pricing/>
      {/* <FAQ/>
      <Footer/> */}
    </>
  );
}