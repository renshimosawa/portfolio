"use client";

import IconButton from "../../bases/IconButton";
import React, { CSSProperties, useCallback, useMemo, useState } from "react";
import Image from "next/image";

export type Props = {
  className?: string;
  onSkillClick?: () => void;
};

const useFadeInOut = (durationSec: number) => {
  const [display, setDisplay] = useState(false);

  const handleClose = useCallback(() => {
    setDisplay(false);
  }, [setDisplay]);

  const handleOpen = useCallback(() => {
    setDisplay(true);
  }, [setDisplay]);

  const toggleDisplay = useCallback(() => {
    setDisplay(true);
    setTimeout(() => setDisplay(false), 2000);
  }, [setDisplay]);

  const boxStyle = useMemo((): CSSProperties => {
    if (display) {
      return {
        opacity: 1,
        visibility: "visible",
        transition: `opacity ${durationSec}s`,
      };
    }

    return {
      opacity: 0,
      visibility: "hidden",
      transition: `opacity ${durationSec}s, visibility 0s ${durationSec}s`,
    };
  }, [durationSec, display]);

  return { display, handleOpen, handleClose, toggleDisplay, boxStyle };
};

const Profile: React.FC<Props> = ({ className, onSkillClick }) => {
  const { toggleDisplay, boxStyle } = useFadeInOut(0.2);

  return (
    <div className={`w-screen mt-16 ${className}`}>
      <div className="flex flex-col text-center">
        <h2 className="text-3xl font-bold mb-3">Ren Shimosawa</h2>
        <div className="w-[200px] h-[200px] rounded-[100px] overflow-hidden m-auto">
          <Image
            src="face-icon.svg"
            alt="Ren Shimosawaのアイコン"
            width={200}
            height={200}
          />
        </div>
        <p className="text mt-5">フロントエンドエンジニア</p>
        {/* <SkillButton onSkillClick={onSkillClick} label="Skill Sheet" /> */}
        <div className="flex justify-center my-10 sm:px-[5vw]">
          <table className="text-left sm:text-sm">
            <tbody>
              <tr>
                <td className="pr-5 sm:pr-2 sm:h-[70px]">2020/02～</td>
                <td>Youtube動画編集者</td>
              </tr>
              <tr>
                <td className="pr-5 sm:pr-2 sm:h-[70px]">2020/10～</td>
                <td>
                  <span className="font-bold">Quantum Box.Inc </span>
                  <br className="md:hidden" />
                  グラフィックデザイナー
                </td>
              </tr>
              <tr>
                <td className="pr-5 sm:pr-2 sm:h-[70px]">2021/01～</td>
                <td>
                  <span className="font-bold">Quantum Box.Inc </span>
                  <br className="md:hidden" />
                  フロントエンドエンジニア
                </td>
              </tr>
              <tr>
                <td className="pr-5 sm:pr-2 sm:h-[70px]">2021/10～</td>
                <td>
                  <span className="font-bold">freee株式会社 </span>
                  <br className="md:hidden" />
                  フロントエンドエンジニア
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-around items-center w-[280px] m-auto relative">
          <a
            href="https://www.facebook.com/ren.shimosawa"
            data-tip="Facebookを開く"
            target="_blank"
            aria-label="Facebookを開く"
          >
            <IconButton type="facebook" />
          </a>

          <a
            href="https://twitter.com/ren_shimosawa"
            data-tip="Twitterを開く"
            target="_blank"
            aria-label="Twitterを開く"
          >
            <IconButton type="twitter" />
          </a>

          <a
            href="https://github.com/renshimosawa"
            data-tip="Githubを開く"
            target="_blank"
            aria-label="Githubを開く"
          >
            <IconButton type="github" />
          </a>

          <a
            href="https://zenn.dev/renshimosawa"
            data-tip="Zennを開く"
            target="_blank"
            aria-label="Zennを開く"
          >
            <IconButton type="zenn" />
          </a>
        </div>
        {/* <ReactTooltip border={true} arrowColor="none" place="bottom" effect="solid" type="info" /> */}
        {/* <Tooltips
          label="メールアドレスをコピーしました"
          className="absolute top-0 left-[48%]"
          style={boxStyle}
        /> */}
      </div>
    </div>
  );
};

export default Profile;
