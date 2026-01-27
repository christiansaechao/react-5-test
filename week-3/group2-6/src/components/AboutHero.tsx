import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 italic">
            Who We Are
          </h1>
          <p className="text-xl text-indigo-100 leading-relaxed">
            We are a team of passionate developers, designers, and strategists
            dedicated to pushing the boundaries of what's possible on the web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
