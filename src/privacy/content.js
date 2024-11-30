export default function Content() {
  return (
    <div className="relative pt-32">
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl text-white haas-bold">
                Privacy Statement
              </h2>
              <p className="text-lg text-gray-100 haas-roman">
                At Artesion Inc., we value your privacy and are committed to
                protecting the personal information you provide to us. This
                Privacy Statement explains how we collect, use, and safeguard
                your information.
              </p>
            </div>

            <p className="text-lg text-gray-100 haas-roman">
              <strong>1. Information We Collect</strong> <br />
              We may collect the following personal information: <br />
              - Name <br />
              - Email Address <br />
              - Phone Number <br />
              This information is gathered when you contact us, sign up for our
              services, or request more information about our offerings.
            </p>

            <p className="text-lg text-gray-100 haas-roman">
              <strong>2. How We Use Your Information</strong> <br />
              We use your personal information to: <br />
              - Respond to your inquiries and provide the services you’ve
              requested. <br />- Send you marketing communications about our
              products, services, promotions, and updates.
            </p>

            <p className="text-lg text-gray-100 haas-roman">
              <strong>3. How We Protect Your Information</strong> <br />
              We implement industry-standard measures to safeguard your personal
              information against unauthorized access, disclosure, or misuse.
            </p>

            <p className="text-lg text-gray-100 haas-roman">
              <strong>4. Your Privacy Choices</strong> <br />
              You can opt out of receiving marketing communications at any time
              by clicking the "unsubscribe" link in our emails or contacting us
              directly.
            </p>

            <p className="text-lg text-gray-100 haas-roman">
              <strong>5. Contact Us</strong> <br />
              If you have questions or concerns about this Privacy Statement or
              your personal information, please contact us at: <br />
              <strong>Artesion Inc.</strong> <br />
              Email:{" "}
              <a href="mailto:info@artesioninc.com" className="underline">
                info@artesioninc.com
              </a>{" "}
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
