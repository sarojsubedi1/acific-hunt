import HeroImage from "../assets/image1.png";
import {
  FaCircleCheck,
  FaMagnifyingGlass,
  FaLocationDot,
} from "react-icons/fa6";

function Hero() {
  return (
    <>
      <section className="h-[600px] bg-[#F5F6F6] mt-[80px] flex justify-between">
        <div className="w-1/2 text-[#4E4F50] pl-32 my-20">
          <p className="flex items-center gap-2 mb-4">
            <FaCircleCheck className="text-cyan-500" />
            Your Trusted Career Partner
          </p>
          <h1 className="font-black text-4xl mb-6">
            Unlock Your Dream <span className="text-cyan-500">Career</span>
          </h1>
          <p className="mb-14">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui
            minim labore adipisicing minim sint cillum sint consectetur
            cupidatat.
          </p>
          <div className="flex items-center justify-center bg-white px-6 py-2 shadow rounded-lg mb-4">
            <div className="flex flex-grow items-center space-x-2 p-2">
              <FaMagnifyingGlass className="text-gray-700" />
              <input
                id="job"
                type="text"
                placeholder="Job Title,keywords"
                className="border-none outline-none"
              />
            </div>

            <div className="flex flex-grow items-center space-x-2 p-2 border-l">
              <FaLocationDot className="text-gray-700" />
              <input
                id="location"
                type="text"
                placeholder="Enter Location"
                className="border-none outline-none"
              />
            </div>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 px-4 text-sm rounded flex-shrink-0">
              Search Jobs
            </button>
          </div>
          <div>
            <p>
              <span className="font-extrabold">Popular Serches:</span>
              Designer,Developer,Programmer,Architech.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex">
          <img
            src={HeroImage}
            alt="hero image"
            className="mt-32 object-cover h-[79%]"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
