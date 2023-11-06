import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const serviceID = "service_11tp3bf";
    const templateID = "template_33fpxsh";
    const publicKey = "aGX8akvZaLEsURcbX";

    const templateParams = {
      from_name: senderName,
      from_email: senderEmail,
      to_name: "Jozhua Simeon",
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#9BBEC8] flex items-center justify-center mx:auto"
    >
      <form
        className="flex flex-col items-center justify-center max-w-[700px] w-full gap-4"
        onSubmit={handleSubmit}
      >
        <div className="pb-8 flex justify-center items-center py-8">
          <p className="underline underline-offset-[12px] py-4 text-4xl bg-[#427D9D] rounded-lg px-4 text-[#DDF2FD] sm:text-6xl font-bold">
            Contact me
          </p>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-[80%] sm:w-[70%] text-md sm:text-2xl px-2"
          onChange={(event) => setSenderName(event.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-[80%] sm:w-[70%] text-md sm:text-2xl py-3 px-2"
          onChange={(event) => setSenderEmail(event.target.value)}
        />
        <textarea
          name="message"
          className="w-[80%] sm:w-[70%] text-md sm:text-2xl py-2 px-2"
          cols="30"
          rows="10"
          placeholder="Message"
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <button className="text-[#DDF2FD] text-lg sm:text-2xl border-2 bg-[#164863] border-[#427D9D] rounded-md px-4 py-4 hover:bg-[#4ec1ff] hover:px-10 hover:text-[#164863] duration-200">
          Send me an email
        </button>
      </form>
    </div>
  );
};

export default Contact;
