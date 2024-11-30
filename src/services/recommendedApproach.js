import IconCard from "./iconCard";
export default function RecommendedApproach() {
  return (
    <div className="bg-gray-900 bg-gradient-to-t from-black to-transparent">
      <div class="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
        {/* <!-- Title --> */}
        <div class="max-w-3xl mb-10 lg:mb-14">
          <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Recommended Approach to CMMC 2.0 Compliance
          </h2>
          <p class="mt-1 text-neutral-400">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ex vehicula
            varius semper tempus in
          </p>
        </div>
        {/* <!-- End Title --> */}

        {/* card */}
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div>
            <IconCard text={"Client Self-Assessment"} />
          </div>
          <div>
            <IconCard text={"RPO - 3rd Party Assessment"} />
          </div>
          <div>
            <IconCard text={"Get Well Plan (POA&M)"} />
          </div>
          <div>
            <IconCard text={"C3PO - 3rd Party Remediation"} />
          </div>
        </div>
      </div>
    </div>
  );
}
