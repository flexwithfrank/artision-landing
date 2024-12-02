import FormV3 from "../formV3";
export default function ContactForm() {
  return (
    <>
      {/* <!-- Contact --> */}
      <div id="contact-form" class="bg-gray-900 bg-gradient-to-t from-black to-transparent">
        <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          {/* <!-- Title --> */}
          <div class="max-w-3xl mb-10 lg:mb-14">
            <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              Ready to take the first step?
            </h2>
            <p class="mt-1 text-neutral-400">
              Let’s discuss your compliance goals today
            </p>
          </div>
          {/* <!-- End Title --> */}

          {/* <!-- Grid --> */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
            <div class="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
              <FormV3 />
            </div>
            {/* <!-- End Col --> */}

            <div class="space-y-14">
             
              {/* <!-- Item --> */}
              <div class="flex gap-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="shrink-0 size-8 text-neutral-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>

                <div class="grow">
                  <h4 class="text-white font-semibold">CMMC Compliance</h4>

                  <p class="mt-1 text-neutral-400 text-sm not-italic">
                    Certified CMMC 2.0 compliance experts are ready to help you
                  </p>
                </div>
              </div>
              {/* <!-- End Item --> */}

              {/* <!-- Item --> */}
              <div class="flex gap-x-5">
                <svg
                  class="shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div class="grow">
                  <h4 class="text-white font-semibold">Email us:</h4>

                  <a
                    class="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-none focus:text-neutral-200 foa-book"
                    href="#mailto:example@site.co"
                    target="_blank"
                  >
                    placeholder@artesion.com
                  </a>
                </div>
              </div>
              {/* <!-- End Item --> */}

              {/* <!-- Item --> */}
              <div class="flex gap-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="shrink-0 size-6 text-neutral-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>

                <div class="grow">
                  <h4 class="text-white font-semibold">
                    Schedule a consultation
                  </h4>
                  <p class="mt-1 text-neutral-400 text-sm">
                    Schedule a consultation with our compliance experts by using
                    the calendar below
                  </p>
                  <p class="mt-2">
                    <a
                      class="group inline-flex items-center gap-x-2 font-medium text-sm text-blue-500 decoration-2 hover:underline focus:outline-none focus:underline"
                      href="#"
                    >
                      Schedule a consultation
                      <svg
                        class="shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
              {/* <!-- End Item --> */}
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
      {/* <!-- End Contact --> */}
    </>
  );
}
