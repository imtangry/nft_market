'use client'

import { NavBar, Footer, NFTBigSlider, Title, NFTCollectionSlider } from "@/components";
import { useBaseContext } from "@/components/Providers";

export default function Home() {
  const { state: { theme } } = useBaseContext()
  return (
    <div className={[theme, 'h-screen overflow-auto'].join(' ')}>
      <NavBar />
      <main className="themeable">
        <div className="container mx-auto py-8">
          <NFTBigSlider />
          <Title title='Popluar Collection' subTitle="you may like these collection" />
          <NFTCollectionSlider />
        </div>
      </main>
      <Footer />
    </div>
  );
}
