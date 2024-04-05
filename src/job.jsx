import { FaLocationDot, FaMagnifyingGlass } from "react-icons/fa6";
import ButtomBanner from "./components/buttomBanner";
import TopOpening from "./components/topJobOpening";

function JobPage() {
  return (
    <>
      <div className="mt-[80px]"></div>

      <div className="bg-[#F5F6F6]">
        <div className="mx-32 flex items-center justify-between py-10">
          <h3 className="font-bold text-2xl">
            Find yout dream
            <sapn className="text-cyan-500"> Job</sapn>
          </h3>
        </div>
      </div>

      <div className="mx-32 flex items-center justify-center bg-white px-6 py-2 shadow rounded-lg my-20">
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

      <div className="mt-20 mx-32 flex items-center justify-start border-b">
        <h3 className="font-bold text-lg">All available jobs(104)</h3>
      </div>
      <TopOpening />

      <ButtomBanner />
    </>
  );
}

export default JobPage;
