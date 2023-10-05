"use client";

import Card from "../../bases/Card";

export type Props = {
  className?: string;
  url?: string;
  label?: string;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
};

const VideoCard: React.FC<Props> = ({
  className,
  url,
  label,
  style,
  labelStyle,
}) => {
  return (
    <div className="video-wrap">
      <div className="">
        <iframe
          src={url}
          width="350"
          height="180"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading={"lazy"}
        />
      </div>
    </div>
  );
};

export default VideoCard;
