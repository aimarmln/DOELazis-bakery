const InputComponent = ({ inputFor, isTextArea }) => {
  return (
  <div className="my-8">
    <label htmlFor={inputFor.toLowerCase()} className="text-amber-950 font-medium">{inputFor}</label><br />
    {isTextArea ? (
      <textarea name={inputFor.toLowerCase()} id={inputFor.toLowerCase()} cols="30" rows="3" className="w-full py-2 border-b-2 focus:outline-none focus:border-b-darkBrown valid:border-b-darkBrown invalid:border-b-stone-300 placeholder:italic placeholder:text-slate-400 transition-colors" placeholder={`Your ${inputFor}`} autoComplete="off" required></textarea>
    ) : (
      <input type="text" name={inputFor.toLowerCase()} id={inputFor.toLowerCase()} className="w-full py-2 border-b-2 focus:outline-none focus:border-b-darkBrown valid:border-b-darkBrown invalid:border-b-stone-300 placeholder:italic placeholder:text-slate-400 transition-colors" placeholder={`Your ${inputFor}`} autoComplete="off" required />
    )}
  </div>   
  );
}

export default InputComponent;