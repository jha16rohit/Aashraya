import {
  MapPin,
  ShieldCheck,
  IndianRupee,
  Sparkles,
  Shield,
  Briefcase,
} from "lucide-react";

export default function WhyAashraya() {
  const features = [
    {
      title: "Live map search",
      desc: "See every rental on the map with nearby landmarks.",
      icon: MapPin,
    },
    {
      title: "Verified owners",
      desc: "Every owner is verified before listing goes live.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent pricing",
      desc: "No hidden brokerage. INR pricing, all-inclusive.",
      icon: IndianRupee,
    },
    {
      title: "Nearby insights",
      desc: "Metro, hospitals, markets, colleges, and offices.",
      icon: Sparkles,
    },
    {
      title: "Safe communication",
      desc: "Chat without sharing personal numbers upfront.",
      icon: Shield,
    },
    {
      title: "Fast inquiry flow",
      desc: "Send enquiries in seconds, get responses fast.",
      icon: Briefcase,
    },
  ];

  return (
    <div className="bg-[#f5f2ed] pt-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <p className="text-xs tracking-[0.2em] text-green-600 mb-3">
          WHY AASHRAYA
        </p>

        <h2 className="text-4xl md:text-5xl font-display text-[#1a1a1a] leading-tight mb-4  font-[Fraunces] font-semibold">
          Built for clarity, trust,
          <br />
          and convenience
        </h2>

        <p className="text-gray-600 max-w-xl mb-12">
          Made for people who want a calm, transparent renting experience in a new city.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-gray-300 
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center 
                                bg-green-50 rounded-full mb-5">
                  <Icon className="w-5 h-5 text-green-600" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}