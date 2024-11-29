/* eslint-disable jsx-a11y/img-redundant-alt */
export default function SectionA() {
  return (
    <>
      {/* <!-- Testimonials --> */}
      <div class="bg-black bg-gradient-to-t from-gray-900 to-transparent">
        <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          {/* <!-- Title --> */}
          <div class="max-w-3xl mb-10 lg:mb-14">
            <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              Who Does Not Need CMMC 2.0?
            </h2>
            <p class="mt-1 text-neutral-400">
              Companies that do not work on DoD contracts or do not handle FCI
              or CUI.
            </p>
            <p class="mt-1 text-neutral-400">
              Contracts where no sensitive information is shared may not require
              CMMC compliance.
            </p>
          </div>
          {/* <!-- End Title --> */}

          {/* <!-- Grid --> */}
          <div class="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
            <div>
              {/* <!-- Blockquote --> */}
              <blockquote>
                <p class="font-medium text-lg text-white md:text-2xl md:leading-normal xl:leading-normal">
                CMMC 2.0 ensures contractors meet cybersecurity standards to protect sensitive government data. Whether you’re aiming for Level 1 (Foundational) or Level 3 (Expert), our customer focused approach is hands-on throughout your CMMC 2.0 compliance journey.
                </p>

                <footer class="mt-6">
                  <div class="flex items-center">
                    <div class="md:hidden flex-shrink-0">
                      <img
                        class="size-12 rounded-full"
                        src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Image Description"
                      />
                    </div>
                    <div class="ms-4 md:ms-0">
                      <div class="text-base font-semibold text-white">
                        Karen Fleckner
                      </div>
                      <div class="text-xs text-neutral-400">
                        President & CEO | Artesion Inc.
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
              {/* <!-- End Blockquote --> */}
            </div>
            {/* <!-- End Col --> */}

            <div class="hidden md:block mb-24 md:mb-0">
              <img
                class="rounded-xl"
                src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image Description"
              />
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
      {/* <!-- End Testimonials --> */}
    </>
  );
}
