import LOGO from "../assets/logo.png";
import { FaLinkedin, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#252527] pt-20 pb-10">
      <section className="flex justify-between gap-32 border-b mx-32 py-20">
        <div className="w-1/2">
          <img src={LOGO} alt="Logo" width={200} className="mb-10" />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui
            minim labore adipisicing minim sint cillum sint consectetur
            cupidatat.
          </p>
        </div>
        <div className="w-1/2 flex justify-between">
          <div className="text-white flex flex-col gap-10">
            <h1 className="font-extrabold">Job Seekers</h1>
            <ul className="text-gray-400">
              <li>Search Jobs</li>
              <li>Elplore Jobs</li>
              <li>Saved Jobs</li>
              <li>Applied Jobs</li>
              <li></li>
            </ul>
          </div>
          <div className="text-white flex flex-col gap-10">
            <h1 className="">Employers</h1>
            <ul className="text-gray-400">
              <li>Register</li>
              <li>Post Jobs</li>
              <li>Applications</li>
              <li>My Jobs Poasting</li>
            </ul>
          </div>

          <div className="text-white flex flex-col gap-10">
            <h1 className="">Legal</h1>
            <ul className="text-gray-400">
              <li>Cookies Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Services</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="text-gray-400 bg-[#252527] mx-32 mt-10 flex justify-between">
        <div>
          <p>Copyright &#169; 2024 Pasific Hunt. All right Reserved.</p>
        </div>
        <div className="flex gap-10 text-2xl">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaLinkedin />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
