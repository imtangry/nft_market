'use client'

import { NavBar, Footer, NFTBigSlider, Title, NFTCollectionSlider, Button, NFTItemSlider } from "@/components";
import { useBaseContext } from "@/components/Providers";
import Script from "next/script";

export default function Home() {
  const { state: { theme } } = useBaseContext()
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" />

      <div className={[theme, 'h-screen overflow-auto'].join(' ')}>
        <NavBar />
        <main className="themeable">
          <div className="container mx-auto pb-8 pt-1">
            <NFTBigSlider />
            <Title title='Popluar Collection' subTitle="you may like these collection" button={<Button btnText="更 多" />} />
            <NFTCollectionSlider />
            <Title title='Trending in TravelNFT' button={<Button btnText="更 多" />} />
            <NFTItemSlider />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
