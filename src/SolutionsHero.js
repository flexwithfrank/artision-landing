import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import FlexCta from "./services/flexCta";
import NavBarV4 from "./nav/navbarV4";

export default function SolutionsHero() {
  return (
    <>
      {" "}
      <NavBarV4
        bgColor="#101827"
        color="#FFF"
        logo="https://ik.imagekit.io/dy6awnd3c/artesion-logo-website-V2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673416133437"
      />
      <div className="relative">
        <div className="bg-gray-900 pt-10 sm:pt-16 lg:pt-8 lg:pb-14">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <Link
                    to="/about"
                    className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                  >
                    <span className="rounded-full bg-blue-800 px-3 py-0.5 text-sm font-semibold leading-5 text-white foa-book">
                      Artesion
                    </span>
                    <span className="ml-4 text-sm foa-book">
                      AI — Analytic — Compute Platform
                    </span>
                    <ChevronRightIcon
                      className="ml-2 h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </Link>
                  <h1 className="mt-4 text-4xl font-medium tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl foa-light">
                    <span className="block">Diverse Ecosystem</span>
                    <span className="block text-gray-200 foa">Management</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Artesion EDGE is a compute, AI ⁄ ML, and analytic platform
                    that brings the scalability and redundancy of the cloud to
                    the edge.
                  </p>
                  <div className="mt-6">
                    <FlexCta
                      bgColor={"#FFF"}
                      textColor={"#000000"}
                      text="Schedule Consultation"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://ik.imagekit.io/dy6awnd3c/Group.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1673493014927"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
