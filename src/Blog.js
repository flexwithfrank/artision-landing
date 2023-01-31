import React from "react";

const Blog = () => {
  return (
    <>
      <div class=" w-full px-5 py-24 mx-auto lg:px-32">
        <div class="flex flex-col lg:flex-row lg:space-x-12">
          <div class="order-last w-full max-w-screen-sm m-auto mt-12 lg:w-1/4 lg:order-first">
            <div class="p-4 transition duration-500 ease-in-out transform bg-white border rounded-lg">
              <div class="flex py-2 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1549351512-c5e12b11e283?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                  class="w-16 h-16 rounded-full"
                />
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">
                    Utopia Global Wellness
                  </p>
                  <p class="text-sm text-gray-500">Wellness On-Demand</p>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  class="flex items-center px-6 py-2 mt-auto rounded-full text-lg text-white transition duration-500 ease-in-out transform bg-blue-600 border border-current  hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 foa-book"
                >
                  Follow us on Twitter
                </a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 mt-12 prose lg:px-0 lg:w-3/4">
            <div class="mb-5 border-b border-gray-200">
              <div class="flex flex-wrap items-baseline -mt-2">
                <h5>01-18-2023</h5>
                <p class="mt-1 ml-2">Utopia Wellness Blog</p>
              </div>
            </div>
            <h1 className="text-blue-800 text-8xl">Let's talk about Stress.</h1>
            <p>
              Let’s talk about strees! Stress management that is. Stress
              management and relaxation are key to a sound mind, body, & soul.
              Stress can sneak into our daily lives in so many ways - from
              outrageous headaches and physical fatigue, to messing with our
              natural mood. Let’s dive in and talk about some ways to approach
              stress.
            </p>
            <br />
            <p>
              One great exercise is breath focused. Just a few minutes of slow,
              deep breaths can work wonders for relaxing you mentally and
              physically. This exercise can be done practically anytime &
              anywhere.
            </p>
            <p>
              We've got kpis for that this is a no-brainer viral engagement
              pixel pushing. Run it up the flagpole please use "solutionise"
              instead of solution ideas! dunder mifflin form without content
              style without meaning target rich environment. Three-martini
              lunch. Get buy-in prioritize these line items, or deliverables yet
              back to the drawing-board let's put a pin in that, close the loop.
              Manage expectations product market fit win-win-win. The horse is
              out of the barn poop, but can you put it on my calendar? but drink
              from the firehose, but quick-win.
            </p>
            <h1>"Focus on the customer journey"</h1>
            <p>
              If you could do that, that would be great this is a no-brainer, or
              Q1 regroup. Groom the backlog what do you feel you would bring to
              the table if you were hired for this position. Back of the net.
              Scope creep can you slack it to me? shotgun approach build on a
              culture of contribution and inclusion please advise soonest.
            </p>
            <h3>Is a no-brainer, or Q1 regroup.</h3>
            <p>
              Gain traction make it more corporate please we need to harvest
              synergy effects not enough bandwidth, and we want to empower the
              team with the right tools and guidance to uplevel our craft and
              build better nor low-hanging fruit the right info at the right
              time to the right people.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
