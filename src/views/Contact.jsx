import InputComponent from "../components/InputComponent";

const Contact = () => {
  const input = [
    { inputFor: "Name", isTextArea: false },
    { inputFor: "Email", isTextArea: false },
    { inputFor: "Phone", isTextArea: false },
    { inputFor: "Company", isTextArea: false },
    { inputFor: "Subject", isTextArea: false },
    { inputFor: "Message", isTextArea: true },
  ];

  return (
    <>
      <div className="py-12 flex justify-center items-center flex-wrap">
        <form action="" className="mx-12 w-96">
          {input.map(({ inputFor, isTextArea }, idx) => (
            <InputComponent inputFor={inputFor} isTextArea={isTextArea} key={idx} />
          ))}
          <button class="bg-transparent hover:bg-dustyBrown text-dustyBrown font-semibold hover:text-white py-2 px-4 my-8 border border-dustyBrown hover:border-transparent transition duration-300 rounded">
            Submit
          </button>
        </form>
        <img src={require("../assets/images/for-about-page-4.jpg")} alt="test" className="w-80 mx-12" />
      </div>
      <div>
        
      </div>
    </>
  );
}

export default Contact;