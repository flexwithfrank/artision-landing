import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Form() {

  return (
    <>
      <header className="relative  sm:pb-8 mt-6 bg-gray-50">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://ik.imagekit.io/dy6awnd3c/thisisengineering-raeng-WjOWazUPAss-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672804485002"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gradient-to-l from-blue-800 to-cyan-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto pt-24 max-w-md px-4 sm:pt-60 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
       
        </div>
      </header>

      <div className="relative pt-20 md:pt-0">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Learn more about Artesion
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Artesion’s mission is to be a leader in resilient platform
                systems and infrastructure projects.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>1201 Pacific Avenue, Suite 600 </p>
                    <p>Tacoma, WA 98𝟦02</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+1 253 203 3125</span>{" "}
                    <span className="ml-3">Fax +1 253 203 3101</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">info@artesion.com</span>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-base text-gray-500">
                Looking for careers?{" "}
                <a href="#" className="font-medium text-gray-700 underline">
                  View all job openings
                </a>
                .
              </p>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <form
                action="https://studio3fit.us11.list-manage.com/subscribe/post?u=c2d7cac43ff9dc962a9b9e8d9&amp;id=9481f12b1a&amp;f_id=00499de0f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="FNAME"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="EMAIL"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="PHONE"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="MESSAGE"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div>
                  <button
                    type="submit" value="Subscribe" name="subscribe"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-800 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
