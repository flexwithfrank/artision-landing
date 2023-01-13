import React from "react";

const HeadlineTextSection = () => {
  return (
    <div>
      <section class="bg-blue-800 dark:bg-gray-900 text-left">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:pt-2 lg:px-6">
          <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <div className="text-xs font-extrabold text-blue-800 foa pb-2 text-left py-3 mb-2">
              <span class="outline outline-white rounded-md py-1 px-2 foa bg-white">
                MISSION
              </span>
            </div>
            <h2 class="mb-4 text-3xl lg:text-6xl tracking-tight text-white dark:text-white foa-light">
              Artesion is the leader in <br />
              <span class="foa-book">Platform Resilient Systems.</span>
            </h2>

            <p class="mb-4 font-light foa-book text-white">
              Artesion’s mission is to be a leader in resilient platform systems
              and infrastructure projects to empower our customers with
              long‒term security of supply of resource solutions.
            </p>

            <button
              type="button"
              class="text-white hover:text-black bg-transparent outline outline-white hover:bg-white focus:ring-4 focus:border-none focus:ring-blue-300 font-medium rounded-full text-base px-6 py-3.5 text-center foa-book"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeadlineTextSection;
