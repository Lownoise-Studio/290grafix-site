import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Deals from "./components/Deals";
import WhyUs from "./components/WhyUs";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Deals />
        <WhyUs />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
