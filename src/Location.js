/* This example requires Tailwind CSS v2.0+ */
export default function Locations() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:pb-24 lg:px-8 border-t-2">
        <div className="divide-y-2 divide-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8 pt-6">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              Corporate Locations
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Los Angeles
                </h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>4556 Brendan Ferry</p>
                  <p className="mt-1">Los Angeles, CA 90210</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  New York
                </h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>886 Walter Streets</p>
                  <p className="mt-1">New York, NY 12345</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Toronto
                </h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>7363 Cynthia Pass</p>
                  <p className="mt-1">Toronto, ON N3Y 4H8</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Chicago
                </h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>726 Mavis Island</p>
                  <p className="mt-1">Chicago, IL 60601</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
