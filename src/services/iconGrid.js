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
                    fill="none"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="shrink-0 size-8 text-white mx-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
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
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
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
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
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
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="shrink-0 size-8 text-white mx-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
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
