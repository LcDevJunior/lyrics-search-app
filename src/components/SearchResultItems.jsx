import React from "react";

import SongItem from "./SongItem";
import Loading from "./UI/Loading";

export default function SearchResultItems({
  songs,
  onGetLyrics,
  isLoadingSearch,
  isErrorSearch,
  errorSearch,
}) {
  let content = <p>Please Enter keyword to search song</p>;

  if (isLoadingSearch) {
    content = <Loading />;
  }

  if (isErrorSearch) {
    content = <p>An Error occur : {errorSearch}</p>;
  }
  if (songs) {
    content = songs.map((song) => (
      <SongItem
        key={`${song.artist} - ${song.title}`}
        artistName={song.artist}
        titleSong={song.title}
        onGetLyrics={onGetLyrics}
      />
    ));
  }

  console.log(isLoadingSearch);
  return (
    <>
      <ul className="w-[85%] max-w-lg list-none space-y-3 text-center">
        {content}
      </ul>
    </>
  );
}
