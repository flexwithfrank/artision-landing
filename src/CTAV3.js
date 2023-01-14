/* This example requires Tailwind CSS v2.0+ */
export default function CTAV4() {
  return (
    <div className=" px-10 py-10">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between rounded-lg lg:py-16 lg:px-8 bg-gray-50">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Leading the way</span>
          <span className="block text-blue-800">
            In Resiliency Systems.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md ">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-blue-800 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 foa-book"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-full ">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-indigo-50 foa-book"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
