"use client";

import React from "react";
import RoundButton from "../RoundButton";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  onHeianClick?: () => void;
  onKamakuraClick?: () => void;
  onSengokuClick?: () => void;
  onBakumatsuClick?: () => void;
  disabledKyoto?: boolean;
  disabledKamakura?: boolean;
  disabledSengoku?: boolean;
  disabledBakumatsu?: boolean;
};

const SwitchBar: React.FC<Props> = ({
  className,
  style,
  onHeianClick: onHeianClick,
  onKamakuraClick,
  onSengokuClick,
  onBakumatsuClick,
  disabledKyoto,
  disabledKamakura,
  disabledSengoku,
  disabledBakumatsu,
}) => {
  return (
    <div className={`${className}`} style={style}>
      <div className="flex flex-wrap justify-center items-center gap-2.5">
        <RoundButton
          label="平安"
          onSkillClick={onHeianClick}
          disabled={disabledKyoto}
        />
        <RoundButton
          label="鎌倉"
          onSkillClick={onKamakuraClick}
          disabled={disabledKamakura}
        />
        <RoundButton
          label="戦国"
          onSkillClick={onSengokuClick}
          disabled={disabledSengoku}
        />
        <RoundButton
          label="幕末"
          onSkillClick={onBakumatsuClick}
          disabled={disabledBakumatsu}
        />
      </div>
    </div>
  );
};

export default SwitchBar;
