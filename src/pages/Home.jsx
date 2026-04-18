import Hero from "../components/Hero";
import Featured from "../components/Featured";
import AiSection from "../components/AiSection";
import SkillCourses from "../components/SkillCourses";
import TrustedBy from "../components/TrustedBy";
import Testimonials from "../components/Testimonials";
import Certifications from "../components/Certifications";
import CareerSection from "../components/CareerSection";
import PopularSkills from "../components/PopularSkills";


const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <AiSection />
      <SkillCourses />
      <TrustedBy />
      <Testimonials />
      <Certifications />
      <CareerSection />
      <PopularSkills />
    </>
  );
};

export default Home;