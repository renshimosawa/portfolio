"use client";

import AppbarWhite from "@/components/domains/AppbarWhite";
import Footer from "@/components/domains/Footer";
import HeadCompo from "@/components/domains/HeadCompo";
import Profile from "@/components/domains/Profile";
import Top from "@/components/domains/Top";
import { usePathname } from "next/navigation";
import router from "next/router";
import ImgCard from "@/components/domains/ImgCard";
import VideoCard from "@/components/domains/VideoCard";
import { Fade } from "react-awesome-reveal";

const OgpImage =
  "https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/OGP-100.jpg?alt=media&token=607b69df-42b7-47fd-b5fe-11b042b6f16f";
export default function Home() {
  const path = usePathname();

  return (
    <div className="w-screen h-screen">
      <HeadCompo ogImage={OgpImage} currentPathId={path} />
      <main>
        {/* <Fade> */}
        <Top className="relative" title="History and Knowledge" />
        <Profile onSkillClick={() => router.push("/skill-sheet")} />
        <div className="sm:px-[5%]">
          <div>
            <div className="w-full mt-20 text-center">
              <h2 className="text-3xl font-bold my-10">Portfolio</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 w-[75vw] m-auto">
              <a href="https://it-feels-it.com/" target="_blank">
                <ImgCard
                  labelStyle={{ color: "#575757" }}
                  label="【Web制作】it feels it HP"
                  imgUrl="/it-feels-it.png"
                  alt="it feels itホームページの画像"
                />
              </a>
              <a href="https://quantum-box.com/" target="_blank">
                <ImgCard
                  labelStyle={{ color: "#575757" }}
                  label="【Web制作】Quantum Box HP"
                  imgUrl="/QBox-image.png"
                  alt="Quantum Boxホームページの画像"
                />
              </a>
              <a
                href="https://prtimes.jp/main/html/rd/p/000000001.000069392.html"
                target="_blank"
              >
                <ImgCard
                  labelStyle={{ color: "#575757" }}
                  label="【PRtimes】アレルギーカード"
                  imgUrl="/allergy-card-image.png"
                  alt="スマホアプリ アレルギーカードのPR"
                />
              </a>
              <VideoCard url="https://www.youtube.com/embed/XFMC9j25pXg" />
            </div>
          </div>
          <div>
            <div className="w-full mt-16 text-center">
              <h2 className="text-3xl font-bold my-10">古地図</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 w-[75vw] m-auto">
              <a href="/map/hachinohe/">
                <ImgCard
                  labelStyle={{ color: "#575757" }}
                  label="八戸市"
                  imgUrl="/ol-hachinohe.png"
                  alt="八戸城オーバーレイのサムネイル"
                />
              </a>
              <a href="/map/kyoto/">
                <ImgCard
                  labelStyle={{ color: "#575757" }}
                  label="京都"
                  imgUrl="/ol-kyoto.png"
                  alt="平安京オーバーレイのサムネイル"
                />
              </a>
            </div>
          </div>
        </div>
        {/* </Fade> */}
      </main>
      <Footer />
    </div>
  );
}
