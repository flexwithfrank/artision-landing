/* This example requires Tailwind CSS v2.0+ */
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function CTAV2() {
  return (
    <div className="bg-[#eeeeee] pb-20">
      <div className="relative bg-gray-800 w-11/12 mx-auto rounded-lg">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 rounded-lg">
          <img
            className="h-full w-full object-cover rounded-l-lg"
            src="https://ik.imagekit.io/dy6awnd3c/marc-olivier-jodoin-NqOInJ-ttqM-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673734711198"
            alt=""
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-lg font-semibold text-gray-300">
              Global Support
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              We’re here to make a difference
            </p>
            <p className="mt-3 text-lg text-gray-300">
              A resilient system today means the ability to withstand challenges
              of protection and cost avoidance in the future with rapid and
              unpredictable changes in the world today.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 foa-book"
                >
                  Contact Us
                  <ArrowTopRightOnSquareIcon
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
