'use client'

import { NavBar, Footer, NFTBigSlider, Title, NFTCollectionSlider, Button, NFTItemSlider } from "@/components";
import { useBaseContext } from "@/components/Providers";

export default function Home() {
  const { state: { theme } } = useBaseContext()
  return (
    <>
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
