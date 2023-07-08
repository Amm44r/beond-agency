import React, { useState } from "react";
import styles from '../style';

const FORM_ENDPOINT = "https://getform.io/f/bef3cafb-701d-4a06-8f49-75943483708c"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className={`${styles.heading3}`}>Thank you!</div>
        <div className={`${styles.heading5}`}>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col justify-center items-center"
    >
      <div className="mb-3 w-[256px]">
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 w-[256px]">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 w-[256px]">
        <input
          type="text"
          placeholder="Phone No. (optional)"
          name="phone"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
      <div className="mb-3 w-[256px]">
        <input
          type="text"
          placeholder="Company/Organization Name"
          name="company"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-16 w-[256px]">
        <textarea
          placeholder="Message/Inquiry"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className={`${styles.paragraph} text-black`}>
        Briefly what marketing challenges are you currently facing?
      </div>
      <div className="mb-8 w-[512px]">
        <textarea
          placeholder=""
          name="question"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>

      <div className="mb-32">
        <button
          className={`${styles.heading5} text-black5 btn_2`}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;