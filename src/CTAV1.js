/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export default function CTAV1() {
  return (
    <div className="bg-[#eeeeee] text-left">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-blue-800 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block foa-light">Ready to Partner with us?</span>
                <span className="block">Contact us today.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla nec.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-black shadow hover:bg-indigo-50 foa-book"
              >
                Contact us today
              </a>
            </div>
          </div>
          <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
            <img
              className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://ik.imagekit.io/dy6awnd3c/nasa-1lfI7wkGWZ4-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672709572692"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    
    </div>
  );
}
