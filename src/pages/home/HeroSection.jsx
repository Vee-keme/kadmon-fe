import React from "react";
import heroImg from "../../assets/HeroImg.png";

const HeroSection = () => {
  return (
    <section className="w-full max-w-[90%] px-4 mx-auto">
      <div className="flex justify-between gap-6 rounded-xl">
        {/* LEFT SIDE HERO SECTION */}
        <div className="w-[50%] flex justify-center pt-[8%] rounded-tl-xl rounded-bl-xl">
          <div className=" h-full flex flex-col gap-10 pl-5">
            <h1 className="text-7xl font-bold">
              High-Quality Printing & Design Services
            </h1>
            <h2 className="opacity-70 text-lg">
              From business cards to banners, we bring your ideas to life with
              precision and vibrant colors. Fast, reliable, and affordable
              printing solutions tailored to your needs.
            </h2>
            <div className="flex flex-wrap gap-5">
              <button className="px-8 py-3 rounded-md flex-center bg-blue-600 hover:bg-blue-700 text-white">
                Get a Free Quote
              </button>
              <button className="px-8 py-3 rounded-md flex-center border border-blue-600 text-blue-600 hover:bg-blue-50 ">
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
