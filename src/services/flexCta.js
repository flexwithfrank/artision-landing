export default function FlexCta({ text, bgColor, textColor }) {
    const redirectToContact = () => {
      window.location.href = "/contact";
    };
    return (
      <div>
        <button
        style={{backgroundColor: bgColor, color: textColor}}
          onClick={redirectToContact}
          type="button"
          class="focus:outline-none focus:ring-4 focus:ring-transparent font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 sm:w-auto w-full"
        >
          {text}
        </button>
      </div>
    );
  }
  