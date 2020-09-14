import React, { useState, useEffect } from "react";

export default function Wallpaper() {
  const [unsplashUrl, setUrl] = useState("");

  useEffect(() => {
    fetch("https://source.unsplash.com/1600x900/?nature").then((res) => {
      console.log(res.url);
      setUrl(res.url);
    });
  }, []);

  return <img src={unsplashUrl} alt="" className="wallpaper" />;
}
