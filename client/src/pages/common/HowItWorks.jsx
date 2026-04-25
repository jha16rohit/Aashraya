import { Search, Eye, MapPin, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Search by location",
      desc: "Use the live map or filters to find rentals near work, college, or family.",
      icon: Search,
      number: "01",
    },
    {
      title: "Compare verified rentals",
      desc: "Real photos, transparent rent, verified owner profiles. No fake listings.",
      icon: Eye,
      number: "02",
    },
    {
      title: "Contact and move in",
      desc: "Reach owners directly. No brokers, no surprise charges.",
      icon: MapPin,
      number: "03",
    },
  ];

  return (
    <div className="bg-[#f5f2ed] pt-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <p className="text-xs tracking-[0.2em] text-green-600 mb-3">
          HOW IT WORKS
        </p>

        <h2 className="text-4xl md:text-5xl font-display text-[#1a1a1a] mb-14 font-[Fraunces] font-semibold">
          Three steps to home
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div
                key={i}
                className="relative bg-white rounded-2xl p-8 border border-gray-300 
                hover:shadow-xl transition-all duration-300"
              >

                {/* Step Number */}
                <span className="absolute top-6 right-6 font-[Fraunces] text-6xl  text-gray-400">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center 
                                bg-green-600 rounded-full mb-6">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-14">
          <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
            Start Searching <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}