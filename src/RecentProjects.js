import React from "react";

const RecentProjects = () => {
  return (
    <div>
      <section class="bg-[#eeeeee]">
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header class="text-center py-6">
            <h2 class="text-2xl  text-blue-800 sm:text-6xl foa-light">
              Our recent projects 
            </h2>
            <h2 class="text-2xl font-extrabold text-blue-800 sm:text-6xl foa-book">
              delivering life saving resources
            </h2>

            <p class="max-w-md mx-auto mt-4 text-gray-500 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul class="grid grid-cols-1 gap-2 mt-8 lg:grid-cols-3">
            <li class="rounded-xl">
              <a href="#" class="relative block group">
                <img
                  src="https://ik.imagekit.io/dy6awnd3c/andreas-gucklhorn-Ilpf2eUPpUE-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672445020144"
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 rounded-xl"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-medium text-white foa-book">
                    Project Title 1
                  </h3>

                </div>
              </a>
            </li>

            <li>
              <a href="#" class="relative block group">
                <img
                  src="https://ik.imagekit.io/dy6awnd3c/alex-eckermann-ofdFj1bUKQw-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672445597785"
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 rounded-xl"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-medium text-white foa-book">Project Title 2</h3>

                </div>
              </a>
            </li>

            <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="#" class="relative block group">
                <img
                  src="https://ik.imagekit.io/dy6awnd3c/tejj-o8iXJVAahUc-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672445597036"
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 rounded-xl"
                />

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 class="text-xl font-medium text-white foa-book">
                  Project Title 3
                  </h3>

                 
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RecentProjects;
