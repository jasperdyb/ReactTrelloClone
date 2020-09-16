import React, { useEffect } from "react";

export default function Wallpaper({ wallpaperUrl, updateWallpaperUrl }) {
  useEffect(() => {
    fetch("https://source.unsplash.com/1600x900/?nature").then((res) => {
      updateWallpaperUrl(res.url);
    });
  }, []);

  return <img src={wallpaperUrl} alt="" className="wallpaper" />;
}
