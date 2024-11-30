import Cta from "./cta";
export default function CtaBanner() {
  return (
    <section>
      {/* Container */}
      <div className="px-5 py-16 md:px-10 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <img
            className="mx-auto mb-6 w-32 flex-col text-3xl font-bold md:mb-10 md:text-5xl lg:mb-12 text-white"
            src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/59f/4uv/dzd/Screenshot%202024-11-29%20at%2010.19.06%20PM%201.png"
            alt="cta-banner"
          />
          <h2 className="mx-auto mb-6 max-w-3xl flex-col text-3xl font-bold md:mb-10 md:text-5xl lg:mb-12 text-white">
            Ready to take the first step? Let’s discuss your compliance goals
            today.
          </h2>
          {/* img */}

          <Cta text="Schedule Your Consultation Now" />
        </div>
      </div>
    </section>
  );
}
