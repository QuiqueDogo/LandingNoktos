import Support from "components/Support/Support";
import FirstPage from "./Components/FirstPage/FirstPage";
import ThirdPage from "./Components/ThirdPage/ThirdPage";
import SecondPage from "./Components/SecondPage/SecondPage";
import FourthPage from "./Components/FourthPage/FourthPage";
import BannerPage from "./Components/BannerPage/BannerPage";
import OurClients from "./Components/OurClients/OurClients";
import OurPartners from "./Components/OurPartners/OurPartners";
import LandingPageLayout from "components/layouts/LandingPageLayout/LandingPageLayout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { validateAppVersion } from "../../utils/clearCache";
import InvestorsInformation from "./Components/InvestorsInformation/InvestorsInformation";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    validateAppVersion(dispatch);
  }, []);

  return (
    <LandingPageLayout title="Inicio | Noktos">
      <div style={{ overflow: "hidden" }}>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <BannerPage />
        <OurClients />
        <Support />
        <InvestorsInformation />
      </div>
    </LandingPageLayout>
  );
};

export default Index;
