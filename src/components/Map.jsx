const Map = () => {
  return (
    <div className="mapouter relative text-right mx-auto w-10/12 h-[473px] md:w-[1000px] md:h-[563px]">
      <div className="gmap_canvas overflow-hidden bg-none w-full h-[473px] md:h-[563px]">
        <iframe
          title="Doelazis Map"
          className="gmap_iframe h-[473px] md:h-[563px] w-full"
          src="https://maps.google.com/maps?width=840&amp;height=473&amp;hl=en&amp;q=doelazis&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;