const BreadCard = ({ breadName, desc, price, src, alt }) => {
  return (
    <div className="flex flex-col items-center w-52">
      <img src={require(`../assets/images/${src}`)} alt={alt} className="mb-4" />
      <h1 className="pb-4 px-4 mb-2 border-b-2 border-b-dustyBrown text-lg font-medium text-center">{breadName}</h1>
      <p className="text-center text-sm mb-4">{desc}</p>
      <p>{price}</p>
    </div>
  );
}

export default BreadCard;