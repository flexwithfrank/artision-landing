import React, { useState } from "react";
import emailjs from "emailjs-com";

function FormV3() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hbjr7zn", "template_wlgaylq", e.target, "8czeKXozvPd18rIhZ")
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div>
      {success && (
        <div className="bg-green-500 text-white p-4 rounded-md mb-4">
          Your message has been sent successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            autoComplete="tel"
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="company" className="sr-only">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            autoComplete="message"
            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-800 focus:outline-none focus:ring-4 focus:ring-transparent font-bold rounded-full text-sm px-5 py-3.5 text-center me-2 mb-2 sm:w-auto w-full"
        >
          Submit Your Request
        </button>
      </form>
    </div>
  );
}

export default FormV3;