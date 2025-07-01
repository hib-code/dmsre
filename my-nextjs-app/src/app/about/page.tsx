import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Dervox Monitor Server ",
  description: "Ceci est la page À propos du modèle DMS",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Nous sommes une équipe passionnée par la surveillance de serveurs et la sécurité des infrastructures. Nous offrons des solutions adaptées aux besoins des entreprises pour garantir des performances optimales tout en assurant une protection renforcée contre les menaces potentielles. La sécurité de vos données et la fiabilité de vos serveurs sont notre priorité."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
