/* This LearnMore requires Tailwind CSS v2.0+ */
import {
  InboxIcon,
  SparklesIcon,
  BiTrendingUp,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function LearnMore() {
  return (
    <div className="relative overflow-hidden bg-[#eeeeee] pt-16 pb-32 text-left">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="flex rounded-md">
                  <div className="text-sm font-extrabold text-blue-800 foa pb-2 text-left">
                    <span class="outline outline-blue-800 rounded-md py-1 px-2">
                      RESILIENCY
                    </span>
                  </div>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-blue-800 foa">
                  Resource Security Platform
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Artesion, Inc is a Technology & Service Company that has
                  a Fit-for-Purpose Resource Security and Resilient Platform
                  that integrates breakthrough technologies to meet government,
                  commercial industrial, and municipal customer's
                  power, water, data.
                </p>
                <div className="mt-6">
                  <Link
                    to="/solutions"
                    className="inline-flex rounded-full border border-transparent bg-blue-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 foa-book"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                    diam. Sit orci risus aenean curabitur donec aliquet. Mi
                    venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://ik.imagekit.io/dy6awnd3c/Karen_Fleckner_Photo_-_Karen_Fleckner_pn.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672708581603"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700 foa-light">
                      Karen Fleckner, Chief Executive Officer
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://ik.imagekit.io/dy6awnd3c/robynne-hu-HOrhCnQsxnQ-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672707968554"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div>
                <span className="flex rounded-md">
                  <div className="text-sm font-extrabold text-blue-800 foa pb-2 text-left">
                    <span class="outline outline-blue-800 rounded-mdsw py-1 px-2">
                      SOLUTIONS
                    </span>
                  </div>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-blue-800">
                  Risk Analysis Solution
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Artesions platform integrates hardware and software capabilities
                  for security of supply of resources and on-demand availability
                  and quality of valuable resources; such as water, power, and
                  data. Our solutions consider a risk analysis
                  integrated approach that thinks through internal and external
                  threat scenarios, coupling the probability of events and
                  cascading failures with the capital and recurring recovery
                  cost; we then provide a solution for mitigation.
                </p>
                <div className="mt-6">
                <Link
                    to="/solutions"
                    className="inline-flex rounded-full border border-transparent bg-blue-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 foa-book"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://ik.imagekit.io/dy6awnd3c/sigmund-Fa9b57hffnM-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672709041563"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
