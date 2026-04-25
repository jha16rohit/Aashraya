import { MapPin } from "lucide-react";

export default function Cities() {
  const cities = [
    {
      name: "Patna",
      homes: 124,
      image: "/patna-1.png",
    },
    {
      name: "Delhi",
      homes: 58,
      image: "/delhi-1.png",
    },
    {
      name: "Pune",
      homes: 196,
      image: "/pune-1.png",
    },
    {
      name: "Kolkata",
      homes: 312,
      image: "/kolkata-1.png",
    },
  ];

  return (
    <div className="bg-[#f5f2ed] pt-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <p className="text-xs tracking-[0.2em] text-green-600 mb-3">
          CITIES
        </p>

        <h2 className="text-4xl md:text-5xl font-display text-[#1a1a1a] mb-12 font-[Fraunces] font-semibold">
          Wander, then settle.
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          {cities.map((city, i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >

              {/* Image */}
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-100 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-5 left-5 text-white">

                <h3 className="text-xl font-semibold">
                  {city.name}
                </h3>

                <p className="text-sm opacity-80 flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {city.homes} homes
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}