const AboutComponent = ({ highlight, main, desc, isLefty }) => {
  const removeIdenticalSubStr = (highlight, main) => {
    const arrFromHighlight = highlight.split(" ");
    const arrFromMain = main.split(" ");
    const result = [];

    for (let i = 0; i < arrFromMain.length; i++) {
      if (!arrFromHighlight.includes(arrFromMain[i])) {
        result.push(arrFromMain[i]);
      }
    }

    return result.join(" ");
  }

  return (
    <div className={`flex flex-wrap justify-center items-center ${!isLefty ? "flex-row-reverse" : ""}`}>
        {isLefty ? (
          <p className="w-[468px] text-4xl mx-4 text-center mb-8 md:mb-0 sm:text-center md:text-left bg-green rounded-md p-10 text-cream">
            <span className="font-bold text-lightBrown">{highlight}</span> {removeIdenticalSubStr(highlight, main)}
          </p>
        ) : (
          <p className="w-[468px] text-4xl mx-4 text-center mb-8 md:mb-0 sm:text-center md:text-right bg-green rounded-md p-10 text-cream">{removeIdenticalSubStr(highlight, main)} 
            <span className="font-bold text-lightBrown"> {highlight}</span>
          </p>
        )}
      <p className="w-[500px] text-lg mx-10 md:mx-4 md:text-left sm:text-justify text-justify">{desc}</p>
    </div>
  );
}

export default AboutComponent;