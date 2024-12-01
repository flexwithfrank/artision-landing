import Logo from "./logo";
export default function Clients() {
  return (
    <div>
      {/* <!-- Clients --> */}
      <div class="relative overflow-hidden bg-gray-900 w-full">
        <div class="relative z-10">
          <div class="max-w-5xl px-4 xl:px-0 mx-auto">
            <div class="mb-4">
              <h2 class="text-neutral-400 sm:text-2xl text-2xl">
                Our Trusted Security Partner
              </h2>
            </div>

            <div class="flex justify-between gap-6">
              {/* img logo */}
              <img
                src="https://imagedelivery.net/DmjG_TsKdaET_s4bmkVMyw/9e3a9726-8ce1-4e1a-729d-61adb4caae00/public"
                alt="Logo"
                class="h-12 w-auto"
              />
            </div>
            <hr class="border-neutral-600 mt-12" />
          </div>
        </div>
      </div>
      {/* <!-- End Clients --> */}
    </div>
  );
}
