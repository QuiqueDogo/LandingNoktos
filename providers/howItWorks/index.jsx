import Support from "components/Support/Support";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import BannerPage from "./components/BannerPage/BannerPage";
import LandingPageLayout from "components/layouts/LandingPageLayout/LandingPageLayout";

const HowItWorks = () => (
    <LandingPageLayout title="¿Cómo funciona Noktos?">
        <FirstPage />
        <SecondPage />
        <BannerPage />
        <Support />
    </LandingPageLayout>
);

export default HowItWorks;
