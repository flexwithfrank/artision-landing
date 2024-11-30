/* eslint-disable react/jsx-no-target-blank */
export default function ComplianceBadge() {
    return (
      <div className="bg-transparent">
        <div class="relative overflow-hidden pt-4">
          <div class="relative z-0">
            <div class="max-w-5xl xl:px-0 mx-auto">
              <div class="mb-4">
                <h2 class="text-[#aaaaaa] haas-roman">
                  Over 700+ positive rating on Mindbody&copy; our trusted booking
                  partner.
                </h2>
              </div>
  
              <div class="flex md:flex-row flex-col gap-4 md:items-center justify-start ">
                <div class="flex items-center haas-roman">
                  <p class="ms-2 text-sm font-bold text-[#aaaaaa] haas-roman">
                    4.9/5
                  </p>
                  <span class="w-1 h-1 mx-1.5 bg-[#aaaaaa] rounded-full"></span>
                  <a
                    href="https://www.mindbodyonline.com/explore/locations/studio-3-fitness"
                    target="_blank"
                    class="text-sm font-medium text-[#aaaaaa] underline hover:no-underline haas-roman"
                  >
                    789+ ratings
                  </a>
                </div>
                <span class=" border-e border-white/30 w-px h-5 mx-2 hidden md:inline-block"></span>
  
                <a
                  href="https://www.mindbodyonline.com/explore/locations/studio-3-fitness"
                  className="w-48"
                  target="_blank"
                >
                  <img
                    src="https://storage.googleapis.com/msgsndr/M4LpH9VZkgr3fIOnQTtk/media/67156aa1225ebed584ab2c94.png"
                    alt="Hero Image"
                    class="w-48 h-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  