import BrandHeader from "@/components/pages/HomePage/BrandHeader";
import Features from "@/components/pages/HomePage/Features";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white dark:bg-black">
      <BrandHeader />
      <Features />
    </main>
  );
}
