import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

export default function WallpaperChoice({
  wallpaperId,
  wallpaperUrl,
  updateWallpaperUrl,
}) {
  const [loading, setLoading] = useState(false);

  function handlePickWallpaper(id) {
    setLoading(true);

    fetch(
      `https://api.unsplash.com/photos/${id}/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        updateWallpaperUrl(
          `${jsonData.urls.raw}&fm=jpg&w=${window.innerWidth}&h=${window.innerHeight}&fit=min`
        );
      })
      .then(() => {
        setLoading(false);
      });
  }

  return (
    <div className={`choice-wrapper p-1 ${loading ? "loading" : ""}`}>
      {loading && (
        <Spinner animation="border" role="status" className="loading-icon">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      <img
        src={wallpaperUrl}
        alt=""
        className="choice"
        onClick={() => {
          handlePickWallpaper(wallpaperId);
        }}
      />
    </div>
  );
}
