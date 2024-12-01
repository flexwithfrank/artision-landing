export default function CtaAnchor({ text }) {
    const scrollToContactForm = () => {
        const contactForm = document.getElementById("contact-form");
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
      <div>
        <button
          onClick={scrollToContactForm}
          type="button"
          class="text-black bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-transparent font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 sm:w-auto w-full"
        >
          {text}
        </button>
      </div>
    );
  }
  