import React from "react";

const people = [
  {
    name: "Karen Fleckner",
    role: "President ＆ CEO",
    description:
      "Ms. Fleckner has 25 years of experience in the Clean Tech and sustainability sector.  She has successfully led various company programs that provide services around system integration for renewable micro-grid solutions utilizing Distributed Energy Resources (DER).  She has led commercialization efforts in fuel cells, fuel processing and desulphurization, waste-to-energy, gas-to-liquid biofuels, renewable systems, hydrogen infrastructure, and water purification. She has a BSC in Chemical Engineering. ",
    imageUrl:
      "https://ik.imagekit.io/dy6awnd3c/profile-placeholder.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1673406149698",
    twitterUrl: "#",
    linkedinUrl: "#",
    id: "karenCollapse",
    href: "#karenCollapse",
  },
  {
    name: "Michael Alexander",
    role: "Chief Technology Officer",
    description:
      "Technology, Development, Deployment & Operations and is the CTO of Artesion, Inc. He has worked globally across telecom carriers on new emerging and differentiating technologies. Mike aligns new technology & solutions with a business strategy to enable clients’ emerging businesses, helping them bring innovative technologies to market. He has worked extensively with business partners in many areas, 5G networking, cloud, blockchain, IoT, LORA networks, Video, M2M and service delivery platforms solutions. Mike was the IBM Distinguished Engineer and CTO/Chief Architect for the Global Telco Industry, bringing the IBM portfolio and views to clients on industry topics, issues, and business models. He ran the combined IBM & Red Hat 5G Lab for the Industry in development and enabling demonstration of IBM capabilities in 5G networking solutions deployment and operations.",
    imageUrl:
      "https://ik.imagekit.io/dy6awnd3c/profile-placeholder.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1673406149698",
    twitterUrl: "#",
    linkedinUrl: "#",
    id: "mikeCollapse",
    href: "#mikeCollapse",
  },
  {
    name: "Patrick Howard",
    role: "Director of Finance",
    description:
      "Mr. Howard's career in finance has spanned nearly 25 years, with a track record to the firm including well over a billion dollars of debt and equity financing.  He has worked in acquisitions and development, where he specialized in affordable housing structured financing.  Mr. Howard worked in investment banking focused on project financing for renewable energy and clean energy sources, as well as corporate financing via mergers and acquisitions.",
    imageUrl:
      "https://ik.imagekit.io/dy6awnd3c/profile-placeholder.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1673406149698",
    twitterUrl: "#",
    linkedinUrl: "#",
    id: "patrickCollapse",
    href: "#patrickCollapse",
  },
  {
    name: "Alexander Ferguson",
    role: "VP of Global Security",
    description:
      "Mr. Ferguson has vast experience that includes delivering strategic, enterprise-level development and consulting to U.S. Federal Government and commercial customers on security, technology, and business alignment with over 25 years of technical computer, network, security, policy and global strategy experience in Federal Agencies as well as global corporations, working with Cloud, Virtualization, Austere-Locations, and Global service delivery.",
    descriptionTwo: "—",
    imageUrl:
      "https://ik.imagekit.io/dy6awnd3c/profile-placeholder.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1673406149698",
    twitterUrl: "#",
    linkedinUrl: "#",
    id: "alexCollapse",
    href: "#alexCollapse",
  },

  { title: "Advisory Board",
    name: "The Honorable Alex Beehler",
    role: "Advisor",
    description:
      "Mr. Beehler has served as the Senate-confirmed Assistant Secretary of the Army for Installations, Energy, and Environment, as well as the Acting Deputy Under Secretary of Defense for Installations and Environment and the Assistant Deputy Under Secretary for Environment, Safety, and Occupational Health. Mr. Beehler was the first DoD Chief Sustainability Officer, responsible for implementing the President’s 2007 Executive Order 13423 on Energy, Environment, and Transportation. Mr. Beehler also served as a senior trial attorney in the Department of Justice, Environment and Natural Resources Division, Environmental Enforcement Section, and as a counsel on the Senate Judiciary Committee. Mr. Beehler earned a J.D./LL.B., from University of Virginia School of Law and A.B., Public and International Affairs, from Princeton University.",
    imageUrl:
      "https://ik.imagekit.io/dy6awnd3c/profile-placeholder.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1673406149698",
    twitterUrl: "#",
    linkedinUrl: "#",
    id: "johnCollapse",
    href: "#johnCollapse",
  },
  {
    name: "LTG Joseph Martz, US Army (ret)",
    role: "Advisor",
    description:
      "Lieutenant General (ret) Joe Martz departed active service in 2014 as the only General Officer in a generation to serve at the executive level in the Requirements, Programming, and Budgeting processes. Coupling these executive-level skills with his deep experience in training development and support at the U.S. Army’s National Training Center and U.S. Army Central’s Udari Training Range (Kuwait).  Since July 2016, LTG (ret) Martz has served as the Senior Observer / After Action Review Facilitator for the two annual ROK-US Combined Forces Command’s theater level exercises in the Republic of Korea. He also serves on the Advisory Board for American Corporate Partners which supports transitioning Soldiers.",
    imageUrl:
      "https://ik.imagekit.io/dy6awnd3c/profile-placeholder.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1673406149698",
    twitterUrl: "#",
    linkedinUrl: "#",
    id: "joeCollapse",
    href: "#joeCollapse",
  },
  {
    name: "US Army Jon Hunter",
    role: "Advisor",
    description:
      "Jon  was served six years as the deputy to the garrison commander at Fort Campbell. Jon holds a Master’s Degree from the U.S. Army Command and General Staff College’s School of Advanced Military Studies, a Master’s Degree from the U.S. Army War College, and is a graduate of the War College’s Advanced Strategic Arts Program. He is also a contributing author to “National Security Challenges for the 21st Century” published by Strategic Studies Institute in 2004.",
    imageUrl:
      "https://ik.imagekit.io/dy6awnd3c/profile-placeholder.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1673406149698",
    twitterUrl: "#",
    linkedinUrl: "#",
    id: "hunterCollapse",
    href: "#hunterCollapse",
  },
];

