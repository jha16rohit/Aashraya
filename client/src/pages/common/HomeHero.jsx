export default function HomeHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero-image-2.png"
        alt="home"
        className="absolute w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Bottom fade gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-60 
                bg-gradient-to-b from-transparent via-[#f5f2ed]/60 to-[#f5f2ed]"
      ></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-6 text-white">
        {/* Heading */}
        <h1 className="text-5xl font-[Fraunces] md:text-7xl font-semibold leading-tight">
          Find the right place,
          <br />
          <span className="italic font-normal font-[Fraunces] text-green-400">
            beautifully.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-sm md:text-base opacity-80 max-w-xl">
          Trusted rooms, flats, and rentals near your exact location. Compare
          fast, contact verified owners, no scams.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-green-500 text-white rounded-full font-medium">
            Find Room →
          </button>

          <button className="px-6 py-3 bg-black/40 backdrop-blur text-white rounded-full">
            List Property
          </button>
        </div>

        {/* Bottom text */}
        <p className="absolute font-[Fraunces] bottom-20 text-black  tracking-widest">
          VERIFIED OWNERS • LIVE MAP • TRANSPARENT RENT • NO FAKE LISTINGS
        </p>
      </div>
    </div>
  );
}
