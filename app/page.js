'use client'

import { NavBar, Footer, NFTBigSlider, Title } from "@/components";
import { useBaseContext } from "@/components/Providers";

export default function Home() {
  const { state: { theme } } = useBaseContext()
  return (
    <div className={[theme, 'overflow-auto h-screen'].join(' ')}>
      <NavBar />
      <main className="themeable">
        <div className="container mx-auto overflow-auto py-8">
          <NFTBigSlider />
          <Title title='Broswe By Category' subTitle="Explore NFTs in the most featured categories" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
