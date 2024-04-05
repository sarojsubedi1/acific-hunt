import { FaArrowRightLong } from "react-icons/fa6";
import TopJobCard from "./topJobCard";

function TopOpening() {
  return (
    <>
      <div className="mt-20 mx-32 flex items-center justify-between">
        <h3 className="font-bold text-xl">Top Job Opening</h3>
        <button className="flex items-center gap-2 text-cyan-500 hover:bg-cyan-400 hover:text-white p-2 border rounded-lg">
          See More
          <FaArrowRightLong />
        </button>
      </div>
      <div className="mx-32 my-10 grid grid-cols-3 gap-20">
        <TopJobCard />
      </div>
    </>
  );
}

export default TopOpening;
