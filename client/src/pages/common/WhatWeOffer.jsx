import {
  BedDouble,
  Building2,
  Home,
  Users,
  Warehouse,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

export default function WhatWeOffer() {
  const data = [
    {
      title: "Rooms",
      desc: "Single & double rooms in prime locations",
      icon: BedDouble,
    },
    {
      title: "PGs",
      desc: "Verified PGs with meals and Wi-Fi",
      icon: Building2,
    },
    {
      title: "Flats",
      desc: "1, 2, 3 BHK across major cities",
      icon: Home,
    },
    {
      title: "Shared stays",
      desc: "Co-living with vetted flatmates",
      icon: Users,
    },
    {
      title: "Family homes",
      desc: "Spacious homes for long-term living",
      icon: Warehouse,
    },
    {
      title: "Studios",
      desc: "Compact, modern studio apartments",
      icon: LayoutGrid,
    },
  ];

  return (
    <div className="bg-[#f5f2ed] pt-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tag */}
        <p className="text-xs tracking-[0.2em] text-green-600 mb-3">
          WHAT WE OFFER
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-[Fraunces] mb-12 text-[#1a1a1a] font-semibold">
          A home for every story
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-7 border border-gray-300 
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Arrow (top-right) */}
                <div
                  className="absolute  top-5 right-5 opacity-0 translate-x-2 -translate-y-2 
                  group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 
                  transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5 text-green-500" />
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center 
                                bg-green-100 rounded-full mb-5 
                                group-hover:bg-green-100 transition"
                >
                  <Icon className="w-5 h-5 text-green-600" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 text-[#1a1a1a]">
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
