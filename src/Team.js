
const people = [
  {
    name: "Karen Fleckner",
    role: "President ＆ CEO",
    description:
      "Ms. Fleckner has 25 years of experience in the cleantech and sustainability sector.  She has successfully led various company programs that provide services around system integration for renewable micro-grid solutions utilizing Distributed Energy Resources (DER).  She has led commercialization efforts in fuel cells, fuel processing and desulphurization, waste-to-energy, gas-to-liquid biofuels, renewable systems, hydrogen infrastructure, and water purification. She has a BSC in Chemical Engineering. ",
    imageUrl:
      "https://ik.imagekit.io/dy6awnd3c/profile-placeholder.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1673406149698",
    twitterUrl: "#",
    linkedinUrl: "#",
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
  },
  {
    name: "Joseph Breit, Ph.D.",
    role: "Director of Power Systems",
    description:
      "Mr. Breit's experience spans over 35+ in power systems engineering, as a senior-level architect in both industrial and aircraft systems. Worked extensively on commercial and US DoD projects and has worked with academia, research firms, government agencies, and various companies on the development of power systems.  ",
    descriptionTwo: "—",
    descriptionThree: "—",
    imageUrl:
      "https://ik.imagekit.io/dy6awnd3c/profile-placeholder.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1673406149698",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "John Cowan",
    role: "Director of Water Systems",
    description:
      "Mr. Cowan brings over 40 years of experience in natural resources, water, and wastewater technology, and environmental policy both in North America and internationally, as VP for Parsons and  Sr. Scientist at Dow. He has led efforts to develop major water infrastructure projects across the US and the Middle East. John received his BS in Botany from the University of Washington and completed graduate work in Plant Pathology at the University of Idaho; he holds a Master’s degree in Transformational Leadership.",
    descriptionTwo: "",
    imageUrl:
      "https://ik.imagekit.io/dy6awnd3c/profile-placeholder.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1673406149698",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Hans Ewoldsen, P.E. Ph.D.",
    role: "Sr. Engineer",
    description:
      "Mr. Ewoldsen is an Environmental Engineer & Geological Engineer registered in the state of California, with expertise in water and wastewater engineering, project management, seismic parameters, with domestic and international water resource and supply management.  He has over 30 years of in-depth responsibility for leading, marketing, and managing consulting operations and execution of major projects and programs.  Mr. Ewoldsen's knowledge spans governmental, energy, environmental, and industrial sectors. ",
    descriptionTwo: "",
    imageUrl:
      "https://ik.imagekit.io/dy6awnd3c/profile-placeholder.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1673406149698",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Patrick Howard",
    role: "Director of Finance",
    description:
      "Mr. Howard's career in finance has spanned nearly 25 years, with a track record to the firm including well over a billion dollars of debt and equity financing.  He has worked in acquisitions and development, where he specialized in affordable housing structured financing.  Mr. Howard worked in investment banking focused on project financing for renewable energy and clean energy sources, as well as corporate financing via mergers and acquisitions.",
    descriptionTwo: "—",
    imageUrl:
      "https://ik.imagekit.io/dy6awnd3c/profile-placeholder.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1673406149698",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

export default function Team() {
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
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 rounded-lg">
                  <div className="aspect-w-3 aspect-h-2 rounded-lg">
                    <div class="group relative block bg-black rounded-lg">
                      <img
                        alt="Role"
                        src={person.imageUrl}
                        class="rounded-lg absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 shadow-lg"
                      />

                      <div class="relative p-8">
                        <p class="text-2xl font-bold text-white">
                          {person.name}
                        </p>

                        <div class="mt-20">
                          <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p class="text-sm text-white">
                              {person.description}
                            </p>
                            <p class="text-sm text-transparent">
                              {person.descriptionTwo}
                            </p>
                            <p class="text-sm text-transparent">
                              {person.descriptionThree}
                            </p>
                            <p class="text-sm text-transparent">
                              {person.descriptionThree}
                            </p>
                            <p class="text-sm text-transparent">
                              {person.descriptionThree}
                            </p>
                          </div>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-6 h-6 absolute bottom-0 left-0 m-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <p className="text-blue-800">{person.role}</p>
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
