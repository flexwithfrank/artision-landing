import React from "react";
import ReactPlayer from 'react-player'

const HeroVideo = () => {
  return (
    <div>
      <section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
         

          <video
            class="min-w-full min-h-full absolute object-cover"
            src="https://ik.imagekit.io/dy6awnd3c/video__6_.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1672686657255"
            autoPlay
            loop="true" autoplay="autoplay"
            type="video/mp4"
            muted
            
          ></video>
        </div>
        <div class="video-content space-y-2">
          <div class="max-w-3xl text-center sm:text-left">
            <h2 class="lg:leading-[4rem] text-white text-3xl md:text-5xl mb-3 pb-4 lg:p-0 foa-book ">
              Long Term Resource Resilience and Management{" "}
              <span class="foa lg:leading-[4rem] text-blue-400">for Security and Value</span>
            </h2>

            <p class="hidden max-w-3xl text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed foa-book">
              We specialize in resilient systems, which have the ability to endure and recover rapidly
              from natural disasters, accidents and attacks, as well as threats
              and stresses on the nation’s economy and government.
            </p>

            <div class="mt-4 sm:mt-8 flex align-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                class="text-white hover:text-black bg-blue-900 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-4 text-center foa-book"
              >
                Learn More
              </button>

              <button
                type="button"
                class="text-white hover:text-black bg-transparent border border-white hover:bg-white focus:ring-4 focus:border-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center foa-book"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroVideo;
