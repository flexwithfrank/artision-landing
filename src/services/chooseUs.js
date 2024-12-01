/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
/* eslint-disable jsx-a11y/img-redundant-alt */
export default function chooseUs() {
  // const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  // useEffect(() => {
  //   const buttons = document.querySelectorAll('.target-btn');
  //   const interval = setInterval(() => {
  //     // Remove active from all buttons
  //     buttons.forEach(button => button.classList.remove('active'));

  //     // Add active to current button
  //     buttons[activeButtonIndex].classList.add('active');

  //     // Move to next button or reset to first
  //     setActiveButtonIndex((prev) => (prev + 1) % buttons.length);
  //   }, 2000);

  //   // Cleanup on unmount
  //   return () => clearInterval(interval);
  // }, [activeButtonIndex]);

  return (
    <div className="bg-gray-900 bg-gradient-to-t from-black to-transparent">
      <div class="py-10 mx-auto max-w-6xl">
        <div class="relative p-6">
          <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 class="text-2xl text-white font-bold sm:text-3xl">
                Why Choose Artesion?
              </h2>

              <nav
                class="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
                aria-orientation="vertical"
              >
                {/* btn */}
                <button
                  type="button"
                  class="hs-tab-active:bg-gray-800 hs-tab-active:shadow-md hs-tab-active:border hs-tab-active:border-neutral-600 hs-tab-active:hover:border-neutral-600 text-start hover:bg-gray-800 focus:outline-none focus:bg-gray-800 p-4 md:p-5 rounded-xl active target-btn"
                  id="tabs-with-card-item-1"
                  aria-selected="true"
                  data-hs-tab="#tabs-with-card-1"
                  aria-controls="tabs-with-card-1"
                  role="tab"
                >
                  <span class="flex gap-x-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="shrink-0 mt-1 size-6 md:size-7 hs-tab-active:text-white text-neutral-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                      />
                    </svg>

                    <span class="grow">
                      <span class="block text-lg font-semibold hs-tab-active:text-white text-neutral-400 foa">
                        Expert Knowledge
                      </span>
                      <span class="hidden hs-tab-active:block mt-1 hs-tab-active:text-white text-neutral-400 foa-book">
                        Artesion and our partners provide expert knowledge and
                        experience to support your CMMC 2.0 mission readiness
                        compliance.
                      </span>
                    </span>
                  </span>
                </button>
                {/* btn */}
                <button
                  type="button"
                  class="hs-tab-active:bg-gray-800 hs-tab-active:shadow-md hs-tab-active:border hs-tab-active:border-neutral-600 hs-tab-active:hover:border-neutral-600 text-start hover:bg-gray-800 focus:outline-none focus:bg-gray-800 p-4 md:p-5 rounded-xl target-btn"
                  id="tabs-with-card-item-2"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-card-2"
                  aria-controls="tabs-with-card-2"
                  role="tab"
                >
                  <span class="flex gap-x-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="shrink-0 mt-1 size-6 md:size-7 hs-tab-active:text-white text-neutral-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                      />
                    </svg>

                    <span class="grow">
                      <span class="block text-lg font-semibold hs-tab-active:text-white text-neutral-400 foa">
                        Certified Experts
                      </span>
                      <span class="mt-1 hs-tab-active:text-white text-neutral-400 foa-book hidden hs-tab-active:block">
                        Certified experts with proven success in DoD contractor
                        certifications.
                      </span>
                    </span>
                  </span>
                </button>
                {/* btn */}
                <button
                  type="button"
                  class="hs-tab-active:bg-gray-800 hs-tab-active:shadow-md hs-tab-active:border hs-tab-active:border-neutral-600 hs-tab-active:hover:border-neutral-600 text-start hover:bg-gray-800 focus:outline-none focus:bg-gray-800 p-4 md:p-5 rounded-xl target-btn"
                  id="tabs-with-card-item-3"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-card-3"
                  aria-controls="tabs-with-card-3"
                  role="tab"
                >
                  <span class="flex gap-x-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="shrink-0 mt-1 size-6 md:size-7 hs-tab-active:text-white text-neutral-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                      />
                    </svg>
                    <span class="grow">
                      <span class="block text-lg font-semibold hs-tab-active:text-white text-neutral-400 foa">
                        Flexible solutions
                      </span>
                      <span class="hidden hs-tab-active:block mt-1 hs-tab-active:text-white text-neutral-400 foa-book">
                        Flexible solutions tailored to your organization’s
                        needs.
                      </span>
                    </span>
                  </span>
                </button>
                {/* btn */}
                <button
                  type="button"
                  class="hs-tab-active:bg-gray-800 hs-tab-active:shadow-md hs-tab-active:border hs-tab-active:border-neutral-600 hs-tab-active:hover:border-neutral-600 text-start hover:bg-gray-800 focus:outline-none focus:bg-gray-800 p-4 md:p-5 rounded-xl target-btn"
                  id="tabs-with-card-item-4"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-card-4"
                  aria-controls="tabs-with-card-4"
                  role="tab"
                >
                  <span class="flex gap-x-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="shrink-0 mt-1 size-6 md:size-7 hs-tab-active:text-white text-neutral-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>

                    <span class="grow">
                      <span class="block text-lg font-semibold hs-tab-active:text-white text-neutral-400 foa">
                        CMC Readiness
                      </span>
                      <span class="hidden hs-tab-active:block mt-1 hs-tab-active:text-white text-neutral-400 foa-book">
                        Advisory services to support Continuous Process
                        Improvement
                      </span>
                    </span>
                  </span>
                </button>
              </nav>
            </div>

            <div class="lg:col-span-6">
              <div class="relative">
                <div>
                  <div
                    id="tabs-with-card-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-1"
                  >
                    <img
                      class="shadow-xl rounded-xl dark:shadow-gray-900/20"
                      src="https://imagedelivery.net/DmjG_TsKdaET_s4bmkVMyw/35c51788-a274-492e-a443-6032248a1000/public"
                      alt="Features Image"
                    />
                  </div>

                  <div
                    id="tabs-with-card-2"
                    class="hidden"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-2"
                  >
                    <img
                      class="shadow-xl rounded-xl dark:shadow-gray-900/20"
                      src="https://imagedelivery.net/DmjG_TsKdaET_s4bmkVMyw/e534e455-9419-4a4f-5542-400ca47f6800/public"
                      alt="Features Image"
                    />
                  </div>

                  <div
                    id="tabs-with-card-3"
                    class="hidden"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-3"
                  >
                    <img
                      class="shadow-xl rounded-xl dark:shadow-gray-900/20"
                      src="https://imagedelivery.net/DmjG_TsKdaET_s4bmkVMyw/e1fe45f7-44b1-4d80-3f46-22ed527ecf00/public"
                      alt="Features Image"
                    />
                  </div>

                  <div
                    id="tabs-with-card-4"
                    class="hidden"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-4"
                  >
                    <img
                      class="shadow-xl rounded-xl dark:shadow-gray-900/20"
                      src="https://imagedelivery.net/DmjG_TsKdaET_s4bmkVMyw/2c88a024-f3a0-4142-34ab-96e815a87800/public"
                      alt="Features Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="absolute inset-0 grid grid-cols-12 size-full">
            <div class="col-span-full lg:col-span-7 lg:col-start-6 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
