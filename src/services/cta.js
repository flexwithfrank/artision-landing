export default function CTA({ text }) {
  const redirectToContact = () => {
    window.location.href = "/contact";
  };
  return (
    <div>
      <button
        onClick={redirectToContact}
        type="button"
        class="text-black bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 sm:w-auto w-full"
      >
        {text}
      </button>
    </div>
  );
}
