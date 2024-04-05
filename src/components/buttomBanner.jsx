import Image2 from "../assets/image2.png";
const ButtomBanner = () => {
  return (
    <>
      <div className="h-[650px] mx-32 my-20 relative flex justify-end ">
        <img src={Image2} alt="image 2" className="object-fit -z-10 px-20" />
        <div className="bg-[#04334D] absolute top-[43%] left-0 right-0 h-[calc(100%-43%)] -z-20 p-20 rounded-lg text-white">
          <h2 className="font-extrabold text-2xl">
            Join <span className="text-cyan-500">Pasific Hunt</span> today.
            Connect,Grow,Succeed.
          </h2>
          <p className="mt-10">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
          <div className="flex gap-6 mt-10">
            <button className="bg-cyan-500 text-white border-2 border-cyan-500 p-2 rounded hover:text-cyan-500 hover:bg-white">
              Join as a Jobseeker
            </button>
            <button className="text-cyan-500 border-2 border-cyan-500 p-2 rounded">
              Join as a Employer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtomBanner;
