import React from "react";

export default function KanBanMenu({ kanBanMenuState, updateMenuState }) {
  function handleClick(e) {
    e.preventDefault();
    updateMenuState({ show: false, render: true });
  }

  function onAnimationEnd() {
    if (!kanBanMenuState.show) updateMenuState({ show: false, render: false });
  }

  const wallPaperList = [0, 1, 2, 3, 4, 5];

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
        class="close"
        aria-label="Close"
        onClick={handleClick}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="w100 text-center py-2">Pick a wallpaper</div>
      <hr className="my-0 mx-3" />
      <div className="wallpaper-collection py-1">
        {wallPaperList.map((n) => {
          return (
            <div key={n} className="choice-wrapper">
              <div className="choice m-1"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
