/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function AboutUsVideo() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
          <div className="relative h-full">
            <svg
              className="absolute right-full translate-y-1/3 translate-x-1/4 transform sm:translate-x-1/2 md:translate-y-1/2 lg:translate-x-full"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
              />
            </svg>
            <svg
              className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-14 sm:pb-12">
          {/* <Popover>
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <nav
                className="relative flex items-center justify-between sm:h-10 md:justify-center"
                aria-label="Global"
              >
                <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="https://ik.imagekit.io/dy6awnd3c/artesion_dark_website.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672685377583"
                        alt=""
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:space-x-10">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
                  <span className="inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Log in
                    </a>
                  </span>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://ik.imagekit.io/dy6awnd3c/artesion_dark_website.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672685377583"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100 hover:text-indigo-700"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover> */}

          <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              
              <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block foa-light">
                  Fit‒for‒Purpose resource
                </span>
                <span className="block text-blue-800 foa">
                  {" "}
                  security and resilient platform.
                </span>
              </motion.h1>
              <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.75 }}
              className="mx-auto mt-3 max-w-md text-md text-gray-500 sm:text-sm md:mt-5 md:max-w-3xl md:text-xl foa-book">
                We are a Technology ＆ Service Company that has a
                Fit‒for‒Purpose Resource Security and Resilient Platform that
                integrates breakthrough technologies to meet government,
                commercial industrial, and municipal customers power,water,data
                i.e. communications needs.
              </motion.div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="w-full flex-1 bg-blue-800" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <video
              class="min-w-full min-h-full relative object-cover rounded-xl"
              src="https://ik.imagekit.io/dy6awnd3c/video__6_.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1672686657255"
              autoPlay
              type="video/mp4"
              muted
              loop
            ></video>
          </div>
        </div>
      </div>
      <div className="bg-blue-800">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-12 sm:px-6 lg:px-8">
          <div>
            <div class=" bg-opacity-25">
              <div class="mx-auto max-w-7xl py-16 px-4 sm:py-12 sm:px-6 lg:px-8">
                <div class="lg:grid lg:grid-cols-2 lg:gap-8">
                  <h2 class="mx-auto max-w-md text-center text-2xl lg:text-4xl font-bold tracking-tight text-white lg:max-w-xl lg:text-left foa-light">
                    The worlds most innovative governments <span className="foa-book tapered2">trust Artesion.</span>
                  </h2>
                  <div class="mt-8 flow-root self-center lg:mt-0">
                    <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                      <div class="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                        <img
                          class="h-12"
                          src="https://ik.imagekit.io/dy6awnd3c/Untitled_design__3_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672720353755"
                          alt="Workcation"
                        />
                      </div>
                      <div class="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-1">
                        <img
                          class="h-12"
                          src="https://ik.imagekit.io/dy6awnd3c/2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672720353840"
                          alt="Tuple"
                        />
                      </div>
                      <div class="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                        <img
                          class="h-12"
                          src="https://ik.imagekit.io/dy6awnd3c/1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672720353858"
                          alt="Level"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
