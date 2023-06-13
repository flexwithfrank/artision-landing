import React from "react";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Solution", href: "/Solutions" },
  { name: "Contact", href: "/contact" },
  { name: "Team", href: "/teammembers" },
  { name: "Careers", href: "/Careers" },
];

const NavBarLightV2 = ({ color }) => {
  return (
    <>
      <Popover as="header" className="relative">
        <div style={{ backgroundColor: color }} className="bg-white pt-6 top-0">
          <nav
            className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center justify-between md:w-auto">
                <Link to="/">
                  <span className="sr-only">Artesion</span>
                  <img
                    className="h-10 w-auto sm:h-10"
                    src="https://ik.imagekit.io/dy6awnd3c/artesion_dark_website.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672685377583"
                    alt=""
                  />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex items-end align-end justify-end mx-auto">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-base font-medium text-black hover:text-gray-300 foa-book"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link
                to="/about"
                className="text-base font-medium text-black hover:text-gray-300 foa"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-transparent bg-blue-800 px-4 py-2 text-base font-medium text-white hover:bg-gray-700 foa-book"
              >
                Contact Us
              </Link>
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
            className="absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition md:hidden"
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
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 foa-book text-center"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <Link
                    to="/contact"
                    className="block w-full rounded-md bg-blue-800 py-3 px-4 text-center font-medium text-white shadow hover:bg-blue-700 foa"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="mt-6 px-5">
                  <p className="text-center text-base font-medium text-gray-500">
                    <Link
                      to="/about"
                      className="text-gray-900 hover:underline foa"
                    >
                      Learn More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default NavBarLightV2;
