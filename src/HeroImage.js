import React from "react";

const HeroImage = () => {
  return (
    <section class="overflow-hidden bg-[url(https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)] bg-cover bg-center bg-no-repeat">
      <div class="bg-black/25 p-20 md:p-12 lg:px-16 lg:py-40">
        <div class="max-w-lg text-center sm:text-left">
          <h2 class="text-2xl font-extrabold text-white sm:text-3xl md:text-5xl">
            Water Sustainability for Security, Growth, and Preservation.
          </h2>

          <p class="hidden max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            officia corporis quasi doloribus iure architecto quae voluptatum
            beatae excepturi dolores.
          </p>

          <div class="mt-4 sm:mt-8">
            <button
              type="button"
              class="text-white hover:text-black bg-green-900 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