export default function TeamV2() {
  return (
    <div className="bg-[#eeeeee] pt-24">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight sm:text-6xl text-blue-800">
              The Artesion Team
            </h2>
            <p className="text-xl text-gray-500">
              Artesion’s mission is to be a leader in resilient platform systems
              and infrastructure projects to empower our customers with
              long‒term security supply of resource solutions.
            </p>
          </div>

          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-2 sm:space-y-0 lg:grid-cols-1 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 rounded-lg">
                  <section>
                    <div class="relative items-center w-full px-5 py-6 mx-auto md:px-2 lg:px-24 max-w-7xl border-b-2 border-gray-200">
                      <div class="grid w-full grid-cols-1 lg:gap-12 mx-auto lg:grid-cols-2">
                        <div class="p-6">
                        <div class="mx-auto py-2 text-xl leading-none tracking-tighter text-neutral-600  foa-book absolute top-0 left-0">
                            {person.title}
                        </div>
                          <h1 class="mx-auto mb-4 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl foa">
                            {person.name}
                          </h1>
                          <p class="mx-auto text-base leading-relaxed text-gray-500">
                            <a
                              className="inline-flex align-center items-center justify-center gap-1 text-gray-500"
                              data-bs-toggle="collapse"
                              href={person.href}
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              {" "}
                              Read bio
                              <span className="inline-flex">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                  />
                                </svg>
                              </span>
                            </a>
                          </p>
                          {/* linked */}

                          <div className="space-y-2">
                            <div class="collapse" id={person.id}>
                              <div class="block p-6 rounded-lg bg-transparent foa-book text-gray-500">
                                {person.description}
                              </div>
                            </div>

                            <ul role="list" className="flex space-x-5">
                              <li>
                                <a
                                  href={person.twitterUrl}
                                  className="text-gray-400 hover:text-gray-500"
                                >
                                  <span className="sr-only">Twitter</span>
                                  <svg
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href={person.linkedinUrl}
                                  className="text-gray-400 hover:text-gray-500"
                                >
                                  <span className="sr-only">LinkedIn</span>
                                  <svg
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="p-6">
                          <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-blue-800 lg:text-3xl foa">
                            {person.role}
                          </h1>
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
  );
}
