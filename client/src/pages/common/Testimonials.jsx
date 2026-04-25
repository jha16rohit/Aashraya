export default function Testimonials() {
  const reviews = [
    {
      text: "Found a verified room in a single day. Owner was genuine, photos were real.",
      name: "Ananya",
      city: "Bengaluru",
    },
    {
      text: "No fake listings, clear rent, and a fast response from the owner. Refreshing!",
      name: "Rohit",
      city: "Pune",
    },
    {
      text: "The live map made it so easy to filter by metro and office distance.",
      name: "Sara",
      city: "Mumbai",
    },
    {
      text: "Got a PG near my college within hours. Super smooth experience.",
      name: "Amit",
      city: "Kolkata",
    },
    {
      text: "Loved the transparency. No hidden charges and verified listings only.",
      name: "Priya",
      city: "Delhi",
    },
    {
      text: "Fast inquiries and genuine owners. This platform actually works!",
      name: "Karan",
      city: "Hyderabad",
    },
  ];

  return (
    <div className="bg-[#f5f2ed] pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <p className="text-xs tracking-[0.2em] text-green-600 mb-3">
          LOVED BY RENTERS
        </p>

        <h2 className="text-4xl md:text-5xl font-display text-[#1a1a1a] mb-14 font-[Fraunces] font-semibold">
          Real stories, real homes
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-7 border border-gray-300 
              hover:shadow-xl transition-all duration-300"
            >

              {/* Verified Tag */}
              <span className="absolute -top-3 left-6 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                Verified
              </span>

              {/* Text */}
              <p className="text-gray-800 text-[15px] leading-relaxed mb-6">
                “{item.text}”
              </p>

              {/* Name */}
              <p className="text-xs tracking-widest text-gray-500 uppercase">
                {item.name} • {item.city}
              </p>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}