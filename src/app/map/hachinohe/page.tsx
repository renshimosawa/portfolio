"use client";

import React from "react";
import OverlayMapTest from "@/components/domains/OverlayMap";
import HeadCompo from "@/components/domains/HeadCompo";
import AppbarGray from "@/components/domains/AppbarGray";
import { usePathname, useRouter } from "next/navigation";

// OGP
const Title = "文久改正八戸御城下略図 on Google Map";
const Description =
  "幕末(1862年くらい)の八戸城の古地図「文久改正八戸御城下略図」を現代の八戸市街にオーバーレイしました。";
const OgpImage =
  "https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/Overlay.png?alt=media&token=47dd02ee-efb8-438a-9d9c-ccd8d5a9eb9c";

const testLab: React.FC = () => {
  const router = useRouter();
  const path = usePathname();
  return (
    <div>
      <HeadCompo title={Title} description={Description} currentPathId={path} />
      <main>
        <AppbarGray onClick={() => router.push("/")} />
        <h2 className="text-2xl text-slate-800 font-bold px-5 text-center">
          文久改正八戸御城下略図 on Google Map
        </h2>
        <OverlayMapTest />
      </main>
    </div>
  );
};
export default testLab;
