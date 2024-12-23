/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

export default function NavBarV4({ bgColor, color, logo }) {
  return (
    <>
      <header
        style={{ backgroundColor: bgColor, color: color }}
        class="flex flex-wrap  md:justify-start md:flex-nowrap z-40 w-full"
      >
        <nav class="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-5 px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center gap-x-1">
            <Link to="/" class="flex items-center">
              <img src={logo} class="h-8 mr-3" alt="Artesion Logo" />
            </Link>
            {/* <!-- Collapse Button --> */}
            <button
              type="button"
              class="hs-collapse-toggle md:hidden relative size-10 flex justify-center items-center font-medium text-[12px] rounded-lg hover:bg-transparent focus:outline-none focus:bg-transparent disabled:opacity-50 disabled:pointer-events-none"
              id="hs-header-base-collapse"
              aria-expanded="false"
              aria-controls="hs-header-base"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-header-base"
            >
              <svg
                class="hs-collapse-open:hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                class="hs-collapse-open:block shrink-0 hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span class="sr-only">Toggle navigation</span>
            </button>
            {/* <!-- End Collapse Button --> */}
          </div>

          {/* <!-- Collapse --> */}
          <div
            id="hs-header-base"
            class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
            aria-labelledby="hs-header-base-collapse"
          >
            <div class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div class="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-6">
                <div class="grow">
                  <div class="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-6">
                    <Link
                      class="p-2 flex items-center text-md hover:bg-transparent rounded-lg focus:outline-none focus:bg-transparent dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 foa-book"
                      to="/"
                      target="_blank"
                      aria-current="page"
                    >
                      Home
                    </Link>
                    <Link
                      class="p-2 flex items-center text-md hover:bg-transparent rounded-lg focus:outline-none focus:bg-transparent dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 foa-book"
                      to="/about"
                      target="_blank"
                      aria-current="page"
                    >
                      About
                    </Link>

                    {/* <!-- Mega Menu --> */}
                    <div class="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
                      <button
                        id="hs-header-base-mega-menu-small"
                        type="button"
                        class="hs-dropdown-toggle w-full p-2 flex items-center text-md hover:bg-transparent rounded-lg focus:outline-none focus:bg-transparent dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 foa-book"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Mega Menu"
                      >
                        Services
                        <svg
                          class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>

                      <div
                        class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-80 hidden z-50 top-full bg-[#eee] md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 "
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="hs-header-base-mega-menu-small"
                      >
                        <div class="py-1 md:px-1 space-y-0.5">
                          {/* <!-- Link --> */}
                          <Link
                            class="p-3 flex gap-x-4 hover:bg-gray-50 focus:outline-none focus:bg-transparent rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            to="/services"
                            target="_blank"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              class="shrink-0 size-4 mt-1 text-gray-800 dark:text-neutral-200"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                              />
                            </svg>

                            <div class="grow">
                              <span class="block font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                CMMC 2.0 Compliance
                              </span>
                              <p class="text-sm text-gray-500 dark:text-neutral-500">
                                Secure your business with CMMC 2.0 compliance
                              </p>
                            </div>
                          </Link>
                          {/* <!-- End Link --> */}

                          <div class="my-2 border-t border-gray-100 dark:border-neutral-800"></div>

                          {/* <!-- Link --> */}
                          <Link
                            class="p-3 flex gap-x-4 hover:bg-gray-50 focus:outline-none focus:bg-transparent rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            to="/solutions"
                            target="_blank"
                          >
                            <svg
                              class="shrink-0 size-4 mt-1 text-gray-800 dark:text-neutral-200"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <line x1="22" x2="2" y1="12" y2="12" />
                              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                              <line x1="6" x2="6.01" y1="16" y2="16" />
                              <line x1="10" x2="10.01" y1="16" y2="16" />
                            </svg>

                            <div class="grow">
                              <span class="block font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                Artesion EDGE{" "}
                              </span>
                              <p class="text-sm text-gray-500 dark:text-neutral-500">
                                Compute, AI ⁄ ML, and analytics platform
                              </p>
                            </div>
                          </Link>
                          {/* <!-- End Link --> */}

                          <div class="my-2 border-t border-gray-100 dark:border-neutral-800"></div>

                          {/* <!-- Link --> */}
                          {/* <a
                            class="p-3 flex gap-x-4 hover:bg-transparent focus:outline-none focus:bg-transparent rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            href="#"
                          >
                            <svg
                              class="shrink-0 size-4 mt-1 text-gray-800 dark:text-neutral-200"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                              <path d="M18 14h-8" />
                              <path d="M15 18h-5" />
                              <path d="M10 6h8v4h-8V6Z" />
                            </svg>
                            <div class="grow">
                              <span class="block font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                Blog
                              </span>
                              <p class="text-sm text-gray-500 dark:text-neutral-500">
                                The latest news, feature releases, and how to
                                grow with data
                              </p>
                            </div>
                          </a> */}
                          {/* <!-- End Link --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Mega Menu --> */}

                    <Link
                      class="p-2 flex items-center text-md hover:bg-transparent rounded-lg focus:outline-none focus:bg-transparent dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 foa-book"
                      to="/solutions"
                      target="_blank"
                    >
                      Solutions
                    </Link>

                    <Link
                      class="p-2 flex items-center text-md hover:bg-transparent rounded-lg focus:outline-none focus:bg-transparent dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 foa-book"
                      to="/teammembers"
                      target="_blank"
                    >
                      Team
                    </Link>

                    <Link
                      class="p-2 flex items-center text-md hover:bg-transparent rounded-lg focus:outline-none focus:bg-transparent dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 foa-book"
                      to="/careers"
                      target="_blank"
                    >
                      Careers
                    </Link>
                  </div>
                </div>

                {/* <!-- Button Group --> */}
                <div class=" flex flex-wrap items-center gap-x-1.5">
                  <a
                    class="py-3 px-6 inline-flex items-center text-md rounded-full bg-blue-800 text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none foa-book font-semibold"
                    href="https://www.artesion.com/services#contact-form"
                  >
                    Book Consultation
                  </a>
                </div>
                {/* <!-- End Button Group --> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
