import MainPage from "./components/MainPage/MainPage";
import InfoPage from "./components/InfoPage/InfoPage";
import Support from "../../components/Support/Support";
import BenefitsPage from "./components/BenefitsPage/BenefitsPage";
import LandingPageLayout from "components/layouts/LandingPageLayout/LandingPageLayout";

const Benefits = () => (
    <LandingPageLayout title="Beneficios con Noktos">
        <div>
            <MainPage />
            <BenefitsPage />
            <InfoPage />
            <Support />
        </div>
    </LandingPageLayout>
);

export default Benefits;
