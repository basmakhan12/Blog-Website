import React from "react";

const Feature = () => {
  return (
    <div>
      <section className="py-8 bg-pink-200 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-blue-500">
          Basma Khan: The Jewelry Blog!
        </h2>

        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odit
          sequi asperiores exercitationem, vel, aliquid ex earum, quia natus
          aspernatur accusamus! Cumque magnam debitis inventore quam, cupiditate
          nostrum distinctio sint.
        </p>
        <div className="mx-auto max-w-6xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-blue-500 animate-color-change">
            Exploring Our Categories
          </h1>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100 "></div>
          {["Neckles", "Rings", "Bracelet", "Earings", "Diamonds"].map(
            (category, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition- duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600"
              >
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Feature;
