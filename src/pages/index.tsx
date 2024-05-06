import { Button } from "@/components/atoms";
import { GalleryUi, Header, Hero, Pricing, Reason } from "@/components/organisms";
import { Footer } from "@/components/templates";
import Link from "next/link";

export default function Home() {
  return (
    <main className={`w-full text-white`}>
      <Header />
      <Hero />
      <GalleryUi />
      <Reason />
      <Pricing />
      <Footer />
    </main>
  );
}
