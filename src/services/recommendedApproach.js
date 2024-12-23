/* eslint-disable jsx-a11y/img-redundant-alt */
export default function RecommendedApproach() {
  return (
    <div className="bg-gray-900 flex flex-col mx-auto justify-center items-center">
      <div class="max-w-5xl px-4 xl:px-0 py-24 mx-auto flex flex-col justify-center items-center">
        {/* <!-- Title --> */}
        <div class="max-w-3xl mb-10 lg:mb-14">
          <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Our Approach to CMMC 2.0 Compliance
          </h2>
        </div>
        {/* <!-- End Title --> */}

        {/* card */}

        <div class="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-8">
            <img
              src="https://imagedelivery.net/DmjG_TsKdaET_s4bmkVMyw/e54fedba-686b-4e9c-6a05-d1844a58b600/public"
              alt="Image Description"
              className="w-full"
            />
          </div>
          <div className="col-span-4">
            <img
              src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/59f/4uv/dzd/Screenshot%202024-11-29%20at%2010.19.06%20PM%201.png"
              alt="Image Description"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
