"use client";
import { useState } from "react";

export default function EmailInput() {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    setSuccessMessage("Thank you for subscribing!");

    setTimeout(async () => {
      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
        });

        if (response.ok) {
          form.reset();
        } else {
          setSuccessMessage("There was an error submitting the form.");
        }
      } catch (error) {
        setSuccessMessage("There was an error submitting the form.");
      }
    }, 5000); // 3-second delay
  };

  return (
    <div className="lg:max-w-lg email-input">
      <div>
        <form
          class="js-cm-form mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-1 w-full"
          id="subForm"
          action="https://www.createsend.com/t/subscribeerror?description="
          method="post"
          data-id="2BE4EF332AA2E32596E38B640E90561908BCC45882D38FCD51AAC4FEC6A81716A1D4FBBE333A0F7E0E913F8836A46C801E78BDB2028B989405E15717A6F53DA6"
          onSubmit={handleSubmit}
        >
          <div class="w-full">
            <label for="email" class="sr-only">
              Subscribe
            </label>
            <input
              type="email"
              id="fieldEmail"
              aria-label="Email"
              name="cm-jkklmk-jkklmk"
              class="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-[#333] focus:ring-[#333] focus:outline-none disabled:opacity-50 disabled:pointer-events-none haas-roman form-control js-cm-email-input qa-input-email"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full sm:w-auto whitespace-nowrap py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#333] text-white hover:bg-[#333] focus:outline-none focus:bg-[#333] disabled:opacity-50 disabled:pointer-events-none haas-medium"
          >
            Sign Up
          </button>
        </form>
      </div>
      <p class="mt-3 text-xs text-[#aaaaaa] haas-roman">
        By subscribing you agree to our privacy policy and terms and conditions.
      </p>
      <div
        id="success-message"
        className="mt-3 text-sm text-green-500 haas-roman transition ease-in-out duration-300"
      >
        {successMessage}
      </div>
      
    
    </div>
  );
}
