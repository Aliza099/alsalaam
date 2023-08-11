
const RecommendationSection = () => {
  return (
    <section>
      <div>
        <h2 className="flex justify-center font-medium font-semibold text-4xl mt-10">
          Recommended For You
        </h2>
        <div className="mx-auto grid grid-rows-2 grid-flow-col mt-10">
          <div className="text-center ">
            <img
              src="/Ain.jpg"
              className=" max-w-sm gap-5 rounded-lg ml-6 mt-5 h-80 w-96"
              alt="..."
            />
            <h3 className="text-start ml-6 font-medium text-2xl font-bold">
              Ain Daubai
            </h3>
            <p className="text-start font-medium  ml-6 ">
              As per your selected day
            </p>
            <p className="text-start ml-6 font-bold">From 180.00 AED</p>
          </div>

          <div className="text-center">
            <img
              src="/3d.jpg"
              className="max-w-sm rounded-lg ml-6 mt-5 gap-5 h-80 w-96"
              alt="..."
            />
            <h3 className="text-start ml-6 font-medium text-2xl font-bold">
              3D World Selfie Museum
            </h3>
            <p className="text-start ml-6 font-medium ">3 hours</p>
            <p className="text-start ml-6 font-bold">From 90.00 AED</p>
          </div>
          <div className="text-center">
            <img
              src="/park.jpg"
              className="max-w-sm rounded-lg mt-5 h-80 w-96"
              alt="..."
            />
            <h3 className="text-start font-medium text-2xl font-bold">
              Al Montaza Waterpark
            </h3>
            <p className="text-start font-medium ">10 hours</p>
            <p className="text-start font-bold">From 120.00 AED</p>
          </div>
          <div className="text-center">
            <img
              src="/boot.jpg"
              className="max-w-sm rounded-lg  mt-5 gap-5 h-80 w-96"
              alt="..."
            />
            <h3 className="text-start font-medium text-2xl font-bold">
              Banana Boot Dubai
            </h3>
            <p className="text-start  font-medium  ">20 Minutes</p>
            <p className="text-start  font-bold ">From 100.00 AED</p>
          </div>
          <div className="text-center">
            <img
              src="/imgG5.jpg"
              className="max-w-sm rounded-lg mt-5 gap-5  h-80 w-96"
              alt="..."
            />
            <h3 className="text-start  font-medium text-2xl font-bold">
              Al Ain City Tours
            </h3>
            <p className="text-start  font-medium ">9 hours</p>
            <p className="text-start   font-bold">From 699.00 AED</p>
          </div>
          <div className="text-center">
            <img
              src="/Aqua.jpg"
              className="max-w-sm rounded-lg mt-5 gap-5  h-80 w-96"
              alt="..."
            />
            <h3 className="text-start font-medium text-2xl font-bold ">
              Aquaventure Waterpark
            </h3>
            <p className="text-start   font-medium ">5-7 Hours</p>
            <p className="text-start font-bold">From 295.00 AED</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button
          className="rounded-full w-48 h-16 ml-70"
          style={{ backgroundColor: 'orange' }}
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default RecommendationSection;
