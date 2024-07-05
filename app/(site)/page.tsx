import Hero from "../components/sections/Hero";
import Navbar from "../components/shared/Navbar";
import Partners from "../components/sections/Partners";
import Features from "../components/sections/Features";
import FeaturesTwo from "../components/sections/FeatureTwo";
import { Pricing } from "../components/sections/Pricing";
import { Team } from "../components/sections/Team";
import { Statistic } from "../components/sections/Stats";
import { Blog } from "../components/sections/Blogs";
import { Faq } from "../components/sections/FAQ";
import { Footer } from "../components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-100 via-white to-blue-100">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <Partners />
        <Features />
        <FeaturesTwo />
        <Statistic />
        <Pricing />
        <Team />
        <Blog />
        <Faq />
        <Footer />
      </div>
    </main>
  );
}
