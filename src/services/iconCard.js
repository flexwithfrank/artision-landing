export default function IconCard({ text }) {
  return (
    <>
      {/* <!-- Card --> */}
      <div class="group flex flex-col justify-center items-center bg-gray-900 shadow-sm rounded-xl border border-neutral-600 hover:shadow-md focus:outline-none focus:shadow-md transition h-full">
        <div class="p-4 md:p-8">
          <div class="flex justify-between items-center gap-x-3">
            <div class="grow">
              <h3 class="font-bold text-white sm:text-3xl text-xl">{text}</h3>
            </div>
            <div>
              <svg
                class="shrink-0 size-12 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Card --> */}
    </>
  );
}
