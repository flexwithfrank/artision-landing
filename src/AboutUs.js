import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section class="bg-green-900 polka">
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-center">
          <div class="mx-auto max-w-6xl text-center">
            <h1 class="text-3xl font-medium sm:text-6xl foa-light">
              Our mission provides access
            </h1>
            <h2 class="text-3xl font-medium sm:text-6xl foa pt-3">
              to clean drinking water,
            </h2>
            {/* section 2 */}
            <div>
              <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                <div class="grid w-full grid-cols-1 gap-2 mx-auto lg:grid-cols-2">
                  {/* left side */}
                  <div class="p-2">
                    <a
                      href="#"
                      class="relative block w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1560279966-2d681f3d4dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80)] bg-cover bg-center bg-no-repeat"
                    >
                      <div class="relative bg-gradient-to-t from-black p-8 pt-60 text-white">
                        <h3 class="text-2xl font-bold">Our Story</h3>

                        <div class="inline-flex align-center justify-center">
                        <p class="text-sm">Learn More </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* right side */}

                  <div class="p-2">
                    <a
                      href="#"
                      class="relative block w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1617155093730-a8bf47be792d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
                    >
                      <div class="relative bg-gradient-to-t from-black p-8 pt-60 text-white">
                        <h3 class="text-2xl font-bold">Our Process</h3>
                        <div class="inline-flex align-center justify-center">
                        <p class="text-sm">Learn More </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <h1 class="text-3xl font-medium sm:text-6xl foa-light">
              ＆ Future proofs <span class="foa-book">Sustainability.</span> 
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
