import Google from "../assets/goggle.png";
import Zoho from "../assets/zoho.png";
import Airbnb from "../assets/airbnb.png";
import Microsoft from "../assets/microsoft.png";
import ClickUp from "../assets/clickup.png";

function CompanyBanner() {
  return (
    <>
      <div className="bg-[#F5F6F6] p-32 py-20 my-20">
        <p className="text-xl font-extrabold text-center">
          Join in globally <sapn className="text-cyan-500">renowoned</sapn>{" "}
          companies
        </p>
        <div className="flex justify-between items-center mt-16">
          <img src={Google} alt="google logo" width={150} />
          <img src={Zoho} alt="zoho logo" width={150} />
          <img src={Airbnb} alt="Airbnb logo" width={150} />
          <img src={Microsoft} alt="Microsoft logo" width={150} />
          <img src={ClickUp} alt="ClickUp logo" width={150} />
        </div>
      </div>
    </>
  );
}

export default CompanyBanner;
