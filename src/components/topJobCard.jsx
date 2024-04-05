import {
  FaLocationDot,
  FaRegClock,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa6";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/google-icon.svg";

const TopJobCard = () => {
  const Jobs = [
    {
      id: 1,
      jobTitle: "Deep Learning Engineer",
      salary: "50k-80k",
      location: "Kathmandu,Nepal",
      corpName: "Kathmandu corp",
      bookmark: false,
      logo: Logo1,
    },
    {
      id: 2,
      jobTitle: "Deep Learning Engineer",
      salary: "20k-80k",
      location: "Kathmandu,Nepal",
      corpName: "Kathmandu corp",
      bookmark: false,
      logo: Logo2,
    },
    {
      id: 3,
      jobTitle: "Deep Learning Engineer",
      salary: "50k-80k",
      location: "Kathmandu,Nepal",
      corpName: "Kathmandu corp",
      bookmark: true,
      logo: Logo3,
    },
    {
      id: 4,
      jobTitle: "Deep Learning Engineer",
      salary: "50k-80k",
      location: "Kathmandu,Nepal",
      corpName: "Kathmandu corp",
      bookmark: true,
      logo: Logo3,
    },
    {
      id: 5,
      jobTitle: "Deep Learning Engineer",
      salary: "50k-80k",
      location: "Kathmandu,Nepal",
      corpName: "Kathmandu corp",
      bookmark: false,
      logo: Logo2,
    },
    {
      id: 6,
      jobTitle: "Deep Learning Engineer",
      salary: "50k-80k",
      location: "Kathmandu,Nepal",
      corpName: "Kathmandu corp",
      bookmark: false,
      logo: Logo1,
    },
  ];
  return (
    <>
      {Jobs.map((job) => (
        <div
          key={job.id}
          className=" border rounded-lg w-full p-6 hover:border-cyan-500"
        >
          <div className="flex items-center justify-between mb-4">
            <img
              src={job.logo}
              alt="logo"
              width={40}
              className="aspect-square object-cover grid place-items-center rounded-full"
            />
            <div>
              <button className="text-cyan-500 bg-white border-2 border-cyan-500 p-2 rounded hover:text-white hover:bg-cyan-500">
                Apply Now
              </button>
            </div>
          </div>
          <h3 className="font-extrabold">{job.jobTitle}</h3>
          <div className="flex gap-2 mb-4">
            <p className="text-gray-400 text-xs flex items-center gap-2">
              <FaLocationDot />
              {job.location}
            </p>
            <p className="text-gray-400 text-xs flex items-center gap-2">
              <FaRegClock />
              Expires in 25 Days
            </p>
          </div>
          <p className="font-normal">Salary: {job.salary}</p>
          <div className="border-t flex items-center justify-between p-4 mt-8">
            <h3>{job.corpName}</h3>

            <FaRegBookmark
              className={`${job.bookmark ? "hidden" : "fill-gray-700"}`}
            />
            <FaBookmark
              className={`${job.bookmark ? "fill-cyan-700" : "hidden"}`}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default TopJobCard;
