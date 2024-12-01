import CtaAnchor from "./ctaAnchor";
export default function Headline() {
  return (
    <div>
      <div class="bg-gray-900">
        <div class="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
          <h1 class="font-semibold text-white text-3xl md:text-6xl">
            <span class="text-blue-400">Achieve CMMC 2.0 </span>compliance with
            assurance
          </h1>
          <div class="max-w-4xl">
            <p class="mt-5 text-neutral-400 text-lg">
              Assist DoD contractors to bridge NIST 800-171 regulatory
              requirements for CMMC 2.0.
            </p>
            <div class="mt-8">
              <CtaAnchor text="Schedule Initial Consultation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
