import { useState, useEffect } from "react";

const carouselImages = [
  "https://images.somethinc.com/uploads/KV_Calmdown_Micellar_Water_Desktop_1500x500.jpg",
  "https://images.somethinc.com/uploads/Website_Exfoliating_Glowing_Serum_1500x500_copy.jpg",
  "https://images.somethinc.com/uploads/Website_Banner_Calm_Down_1500x500_copy.jpg",
  "https://images.somethinc.com/uploads/Page-Recycle-1500x500-2.jpg",
  "https://images.somethinc.com/uploads/KV_Serum_Biospicule_Copper_Desktop_Banner.jpg",
];

const cardImages = [
  "https://images.somethinc.com/uploads/Afgan_580x200_(1).jpg",
  "https://images.somethinc.com/uploads/Finder_580x200_(1).jpg",
  "https://images.somethinc.com/uploads/Apothinc_580x200_(1).jpg",
];

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = carouselImages.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  // Auto-play every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mt-16">
      {/* Carousel */}
      <div className="relative w-full overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]">
        {carouselImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2"
        >
          ❯
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8 px-4">
        {cardImages.map((img, index) => (
          <div key={index} className="w-full md:w-1/3">
            <img
              src={img}
              alt={`Card ${index}`}
              className="w-full rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
