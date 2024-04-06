'use client'

import { NavBar, Footer, NFTBigSlider } from "@/components";
import { useBaseContext } from "@/components/Providers";

export default function Home() {
  const { state: { theme } } = useBaseContext()
  return (
    <div className={[theme, 'overflow-auto h-screen'].join(' ')}>
      <NavBar />
      <main className="container mx-auto">
        <NFTBigSlider/>
      </main>
      <Footer />
    </div>
  );
}
