import React from "react";
import SectionWrapper from "./SectionWrapper";

export default function Gallery({ gallery }) {
  return (
    <SectionWrapper
      id="galeria"
      className="bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 bottom-20 my-auto right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-emerald-400 mb-3">
            {gallery.heading}
          </h2>
          <p className="text-gray-300">{gallery.subtitle}</p>
        </div>
        <div className="flex gap-3 text-sm text-gray-400">
          <button className="px-4 py-2 rounded-full border border-gray-600 hover:bg-gray-800 transition">
            {gallery.filterPhotos}
          </button>
          {/* <button className="px-4 py-2 rounded-full border border-gray-600 hover:bg-gray-800 transition">
            {gallery.filterVideos}
          </button> */}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.items.map((item, idx) => (
          <div
            key={idx}
            className="relative group rounded-2xl overflow-hidden aspect-[4/3] bg-gray-200 dark:bg-gray-800"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <p className="text-white text-sm font-medium tracking-wide">
                {item.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
