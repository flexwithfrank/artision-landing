import { Link } from "react-router-dom";

/* This example requires Tailwind CSS v2.0+ */
export default function CTAV4() {
  return (
    <div className=" px-10 py-10">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between rounded-lg lg:py-16 lg:px-8 bg-gray-900 ">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Partner with the Leader</span>
          <span className="block text-white">in Resiliency Systems.</span>
        </h2>
        <div className="mt-8 gap-4 lg:flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md ">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-blue-800 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 foa-book"
            >
              Contact us
            </Link>
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-3 inline-flex rounded-full ">
            <Link
              to="about"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-base font-medium text-black hover:bg-indigo-50 foa-book"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
