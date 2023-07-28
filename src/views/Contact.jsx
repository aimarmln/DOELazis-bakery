import { useState } from "react";
import InputComponent from "../components/InputComponent";
import PageHeading from "../components/PageHeading";
import Modal from "../components/Modal";

const Contact = () => {
  const [modal, setModal] = useState(false);

  const input = [
    { inputFor: "Name", type: "text", isTextArea: false },
    { inputFor: "Email", type: "email", isTextArea: false },
    { inputFor: "Phone", type: "tel", isTextArea: false },
    { inputFor: "Company", type: "text", isTextArea: false },
    { inputFor: "Subject", type: "text", isTextArea: false },
    { inputFor: "Message", type: "text", isTextArea: true },
  ];

  const handleSubmit = e => {
    e.preventDefault();
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 5000);
  }

  return (
    <section id="contact">
      <div className="max-w-[1200px] mx-auto px-5">
        <PageHeading text="Contact Us" />
        <div className="flex justify-center md:justify-between items-center flex-wrap-reverse mb-8">
          <form action=""  className="w-full md:w-[45%]" onSubmit={handleSubmit}>
            {input.map(({ inputFor, type, isTextArea }, idx) => (
              <InputComponent inputFor={inputFor} type={type} isTextArea={isTextArea} key={idx} />
            ))}
            <button class="mb-8 bg-transparent hover:bg-dustyBrown text-dustyBrown font-semibold hover:text-white py-2 px-4 border border-dustyBrown hover:border-transparent transition duration-300 rounded" type="submit">
              Submit
            </button>
          </form>
          <img src={require("../assets/images/for-about-page-3.jpg")} alt="test" className="w-full md:w-[45%]"  />
        </div>
      </div>
      <div className="bg-dustyBrown">
        <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center flex-wrap py-12 ">
          <img src={require("../assets/images/logo-transparent.png")} alt="doelazis-logo" className="w-[580px] md:mb-0 mb-4" />
          <div className="max-w-[482px] flex flex-col items-center">
            <p className="text-4xl md:text-5xl text-center text-darkBrown font-semibold">For <span className="text-cream">delivery enquiries</span>, contact us through <span className="text-cream">Whatsapp</span>.</p>
            <a href="https://wa.me/08159076203" target="_blank" rel="noopener noreferrer" class="my-8 text-4xl bg-transparent hover:bg-cream text-cream font-semibold hover:text-dustyBrown py-3 px-5 border border-cream hover:border-transparent transition duration-300 rounded">0815-9076-203</a>
          </div>
        </div>
        <Modal visible={modal} onClose={() => setModal(false)} />
      </div>
    </section>
  );
}

export default Contact;
