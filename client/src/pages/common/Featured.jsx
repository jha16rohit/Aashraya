import { useState } from "react";
import { Heart, Star, BedDouble, Bath, Square } from "lucide-react";

export default function Featured() {
  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (index) => {
    if (likedItems.includes(index)) {
      setLikedItems(likedItems.filter((i) => i !== index));
    } else {
      setLikedItems([...likedItems, index]);
    }
  };

  const data = [
    {
      tag: "PG",
      title: "Comfort PG — Student Friendly Stay",
      location: "Sector V, Kolkata",
      price: 9000,
      rating: 4.5,
      reviews: 156,
      beds: 1,
      baths: 1,
      area: "300 sq.ft",
      image: "/pg-1.png",
    },

    {
      tag: "VILLA",
      title: "Casa del Mare — Coastal Villa",
      location: "Park Street, West Bengal",
      price: 72000,
      rating: 4.99,
      reviews: 86,
      beds: 5,
      baths: 4,
      area: "4200 sq.ft",
      image: "/villa-1.jpg",
    },
    {
      tag: "APARTMENT",
      title: "The Wren — Skyline Loft",
      location: "Howrah, West Bengal",
      price: 63000,
      rating: 4.88,
      reviews: 204,
      beds: 2,
      baths: 2,
      area: "1620 sq.ft",
      image: "/apartment-1.png",
    },
    {
      tag: "STUDIO",
      title: "Urban Studio — Compact Living",
      location: "Salt Lake, Kolkata",
      price: 18000,
      rating: 4.7,
      reviews: 92,
      beds: 1,
      baths: 1,
      area: "450 sq.ft",
      image: "/studio-1.png",
    },
    {
      tag: "PENTHOUSE",
      title: "Maison Lumière — Garden Penthouse",
      location: "Liluah, West Bengal",
      price: 48000,
      rating: 4.94,
      reviews: 128,
      beds: 3,
      baths: 2,
      area: "1850 sq.ft",
      image: "/penthouse-2.jpg",
    },
    {
      tag: "ROOM",
      title: "Cozy Private Room — Budget Stay",
      location: "Howrah, West Bengal",
      price: 6000,
      rating: 4.3,
      reviews: 78,
      beds: 1,
      baths: 1,
      area: "200 sq.ft",
      image: "/room-1.png",
    },
  ];

  return (
    <div className="bg-[#f5f2ed] pt-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-green-600 mb-2">
              FEATURED
            </p>
            <h2 className="text-4xl font-display text-[#1a1a1a] font-[Fraunces] font-semibold">
              Residences in the spotlight.
            </h2>
          </div>

          <button className="text-sm text-gray-600 hover:text-black flex items-center gap-1">
            View all →
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-gray-300 hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                />

                {/* Tag */}
                <span className="absolute top-3 left-3 bg-white/80 px-3 py-1 text-xs rounded-full">
                  {item.tag}
                </span>

                {/* Heart */}
                <div
                  onClick={() => toggleLike(i)}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow cursor-pointer"
                >
                  <Heart
                    className={`w-4 h-4 transition ${
                      likedItems.includes(i)
                        ? "text-green-600 fill-green-600"
                        : "text-gray-500"
                    }`}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-sm font-semibold text-[#1a1a1a] mb-1">
                  {item.title}
                </h3>

                {/* Location */}
                <p className="text-xs text-gray-500 mb-3">{item.location}</p>

                {/* Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 text-green-600" />
                    {item.rating}
                  </div>
                </div>

                {/* Info */}
                <div className="flex gap-4 text-xs text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <BedDouble className="w-4 h-4" /> {item.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="w-4 h-4" /> {item.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <Square className="w-4 h-4" /> {item.area}
                  </span>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-[#1a1a1a]">
                    ₹{item.price.toLocaleString("en-IN")}
                    <span className="text-sm text-gray-500"> /mo</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.reviews} reviews
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
