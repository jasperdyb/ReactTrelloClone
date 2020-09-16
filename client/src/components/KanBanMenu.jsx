import React, { useState, useEffect } from "react";

export default function KanBanMenu({
  kanBanMenuState,
  updateMenuState,
  updateWallpaperUrl,
}) {
  const [unsplashUrls, setUrls] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&count=20&orientation=landscape&query=nature`
    )
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        const flitteredData = jsonData.map((picData) => ({
          id: picData.id,
          url: `${picData.urls.raw}&fm=jpg&w=800&h=450&fit=max`,
        }));
        setUrls(flitteredData);
      });
  }, []);

  function handleClick(e) {
    e.preventDefault();
    updateMenuState({ show: false, render: true });
  }

  function onAnimationEnd() {
    if (!kanBanMenuState.show) updateMenuState({ show: false, render: false });
  }

  function handlePickWallpaper(id) {
    console.log(id);

    fetch(
      `https://api.unsplash.com/photos/${id}/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        updateWallpaperUrl(`${jsonData.urls.raw}&fm=jpg&w=1600&h=900&fit=max`);
      });
  }

  return (
    <div
      style={{
        animation: `${kanBanMenuState.show ? "slideIn" : "slideOut"} 1s`,
      }}
      className="board-menu"
      onAnimationEnd={onAnimationEnd}
    >
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={handleClick}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="w100 text-center py-2">Pick a wallpaper</div>
      <hr className="my-0 mx-3" />
      <div className="wallpaper-collection py-1">
        {unsplashUrls.map((wallpaper) => {
          return (
            <div key={wallpaper.id} className="choice-wrapper p-1">
              <img
                src={wallpaper.url}
                alt=""
                className="choice"
                onClick={(e) => {
                  handlePickWallpaper(wallpaper.id);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
