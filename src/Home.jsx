import Hero from "./components/hero";
import Popular from "./components/popular";
import TopOpening from "./components/topJobOpening";
import CompanyBanner from "./components/companyBanner";
import CompanyCard from "./components/companyCard";
import Feedback from "./components/feedback";
import ButtomBanner from "./components/buttomBanner";

function Home() {
  return (
    <>
      <Hero />
      <Popular />
      <TopOpening />
      <CompanyBanner />
      <CompanyCard />
      <Feedback />
      <ButtomBanner />
    </>
  );
}

export default Home;
