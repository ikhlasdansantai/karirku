import JobCategories from "@/components/pages/Home/JobCategories";
import HowItWorks from "@/components/common/JobCard/HowItWorks";
import FeaturedJob from "@/components/pages/Home/FeaturedJob";
import HomeHeader from "@/components/layouts/HomeHeader";
import CallToAction from "@/components/pages/Home/CallToAction";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <JobCategories />
      <HowItWorks />
      <FeaturedJob />
      <CallToAction />
    </>
  );
}
