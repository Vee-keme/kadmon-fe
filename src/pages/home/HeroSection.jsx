import React from "react";
import heroImg from "../../assets/HeroImg.png";

const HeroSection = () => {
  return (
    <section className="w-full py-5">
      <div className="flex justify-between gap-6 rounded-xl">
        {/* LEFT SIDE HERO SECTION */}
        <div className="w-[50%] flex justify-center pt-[10%] rounded-tl-xl rounded-bl-xl">
          <div className=" h-full flex flex-col gap-10 pl-5">
            <h1 className="text-7xl">
              High-Quality Printing & Design Services
            </h1>
            <h2>
              From business cards to banners, we bring your ideas to life with
              precision and vibrant colors. Fast, reliable, and affordable
              printing solutions tailored to your needs.
            </h2>
            <div className="flex gap-5">
              <button className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center">
                Get a Free Quote
              </button>
              <button className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center">
                Explore Our Services
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE HERO SECTION */}
        <div className="w-[50%] rounded-tr-xl rounded-br-xl">
          <img
            src={heroImg}
            alt="hero img"
            className="w-fit h-auto object-fill rounded-tr-xl rounded-br-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
