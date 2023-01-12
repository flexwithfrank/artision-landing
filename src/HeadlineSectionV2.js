/* This example requires Tailwind CSS v2.0+ */
export default function HeroSectionV2() {
  return (
    <div className="bg-[#eeeeee]">
      <div className="mx-auto max-w-7xl pt-12 pb-4 px-4 sm:py-18 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-extrabold text-green-900 foa pb-2"><span class="outline outline-green-900 rounded-full py-1 px-2">Sustainability</span></h2>
          <p className="mt-1 text-4xl tracking-tight text-green-900 sm:text-5xl lg:text-6xl foa-light">
            Artesion is investing in the
          </p>
          <p className="mt-1 text-4xl font-extrabold tracking-tight text-green-900 sm:text-5xl lg:text-6xl foa pt-4">
          Future of Sustainable Water.
          </p>
          <p className="mx-auto my-5 max-w-xl text-xl text-gray-500 foa-book">
          Donec adipiscing tristique risus nec feugiat. Elit ut aliquam purus sit. Sed velit dignissim sodales ut eu sem.
          </p>
          <button
            type="button"
            class="text-white bg-green-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 my-3 foa text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Learn More
            <svg
              aria-hidden="true"
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
