import React from "react";

export default function KanBanMenu({ updateMenuState }) {
  function handleClick(e) {
    e.preventDefault();
    updateMenuState({ show: false });
  }

  return (
    <div className="board-menu">
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
    </div>
  );
}
