import React from "react";

const WhoWeAreGrid = () => {
  return (
    <section>
      <div class="bg-[#eeeeee] relative items-center w-full px-5 py-12 mx-auto md:px-12 ">

      <div class="max-w-xl p-4">
      <h2 class="text-left text-3xl font-extrabold sm:text-4xl text-green-900 foa">Securing the future of water</h2>

      <p class="text-left mt-4 text-gray-900 text-[1rem] foa-book">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
        sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
      </p>
    </div>

        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
          <div class="p-6">
            <img
              class="object-cover object-center w-full mb-8 lg:h-72 md:h-36 rounded-xl"
              src="https://images.unsplash.com/photo-1509390874189-d75fd22f19f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="blog"
            />

            <h1 class="mx-auto text-left mb-8 text-2xl font-extrabold text-green-900 lg:text-3xl foa">
              Water Sustainability
            </h1>
            <p class="text-left mx-auto text-base leading-relaxed text-gray-500 foa-book">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            
          </div>
          <div class="p-6">
            <img
              class="object-cover object-center w-full mb-8 lg:h-72 md:h-36 rounded-xl"
              src="https://images.unsplash.com/photo-1512772452758-275f069da6bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="blog"
            />

            <h1 class="x-auto text-left mb-8 text-2xl font-extrabold text-green-900 lg:text-3xl foa">
              Edge Computing
            </h1>
            <p class="text-left mx-auto text-base leading-relaxed text-gray-500 foa-book">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

          </div>
          <div class="p-6">
            <img
              class="object-cover object-center w-full mb-8 lg:h-72 md:h-36 rounded-xl"
              src="https://images.unsplash.com/photo-1600451933932-c300aebac5f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              alt="blog"
            />

            <h1 class="mx-auto text-left mb-8 text-2xl font-extrabold text-green-900 lg:text-3xl foa">
            Renewable Resourcing
            </h1>
            <p class="text-left mx-auto text-base leading-relaxed text-gray-500 foa-book">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreGrid;
