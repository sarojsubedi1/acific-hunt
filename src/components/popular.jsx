import {
  FaPenNib,
  FaCode,
  FaRegBuilding,
  FaDatabase,
  FaBriefcaseMedical,
  FaVolumeHigh,
  FaArrowRightLong,
} from "react-icons/fa6";

import CategoryCard from "./categoryCard";
function Popular() {
  return (
    <>
      <div className="mt-20 mx-32 flex items-center justify-between">
        <h3 className="font-bold text-xl">Popular Category</h3>
        <button className="flex items-center gap-2 text-cyan-500 hover:bg-cyan-400 hover:text-white p-2 border rounded-lg">
          See More
          <FaArrowRightLong />
        </button>
      </div>
      <div className="md:mx-32 my-10 md:grid grid-cols-3 gap-y-16 gap-x-20">
        <CategoryCard
          title="Graphic and Design"
          openPosition="448"
          icon={FaPenNib}
        />
        <CategoryCard title="Coading" openPosition="101" icon={FaCode} />
        <CategoryCard
          title="Data Science"
          openPosition="202"
          icon={FaDatabase}
        />
        <CategoryCard
          title="Health Care"
          openPosition="224"
          icon={FaBriefcaseMedical}
        />
        <CategoryCard
          title="Digital Marketing"
          openPosition="303"
          icon={FaVolumeHigh}
        />
        <CategoryCard
          title="Account and Finance"
          openPosition="204"
          icon={FaRegBuilding}
        />
      </div>
    </>
  );
}

export default Popular;
