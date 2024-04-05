import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
const Feedback = () => {
  return (
    <>
      <div className="bg-[#F5F6F6]">
        <div className="mt-20 mx-32 flex items-center justify-between py-20">
          <h3 className="font-bold text-2xl">
            What our Client Say about
            <sapn className="text-cyan-500"> Pasific Hunt</sapn>
          </h3>
          <div className="flex items-center gap-4">
            <div className="border-2 border-black rounded-full p-2 text-black">
              <FaArrowLeft />
            </div>
            <div>
              <span className="text-cyan-500">2</span>/14
            </div>
            <div className="border-2 border-black rounded-full p-2 text-black">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
