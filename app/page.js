'use client'

import { NavBar, Footer } from "@/components";
import { useBaseContext } from "@/components/Providers";

export default function Home() {
  const { state: { theme } } = useBaseContext()
  return (
    <div className={theme}>
      <NavBar />
      <Footer />
    </div>
  );
}
