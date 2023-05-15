import BrandHeader from "@/components/pages/HomePage/BrandHeader";
import Features from "@/components/pages/HomePage/Features";
import Comunity from "@/components/pages/HomePage/Comunity";
import FeaturesBuild from "@/components/pages/HomePage/FeaturesBuild";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white dark:bg-black">
      <BrandHeader />
      <Features />
      <Comunity />
      <FeaturesBuild />
    </main>
  );
}
