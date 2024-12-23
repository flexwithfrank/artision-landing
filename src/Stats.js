/* This example requires Tailwind CSS v2.0+ */
export default function Stats() {
  return (
    <div className="bg-blue-800 max-w-7xl mx-auto rounded-lg shadow my-8">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl foa-book">
            Trusted by leading Corporations
          </h2>
          <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p>
        </div>
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200 foa-book">
              Powering Systems
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">
              100%
            </dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200 foa-book">
             Water Savings
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">
              24/7
            </dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200 foa-book">
              Call Backs
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">
              100k+
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
