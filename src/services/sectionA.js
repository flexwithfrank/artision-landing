/* eslint-disable jsx-a11y/img-redundant-alt */
import Cta from "./cta";
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
                  CMMC 2.0 ensures contractors meet cybersecurity standards to
                  protect sensitive government data. Whether you’re aiming for
                  Level 1 (Foundational) or Level 3 (Expert), our customer
                  focused approach is hands-on throughout your CMMC 2.0
                  compliance journey.
                </p>

                <footer class="mt-6">
                  <div class="flex items-center">
                    <div class="ms-4 md:ms-0">
                      <div class="text-base font-semibold text-white">
                        Karen Fleckner
                      </div>
                      <div class="text-xs text-neutral-400">
                        President & CEO | Artesion Inc.
                      </div>
                    </div>
                  </div>
                  <div class="my-4">
                    <Cta text="Schedule Consultation" />
                  </div>
                </footer>
              </blockquote>
              {/* <!-- End Blockquote --> */}
            </div>
            {/* <!-- End Col --> */}

            <div class="block my-12 md:my-0">
              <img
                class="rounded-xl"
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/09m/paw/fnp/Screenshot%202024-11-29%20at%203.19.30%20PM%201%20%281%29.png"
                alt="Image Description"
              />
            </div>

            {/* <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
              <img
                class="w-full object-cover rounded-xl"
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/89m/igq/pnl/Screenshot%202024-11-29%20at%203.19.49%20PM%201%20%281%29.png"
                alt="Description of the image content"
              />
            </div> */}
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
       
        </div>
      </div>
      {/* <!-- End Testimonials --> */}
    </>
  );
}
