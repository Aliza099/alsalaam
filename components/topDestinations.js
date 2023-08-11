const TopDestinations = () => {
  return (
    <div>
      <h2 className="flex justify-center font-medium font-semibold text-4xl mt-10 pb-20">
        Top Designation
      </h2>

      <div className="grid grid-cols-3 gap-4 px-10 ">
        <div className="col-span-2 bg-[url('/imageG1.webp')] h-80 rounded-lg "></div>
        <div className="bg-[url('/imgG2.jpg')]  rounded-lg "></div>
      </div>

      <div className="grid grid-cols-3 gap-4 px-10 py-5 ">
        <div className=" bg-[url('/imgG3.jpg')] h-96 w-96 bg-cover rounded-lg bg-no-repeat "></div>
        <div className="bg-[url('/imgG4.jpg')] h-96 w-96 bg-cover rounded-lg bg-no-repeat "></div>
        <div className="bg-[url('/imgG5.jpg')] h-96  rounded-lg bg-cover rounded-lg bg-no-repeat  "></div>
      </div>
    </div>
  );
};

export default TopDestinations;
