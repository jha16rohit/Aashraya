import {
  ShieldCheck,
  IndianRupee,
  Headphones,
  BadgeCheck,
} from "lucide-react";

export default function TrustSafety() {
  return (
    <div className="bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN CARD — single unified green card */}
        <div className="relative bg-green-800 rounded-[32px] overflow-hidden text-white">

          {/* TOP SECTION */}
          <div className="grid md:grid-cols-2 gap-0 items-stretch">

            {/* LEFT CONTENT */}
            <div className="px-12 pt-12 pb-10 flex flex-col justify-between">

              <div>
                {/* Tag pill */}
                <div className="inline-flex items-center gap-2 border border-green-500/50 rounded-full px-4 py-1.5 mb-8 w-fit">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-300" />
                  <p className="text-xs tracking-[0.2em] text-green-300 font-medium">
                    TRUST & SAFETY
                  </p>
                </div>

                {/* Heading */}
                <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 font-[Fraunces] font-semibold">
                  Considered,
                  <br />
                  end to end.
                </h2>

                {/* Description */}
                <p className="text-green-200 text-base leading-relaxed mb-10 max-w-md">
                  Every listing is verified, every transaction is secured,
                  and every conversation is moderated. We've rebuilt the
                  rental experience from the ground up — for both sides.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">
                <button className="inline-flex items-center gap-2 bg-[#EAD9A7] text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition text-sm">
                  <Headphones className="w-4 h-4" />
                  Talk to Concierge
                </button>
                <button className="inline-flex items-center gap-2 border border-green-400/40 text-white px-6 py-3 rounded-full hover:bg-green-700/40 transition text-sm">
                  <ShieldCheck className="w-4 h-4 text-green-300" />
                  Report an Issue
                </button>
              </div>
            </div>

            {/* RIGHT — Image with logo circle overlapping left edge */}
            <div className="relative">
              <div className="relative h-full min-h-[380px]">
                <img
                  src="/penthouse-2.jpg"
                  alt="Property"
                  className="w-full h-full object-cover rounded-tr-[32px]"
                />
                <div className="absolute inset-0 bg-black/10 rounded-tr-[32px]" />
              </div>

              {/* Logo circle — overlapping the left edge of the image */}
              <div className="absolute
top-8
left-8
z-20
w-[220px]
h-[90px]
bg-[#f5f0e8]
border-[4px]
border-[#EAD9A7]
rounded-full
flex items-center justify-center
shadow-2xl">
                <img
                  src="/logo-1.png"
                  alt="Aashraya"
                  className="w-[100%] object-contain"
                />
              </div>
            </div>

          </div>

          {/* STATS BAR — inside the same card, separated by a subtle border */}
         <div className="grid grid-cols-2 md:grid-cols-4 border-t border-green-700/50 py-7">

  {/* ITEM 1 */}
  <div className="flex flex-col items-center gap-1 text-center border-r border-[#EAD9A7]/40">
    <div className="w-9 h-9 flex items-center justify-center bg-green-700/50 rounded-full mb-2">
      <ShieldCheck className="w-4 h-4 text-green-300" />
    </div>
    <h3 className="text-2xl font-bold">100%</h3>
    <p className="text-[10px] text-green-300 tracking-widest uppercase font-semibold">
      Verified Owners
    </p>
    <p className="text-[11px] text-green-400/90 mt-0.5">
      Every property. Every time.
    </p>
  </div>

  {/* ITEM 2 */}
  <div className="flex flex-col items-center gap-1 text-center border-r border-[#EAD9A7]/40">
    <div className="w-9 h-9 flex items-center justify-center bg-green-700/50 rounded-full mb-2">
      <IndianRupee className="w-4 h-4 text-green-300" />
    </div>
    <h3 className="text-2xl font-bold">₹0</h3>
    <p className="text-[10px] text-green-300 tracking-widest uppercase font-semibold">
      Hidden Fees
    </p>
    <p className="text-[11px] text-green-400/90 mt-0.5">
      No surprises, ever.
    </p>
  </div>

  {/* ITEM 3 */}
  <div className="flex flex-col items-center gap-1 text-center border-r border-[#EAD9A7]/40">
    <div className="w-9 h-9 flex items-center justify-center bg-green-700/50 rounded-full mb-2">
      <Headphones className="w-4 h-4 text-green-300" />
    </div>
    <h3 className="text-2xl font-bold">24/7</h3>
    <p className="text-[10px] text-green-300 tracking-widest uppercase font-semibold">
      Live Support
    </p>
    <p className="text-[11px] text-green-400/90 mt-0.5">
      Real people. Real help.
    </p>
  </div>

  {/* ITEM 4 — no right border on last item */}
  <div className="flex flex-col items-center gap-1 text-center">
    <div className="w-9 h-9 flex items-center justify-center bg-green-700/50 rounded-full mb-2">
      <BadgeCheck className="w-4 h-4 text-green-300" />
    </div>
    <h3 className="text-2xl font-bold">48h</h3>
    <p className="text-[10px] text-green-300 tracking-widests uppercase font-semibold">
      Avg. Dispute Resolution
    </p>
    <p className="text-[11px] text-green-400/90 mt-0.5">
      Fast &amp; reliable.
    </p>
  </div>



          </div>

        </div>
      </div>
    </div>
  );
}