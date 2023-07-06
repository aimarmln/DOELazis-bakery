const PageHeading = ({ text }) => {
  return (
    <div id="heading" className="flex justify-center items-center my-8">
      <div className="bg-darkBrown w-10 h-1 rounded-sm"></div>
      <h1 className="font-semibold text-2xl mx-4" >{text ? text : "Heading template"}</h1>
      <div className="bg-darkBrown w-10 h-1 rounded-sm"></div>
    </div>
  );
}

export default PageHeading;