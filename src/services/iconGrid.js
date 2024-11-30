import Icon from "./icon";
export default function IconGrid() {
  return (
    <>
      <div class="max-w-full py-10 lg:py-14 mx-auto">
        <div class="max-w-5xl mx-auto">
          {/* <!-- Grid --> */}
          <div class="grid md:grid-cols-2 gap-6 lg:gap-12">
            {/* <!-- Icon Block --> */}
            <div class="flex gap-x-5 sm:gap-x-8 items-center">
              <Icon
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    width="24"
                    height="24"
                    stroke="currentColor"
                    className="shrink-0 size-8 text-white mx-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                }
              />
              <div class="grow">
                <h3 class="text-base sm:text-lg font-semibold text-white">
                  Readiness Assessments
                </h3>
                {/* <p class="mt-1 text-gray-100">
                  Artesion and our partners provide expert knowledge and
                  experience to support your CMMC 2.0 mission readiness
                  compliance.
                </p> */}
              </div>
            </div>
            {/* break */}

            <div class="flex gap-x-5 sm:gap-x-8 items-center">
              <Icon
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    width="24"
                    height="24"
                    stroke="currentColor"
                    className="shrink-0 size-8 text-white mx-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                }
              />
              <div class="grow">
                <h3 class="text-base sm:text-lg font-semibold text-white">
                  Remediation Planning
                </h3>
              </div>
            </div>
            {/* break */}

            <div class="flex gap-x-5 sm:gap-x-8 items-center">
              <Icon
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    width="24"
                    height="24"
                    stroke="currentColor"
                    className="shrink-0 size-8 text-white mx-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                }
              />
              <div class="grow">
                <h3 class="text-base sm:text-lg font-semibold text-white">
                  Managed Services
                </h3>
              </div>
            </div>
            {/* break */}

            <div class="flex gap-x-5 sm:gap-x-8 items-center">
              <Icon
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    width="24"
                    height="24"
                    stroke="currentColor"
                    className="shrink-0 size-8 text-white mx-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                }
              />
              <div class="grow">
                <h3 class="text-base sm:text-lg font-semibold text-white">
                  Certification Assistance
                </h3>
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
