const Hero = () => {
  return (
    <section>
      <div className="w-full h-screen bg-[url('/bg2.jpg')] bg-cover bg-center">
        <div
          div
          className="
         bg-blue-600/30 backdrop-brightness-75"
        >
          <p className="text-white pt-5 pl-10 pb-10 text-base underline underline-offset-4 ">
            {' '}
            +9714 320 5652 | info@alsalaamtourism.com
          </p>
          <h2 className="text-center text-white font-bold text-5xl">
            AL SALAAM Tousism
          </h2>
          <div className="flex justify-center space-x-12 pt-10 text-white font-medium ">
            <div className="text-orange-400">Home</div>
            <div>Activities</div>
            <div>Packges</div>
            <div>Contact Us</div>
            <div>About Us</div>
          </div>

          <div className="flex justify-center pt-20 text-white font-medium text-6xl font-black">
            Dream | Explore | Discover
          </div>
          <p className="flex justify-center text-white pt-5 text-3xl ">
            Get the best prices on all excurssions and activities across UAE.
          </p>

          <div className=" flex justify-center rounded-md mt-10 " role="group">
            <button
              type="button"
              className="w-48 gap-10 bg-white  rounded-l-lg h-20"
            >
              Location
            </button>
            <button type="button" className="w-48 gap-10 bg-white">
              Date
            </button>
            <button type="button" className="w-48 gap-10 bg-white">
              Check out
            </button>
            <button
              type="button"
              className=" bg-[orange] w-48 gap-10  rounded-r-lg"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
