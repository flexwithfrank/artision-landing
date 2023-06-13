import React from "react";

const listing = [
  {
    area: "Engineering",
    role: "Senior Full Stack Backend Engineer",
    type: "Full-time",
    location: "Seattle, WA",
    workType: "Remote",
    cta: "Apply Now",
  },
];

export default function CareersContent() {
  return (
    <>
      <div className="bg-[#eeeeee] pt-8">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl tracking-tight sm:text-6xl text-blue-800">
                Careers
              </h2>
              <p className="text-xl text-gray-500 foa-book">
                We're seeking talented individuals like you to join our
                exceptional team.
              </p>
              <h2 className="text-3xl tracking-tight sm:text-4xl text-blue-800 pt-20 opacity-50">
                No openings at this time.
              </h2>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-2 sm:space-y-0 lg:grid-cols-1 lg:gap-x-8">
              {listing.map((list) => (
                <li key={list.name}>
                  <div className="space-y-4 rounded-lg hidden">
                    <section>
                      <div className="relative flex flex-col justify-center items-center overflow-hidden p-2">
                        <div className="bg-white shadow w-full flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md">
                          <div>
                            <span className="text-blue-800 text-sm foa-book">
                              {list.area}
                            </span>
                            <h3 className="mt-px foa">{list.role}</h3>
                            <div className="flex items-center gap-3 mt-2">
                              <span className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm foa-book">
                                {list.type}
                              </span>
                              <span className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm foa-book">
                                {list.workType}
                              </span>
                              <span className="text-slate-600 text-sm flex gap-1 items-center foa-book">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                {list.location}
                              </span>
                            </div>
                          </div>
                          <div>
                            <button>
                              <a className="bg-blue-800 text-white font-medium px-7 py-2 rounded-full flex gap-1 items-center foa-book">
                                {list.cta}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                  />
                                </svg>
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
