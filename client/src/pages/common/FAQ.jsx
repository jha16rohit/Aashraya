import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
     {
      q: "How does live location search work?",
      a: "Enter any locality, metro station, or landmark — we show verified rentals on a live map with distance to key places.",
    },
    {
      q: "How do you verify owners?",
      a: "Every owner submits ID and ownership proof. Listings are reviewed by our moderation team before going live.",
    },
    {
      q: "Are listings checked before publishing?",
      a: "Yes. Photos, rent, and details are reviewed. Suspicious listings are removed quickly.",
    },
    {
      q: "Can I contact owners directly?",
      a: "Yes. After verifying your number, you can chat with owners directly — no broker in between.",
    },
    {
      q: "Is this platform for all cities in India?",
      a: "We're live in major cities including Bengaluru, Mumbai, Delhi NCR, Pune, Hyderabad, and Chennai — expanding fast.",
    },
    {
      q: "Can I list my property for free?",
      a: "Yes. Listing is free for owners. Premium placements are optional.",
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="bg-[#f5f2ed] pt-10 pb-10">

      {/* 🔥 SAME ALIGNMENT AS CITIES (LEFT) */}
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] text-green-600 mb-3">
          FAQ
        </p>

        <h2 className="text-4xl md:text-5xl font-display text-[#1a1a1a] mb-12 font-[Fraunces] font-semibold">
          Questions, answered
        </h2>
      </div>

      {/* 🔥 CENTERED ACCORDION */}
      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

          {faqs.map((item, i) => (
            <div key={i} className="border-b border-gray-100 last:border-none">

              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 transition"
              >
                <span className="text-sm font-medium text-[#1a1a1a]">
                  {item.q}
                </span>

                <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:text-green-500">
                  {openIndex === i ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 text-sm text-gray-600">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Button (centered like your UI) */}
        <div className="flex justify-center mt-10">
          <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
            Need Help?
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}