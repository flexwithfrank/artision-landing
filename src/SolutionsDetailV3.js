import React from "react";

const SolutionsDetailV3 = () => {
  return (
    <>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  items-start">
            <div class="h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full sticky top-0">
              <img
                alt="Party"
                src="https://ik.imagekit.io/dy6awnd3c/thisisengineering-raeng-WjOWazUPAss-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672804485002"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl text-blue-800">
                The Leader in Resiliency.
              </h2>

              <p class="mt-4 text-gray-600">
                Learn more about what makes Artesion Inc the leader Resiliency
                Systems.
              </p>

              {/* FAQ Container */}
              <div className="py-6">
                <div class="space-y-4">
                  <details
                    class="group rounded-lg  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden transition duration-300"
                    open
                  >
                    <summary class="flex items-center justify-between cursor-pointer">
                      <h2 class="text-lg font-medium text-gray-900">
                        Next Generation Energy
                      </h2>

                      <span class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                      We're focused on next generation energy, Utilities, water,
                      data, and other resources.
                    </p>
                  </details>

                  <details class="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary class="flex items-center justify-between cursor-pointer">
                      <h2 class="text-lg font-medium text-gray-900">
                        Highly Secure Environment
                      </h2>

                      <span class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                      Artesion Edge Platform provides a highly secure
                      environment, with greater flexibility, and a better
                      control approach than more typical communication
                      processing flows that are currently being used for
                      deployment.
                    </p>
                  </details>
                  <details class="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary class="flex items-center justify-between cursor-pointer">
                      <h2 class="text-lg font-medium text-gray-900">
                        Dependable and Reliable Systems
                      </h2>

                      <span class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                      Artesion Edge Platform provides a highly secure
                      environment, with greater flexibility, and a better
                      control approach than more typical communication
                      processing flows that are currently being used for
                      deployment.
                    </p>
                  </details>
                  <details class="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary class="flex items-center justify-between cursor-pointer">
                      <h2 class="text-lg font-medium text-gray-900">
                        Machine Learning Applications
                      </h2>

                      <span class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                      Artesion Edge Platform provides a highly secure
                      environment, with greater flexibility, and a better
                      control approach than more typical communication
                      processing flows that are currently being used for
                      deployment.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsDetailV3;
