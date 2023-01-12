import React from "react";

const WhoWeAreV2 = () => {
  return (
    <section>
      <div class="bg-blue-800 relative items-center w-full px-5 pt-12 pb-24 mx-auto md:px-2">
        <div class="grid w-full grid-cols-1 gap-0 mx-auto lg:grid-cols-3">
          <div class="p-1">
            <a
              href="#"
              class="relative block overflow-hidden rounded-xl bg-[url(https://ik.imagekit.io/dy6awnd3c/nasa-Q1p7bh3SHj8-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672445589101)] bg-cover bg-center bg-no-repeat"
            >
              <span class="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white foa">
                Security
              </span>

              <div class="relative bg-black bg-opacity-20 p-8 pt-60 text-white text-left">
                <h3 class="text-xl lg:text-2xl font-bold">Data Security</h3>
                <p class="text-sm max-w-xs">
                  Hardened security and resilient platforms for Energy, Water,
                  and Data
                </p>
              </div>

              <span class="bg-white py-1 px-1 absolute right-6 bottom-10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="black"
                  class="w-7 h-7 pl-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </a>
            {/* w-12 h-12 absolute right-4 bottom-10 */}
          </div>
          {/* card 2 */}
          <div class="p-1">
            <a
              href="#"
              class="relative block overflow-hidden rounded-xl bg-[url(https://ik.imagekit.io/dy6awnd3c/cristiano-firmani-tmTidmpILWw-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672709979734)] bg-cover bg-center bg-no-repeat"
            >
              <span class="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white foa">
              Technology
              </span>

              <div class="relative bg-black bg-opacity-20 p-8 pt-60 text-white text-left">
                <h3 class="text-xl lg:text-2xl font-bold">Technology</h3>
                <p class="text-sm max-w-xs">
                  Superior combination of own intellectual property and
                  exclusive licenses
                </p>
              </div>
              <span class="bg-white py-1 px-1 absolute right-6 bottom-10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="black"
                  class="w-7 h-7 pl-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </a>
          </div>
          {/* card 3 */}
          <div class="p-1">
            <a
              href="#"
              class="relative block overflow-hidden rounded-xl bg-[url(https://ik.imagekit.io/dy6awnd3c/tejj-o8iXJVAahUc-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672445597036)] bg-cover bg-center bg-no-repeat"
            >
              <span class="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white foa">
                Government
              </span>

              <div class="relative bg-black bg-opacity-20 p-8 pt-60 text-white text-left">
                <h3 class="text-xl lg:text-2xl font-bold">Government Focus</h3>
                <p class="text-sm max-w-xs">
                  Federal, State ＆ Municipal Government, Commercial
                  and Industrial resilient needs
                </p>
              </div>
              <span class="bg-white py-1 px-1 absolute right-6 bottom-10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="black"
                  class="w-7 h-7 pl-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreV2;
