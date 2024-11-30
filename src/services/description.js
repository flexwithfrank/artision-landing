import Icon from "./icon";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Description() {
  return (
    <div>
      {/* <!-- Case Stories --> */}
      <div class="bg-gray-900 bg-gradient-to-t from-black to-transparent">
        <div class="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
          {/* <!-- Title --> */}
          <div class="max-w-3xl mb-10 lg:mb-14">
            <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              What is CMMC 2.0?
            </h2>
            <p class="mt-1 text-neutral-400">
              CMMC 2.0 is designed for organizations that are part of the
              Defense Industrial Base (DIB), specifically those that work with
              the U.S. Department of Defense (DoD) and handle sensitive
              government information. The framework is aimed at ensuring
              adequate cybersecurity measures are in place to protect two main
              types of information:
            </p>
          </div>
          {/* <!-- End Title --> */}

          {/* <!-- Card Grid --> */}
          <div class="grid grid-cols-1 lg:grid-cols-2 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
            {/* <!-- Card --> */}
            <a
              class="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-gray-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#73aafa]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              href="#"
            >
              <div class="mb-5">
                {/* <!-- Icon --> */}
                <Icon
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="shrink-0 size-7 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                      />
                    </svg>
                  }
                />
                {/* <!-- End Icon --> */}
                <div class="mt-5">
                  <h2 class="font-bold text-5xl text-white">FCI</h2>
                  <h3 class="mt-5 font-medium text-lg text-white">
                    Federal Contract Information
                  </h3>
                  <p class="mt-1 text-neutral-400">
                    <ul class="list-disc list-inside mt-4 text-neutral-400 space-y-7 text-md">
                      <li class="text-sm">
                        {" "}
                        Organizations handling FCI need to meet CMMC Level 1
                        requirements, which include 17 basic cybersecurity
                        practices outlined in FAR 52.204-21.{" "}
                      </li>
                      <li class="text-sm">
                        {" "}
                        These organizations typically provide goods or services
                        to the DoD that involve non-public but non-classified
                        information.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <p class="mt-auto">
                <span class="font-medium text-sm text-[#73aafa] pb-1 border-b-2 border-neutral-700 group-hover:border-[#73aafa] transition focus:outline-none group-focus:border-[#73aafa]">
                  Schedule Consultation
                </span>
              </p>
            </a>
            {/* <!-- End Card --> */}

            {/* <!-- Card --> */}
            <a
              class="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-gray-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#73aafa]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              href="#"
            >
              <div class="mb-5">
                {/* <!-- Icon --> */}
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
                      className="shrink-0 size-7 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  }
                />
                {/* <!-- End Icon --> */}
                <div class="mt-5">
                  <h2 class="font-bold text-5xl text-white">CUI</h2>
                  <h3 class="mt-5 font-medium text-lg text-white">
                    Unclassified Information
                  </h3>
                  <p class="mt-1 text-neutral-400">
                    <ul class="list-disc list-inside mt-4 text-neutral-400 space-y-7 text-md">
                      <li class="text-sm">
                        {" "}
                        Organizations that manage CUI must comply with CMMC
                        Level 2 or Level 3, depending on the sensitivity of the
                        data.{" "}
                      </li>
                      <li class="text-sm">
                        {" "}
                        Level 2 requires alignment with NIST SP 800-171
                        standards, while Level 3 introduces additional security
                        practices for organizations handling highly sensitive
                        information.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <p class="mt-auto">
                <span class="font-medium text-sm text-[#73aafa] pb-1 border-b-2 border-neutral-700 group-hover:border-[#73aafa] transition focus:outline-none group-focus:border-[#73aafa]">
                  Schedule Consultation
                </span>
              </p>
            </a>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Card Grid --> */}
        </div>
      </div>
      {/* <!-- End Case Stories --> */}
    </div>
  );
}
