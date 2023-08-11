import Head from "next/head";

const Home = () => {
  return (
    <>
      <div 
      className="w-full h-screen bg-[url('/bg2.jpg')] bg-cover bg-center"
      // style={{backgroundImage: "url()"}}
      >
        <div div className="
             bg-blue-600/30 backdrop-brightness-75">
        <p className="text-white pt-5 pl-10 pb-10 text-base underline underline-offset-4 ">
          {" "}
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
        {/* <div
          className="flex justify-center  mx-40 h-20 rounded-full mt-10  pt-5 space-x-44 text-black font-medium"
          style={{ backgroundColor: "white" }}
        >
          <div className="text-orange-400">Location</div>
          <div>Date</div>
          <div>Check out</div>
          <div className="bg-[orange]" style={{ backgroundColor: "orange" }}>
            Search
          </div>
        </div> */}
        
<div class=" flex justify-center rounded-md mt-10 " role="group">
  <button type="button" className="w-48 gap-10 bg-white  rounded-l-lg h-20">
    Location
    <image class="h-6 w-6" src="/location.png" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

    </image>
  </button>
  <button type="button" className="w-48 gap-10 bg-white">
    Date
  </button>
  <button type="button" className="w-48 gap-10 bg-white">
    Check out
  </button>
  <button type="button" className=" bg-[orange] w-48 gap-10  rounded-r-lg">
    Search
  </button>
</div>

      </div>
      </div>

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
              <p className="text-start ml-6 font-bold">
                From 180.00 AED
              </p>

          </div>

          <div className="text-center">
            <img
              src="/3d.jpg"
              class="max-w-sm rounded-lg ml-6 mt-5 gap-5 h-80 w-96"
              alt="..."
            />
            <h3 className="text-start ml-6 font-medium text-2xl font-bold">
              3D World Selfie Museum
              </h3>
              <p className="text-start ml-6 font-medium ">
                3 hours
              </p>
              <p className="text-start ml-6 font-bold">
                From 90.00 AED
              </p>
          </div>
          <div className="text-center">
            <img
              src="/park.jpg"
              class="max-w-sm rounded-lg mt-5 h-80 w-96"
              alt="..."
            />
            <h3 className="text-start font-medium text-2xl font-bold">
              Al Montaza Waterpark
              </h3>
              <p className="text-start font-medium ">
                10 hours
              </p>
              <p className="text-start font-bold">
                From 120.00 AED
              </p>
          </div>
          <div className="text-center">
            <img
              src="/boot.jpg"
              class="max-w-sm rounded-lg  mt-5 gap-5 h-80 w-96"
              alt="..."
            />
            <h3 className="text-start font-medium text-2xl font-bold">
              Banana Boot Dubai
              </h3>
              <p className="text-start  font-medium  ">
                20 Minutes
              </p>
              <p className="text-start  font-bold ">
                From 100.00 AED
              </p>
          </div>
          <div className="text-center">
            <img
              src="/imgG5.jpg"
              class="max-w-sm rounded-lg mt-5 gap-5  h-80 w-96"
              alt="..."
            />
           <h3 className="text-start  font-medium text-2xl font-bold">
              Al Ain City Tours
              </h3>
              <p className="text-start  font-medium ">
                9 hours
              </p>
              <p className="text-start   font-bold">
                From 699.00 AED
              </p>
          </div>
          <div className="text-center">
            <img
              src="/Aqua.jpg"
              class="max-w-sm rounded-lg mt-5 gap-5  h-80 w-96"
              alt="..."
            />
            <h3 className="text-start font-medium text-2xl font-bold ">
              Aquaventure Waterpark
              </h3>
              <p className="text-start   font-medium ">
                5-7 Hours
              </p>
              <p className="text-start font-bold">
                From 295.00 AED
              </p>
          </div>
        </div>
      </div>
<div className="flex justify-center mt-5">
      <button className="rounded-full w-48 h-16 ml-70"
      style={{backgroundColor: "orange"}}>View All</button>
      </div>

      <div
        className="h-screen  bg-[url('/bg2.jpg')] bg-no-repeat bg-cover mt-20"
        // style={{ backgroundImage: "url(/image2.jpg)" }}
      >
     
      

        <h1 className="flex justify-center  text-white  font-medium text-5xl mt-10"> Top Deals</h1>
  

        </div>
     <div>
        <h2 className="flex justify-center font-medium font-semibold text-4xl mt-10 pb-20">
          Top Designation
        </h2>

    
        <div class="grid grid-cols-3 gap-4 px-10 ">
  <div className="col-span-2 bg-[url('/imageG1.webp')] h-80 rounded-lg ">

  </div>
  <div class="bg-[url('/imgG2.jpg')]  rounded-lg ">

  </div>
</div>

<div class="grid grid-cols-3 gap-4 px-10 py-5 ">
  <div className=" bg-[url('/imgG3.jpg')] h-96 w-96 bg-cover rounded-lg bg-no-repeat ">

  </div>
  <div class="bg-[url('/imgG4.jpg')] h-96 w-96 bg-cover rounded-lg bg-no-repeat ">
  </div>
  <div class="bg-[url('/imgG5.jpg')] h-96  rounded-lg bg-cover rounded-lg bg-no-repeat  ">

</div>

  

</div>




        </div>
     
    </>
  );
};

export default Home;
