import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import Apple from "../assets/apple-icon.svg";
import Att from "../assets/att-icon.svg";
import Skype from "../assets/skype-icon.svg";
import Facebook from "../assets/facebook-icon.svg";
import Google from "../assets/google-icon.svg";
import Twiter from "../assets/twitter-official.svg";

const CompanyCard = () => {
  const Jobs = [
    {
      id: 1,
      icon: Apple,
      location: "Kathmandu,Nepal",
      corpName: "Apple",
      openPosition: "200",
    },
    {
      id: 2,
      icon: Att,
      location: "Kathmandu,Nepal",
      corpName: "AT&T",
      openPosition: "200",
    },
    {
      id: 3,
      icon: Skype,
      location: "Kathmandu,Nepal",
      corpName: "Skype",
      openPosition: "200",
    },
    {
      id: 4,
      icon: Facebook,
      location: "Kathmandu,Nepal",
      corpName: "Facebook",
      openPosition: "200",
    },
    {
      id: 5,
      icon: Google,
      location: "Kathmandu,Nepal",
      corpName: "Google",
      openPosition: "200",
    },
    {
      id: 6,
      icon: Twiter,
      location: "Kathmandu,Nepal",
      corpName: "Twiter",
      openPosition: "200",
    },
  ];

  return (
    <>
      <div className="mt-20 mx-32 flex items-center justify-end">
        <button className="flex items-center gap-2 text-cyan-500 hover:bg-cyan-400 hover:text-white p-2 border rounded-lg">
          See More
          <FaArrowRightLong />
        </button>
      </div>
      <div className="mx-32 my-10 grid grid-cols-3 gap-20">
        {Jobs.map((job) => (
          <div key={job.id} className=" border rounded-lg w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white p-2 rounded-full border">
                <img
                  src={job.icon}
                  alt="logo"
                  className="w-[32px] aspect-square object-fit grid place-items-center"
                />
              </div>
              <div>
                <div className="text-cyan-500 text-sm bg-cyan-100/50 border-2 border-cyan-500 p-2 rounded-full hover:text-white hover:bg-cyan-500">
                  {job.openPosition} Job Available
                </div>
              </div>
            </div>
            <h3 className="font-extrabold mb-2">{job.corpName}</h3>
            <div className="flex gap-2 mb-4">
              <p className="text-gray-400 text-xs flex items-center gap-2">
                <FaLocationDot />
                {job.location}
              </p>
            </div>
            <div className="flex overflow-hidden">
              <div className="text-black text-xs border-2 border-gray-200 p-2 px-4 rounded-full flex items-center">
                Information Technology
              </div>
              <div className="text-black text-xs border-2 border-gray-200 p-2 px-4 rounded-full flex items-center">
                Fintech
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CompanyCard;
