import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const slides = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=60&w=1600",
    "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&q=60&w=1600",
    "https://plus.unsplash.com/premium_photo-1681989490797-dbe51c438b61?auto=format&fit=crop&q=60&w=1600",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=60&w=1600",
    "https://media.istockphoto.com/id/2194536930/photo/drone-point-view-of-workers-working-on-construction-site-hangzhou-china.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rg-vABHV0gD-j7SUkizlHLunDXH7R6cy1JLCJWWLIv8=",
    "https://media.istockphoto.com/id/2202496350/photo/construction-leader-giving-advice-to-team.webp?a=1&b=1&s=612x612&w=0&k=20&c=9qM6rGXk21QA3Ul5KDdmUDH7Sys8tadChDMIzzzS1C4=",
    "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&q=60&w=1600",
    "https://plus.unsplash.com/premium_photo-1682597001147-55ec5f877209?auto=format&fit=crop&q=60&w=1600",
    "https://images.unsplash.com/photo-1495036019936-220b29b930ea?auto=format&fit=crop&q=60&w=1600",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Swiper
        pagination={{ type: "progressbar" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1.2 },
          1024: { slidesPerView: 1.5 },
        }}
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-lg">
              <img
                src={src}
                alt={`Construction Slide ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-500"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
