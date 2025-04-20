import React, { useCallback, useState } from "react";
import Button from "./UI/Button";

export default function SongItem({ artistName, titleSong, onGetLyrics }) {
  const [textIsOverflow, setTextIsOverflow] = useState(true);

  function handleShowHiddenText() {
    setTextIsOverflow((prev) => !prev);
  }

  const textOverflow = useCallback((el) => {
    if (el) {
      const isOverflowing = el.scrollWidth > el.clientWidth;
      setTextIsOverflow(isOverflowing);

      console.log(el.scrollWidth, el.clientWidth);
    }
  }, []);

  return (
    <li className="w-full flex justify-between items-center gap-4  ">
      <p
        ref={textOverflow}
        onClick={handleShowHiddenText}
        className={`text-start whitespace-nowrap ${
          textIsOverflow ? "text-ellipsis overflow-clip max-w-90 min-w-50 " : ""
        } `}
      >
        <span className="font-bold">{artistName}</span> {titleSong}
      </p>{" "}
      <Button onClick={() => onGetLyrics(artistName, titleSong)}>
        Get Lyrics
      </Button>
    </li>
  );
}
