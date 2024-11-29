import Icon from "./icon";
export default function IconGrid() {
  return (
    <>
      <div class="max-w-full py-10 lg:py-14 mx-auto">
        <div class="max-w-5xl mx-auto">
          {/* <!-- Grid --> */}
          <div class="grid md:grid-cols-2 gap-6 lg:gap-12">
            {/* <!-- Icon Block --> */}
            <div class="flex gap-x-5 sm:gap-x-8">
              <Icon
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="shrink-0 size-8 text-white mx-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                }
              />
              <div class="grow">
                <h3 class="text-base sm:text-lg font-semibold text-white">
                  Expert Knowledge
                </h3>
                <p class="mt-1 text-gray-100">
                  Artesion and our partners provide expert knowledge and
                  experience to support your CMMC 2.0 mission readiness
                  compliance.
                </p>
              </div>
            </div>
            {/* break */}

            <div class="flex gap-x-5 sm:gap-x-8">
              <Icon
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="shrink-0 size-8 text-white mx-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                }
              />
              <div class="grow">
                <h3 class="text-base sm:text-lg font-semibold text-white">
                  Certified Experts
                </h3>
                <p class="mt-1 text-gray-100">
                  Certified experts with proven success in DoD contractor
                  certifications.
                </p>
              </div>
            </div>
            {/* break */}

            <div class="flex gap-x-5 sm:gap-x-8">
              <Icon
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="shrink-0 size-8 text-white mx-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                }
              />
              <div class="grow">
                <h3 class="text-base sm:text-lg font-semibold text-white">
                  Flexible solutions
                </h3>
                <p class="mt-1 text-gray-100">
                  Flexible solutions tailored to your organization’s needs.
                </p>
              </div>
            </div>
            {/* break */}

            <div class="flex gap-x-5 sm:gap-x-8">
              <Icon
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="shrink-0 size-8 text-white mx-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                }
              />
              <div class="grow">
                <h3 class="text-base sm:text-lg font-semibold text-white">
                  CMC Readiness
                </h3>
                <p class="mt-1 text-gray-100">
                  Advisory services to support Continuous Process Improvement
                </p>
              </div>
            </div>
            {/* break */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
    </>
  );
}
