import InputComponent from "../components/InputComponent";
import PageHeading from "../components/PageHeading";

const Contact = () => {
  const input = [
    { inputFor: "Name", type: "text",isTextArea: false },
    { inputFor: "Email", type: "email",isTextArea: false },
    { inputFor: "Phone", type: "tel",isTextArea: false },
    { inputFor: "Company", type: "text",isTextArea: false },
    { inputFor: "Subject", type: "text",isTextArea: false },
    { inputFor: "Message", type: "text",isTextArea: true },
  ];

  return (
    <>
      <PageHeading text="Contact Us" />
      <div className="flex justify-center items-center flex-wrap-reverse mb-8">
        <form action="" className="mx-12 w-96">
          {input.map(({ inputFor, type, isTextArea }, idx) => (
            <InputComponent inputFor={inputFor} type={type} isTextArea={isTextArea} key={idx} />
          ))}
          <button class="mb-8 bg-transparent hover:bg-dustyBrown text-dustyBrown font-semibold hover:text-white py-2 px-4 border border-dustyBrown hover:border-transparent transition duration-300 rounded">
            Submit
          </button>
        </form>
        <img src={require("../assets/images/for-about-page-3.jpg")} alt="test" className="w-[450px] mx-12" />
      </div>
      <div className="flex justify-center items-center flex-wrap py-12 bg-dustyBrown">
        <img src={require("../assets/images/logo-transparent.png")} alt="doelazis-logo" className="w-[600px]" />
        <div className="w-[600px] flex flex-col items-center">
          <p className="text-5xl text-center text-darkBrown font-semibold">For <span className="text-cream">delivery enquiries</span>, contact us through <span className="text-cream">Whatsapp</span>.</p>
          <a href="https://wa.me/08159076203" target="_blank" rel="noopener noreferrer" class="my-8 text-4xl bg-transparent hover:bg-cream text-cream font-semibold hover:text-dustyBrown py-3 px-5 border border-cream hover:border-transparent transition duration-300 rounded">0815-9076-203</a>
        </div>
      </div>
    </>
  );
}

export default Contact;