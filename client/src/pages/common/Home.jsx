import Navbar from "./Navbar";
import HomeHero from "./HomeHero";
import WhatWeOffer from "./WhatWeOffer";
import Featured from "./Featured";
import HowItWorks from "./HowItWorks";
import WhyAashraya from "./WhyAashraya";
import Cities from "./Cities";
import Testimonials from "./Testimonials";
import TrustSafety from "./TrustSafety";
import FAQ from "./FAQ";
import Footer from "./Footer";
import { ShieldCheck, MapPin, Zap, Headphones } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HomeHero />

      {/* FEATURE STRIP */}
      <div className="bg-white py-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 text-sm text-gray-700">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 flex items-center justify-center bg-orange-100 rounded-full">
              <ShieldCheck className="w-4 h-4 text-green-900" />
            </span>
            Verified listings
          </div>

          <div className="flex items-center gap-3">
            <span className="w-9 h-9 flex items-center justify-center bg-orange-100 rounded-full">
              <MapPin className="w-4 h-4 text-green-900" />
            </span>
            Live location search
          </div>

          <div className="flex items-center gap-3">
            <span className="w-9 h-9 flex items-center justify-center bg-orange-100 rounded-full">
              <Zap className="w-4 h-4 text-green-900" />
            </span>
            Fast comparison
          </div>

          <div className="flex items-center gap-3">
            <span className="w-9 h-9 flex items-center justify-center bg-orange-100 rounded-full">
              <Headphones className="w-4 h-4 text-green-900" />
            </span>
            Support & moderation
          </div>
        </div>
      </div>
      <WhatWeOffer />
      <Featured />
      <HowItWorks />
      <WhyAashraya />
      <Cities />
      <Testimonials />
      <TrustSafety />
      <FAQ />
      <Footer />
    </div>
  );
}
