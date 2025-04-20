import { useEffect, useState } from "react";

import Header from "./components/Header";
import SearchResultItems from "./components/SearchResultItems";
import Pagination from "./components/Pagination";
import SongLyrics from "./components/SongLyrics.jsx";

import { useSongs } from "./hooks/useSongs.js";
import { useSongLyrics } from "./hooks/useSongLyrics.js";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [index, setIndex] = useState(null);
  const [selectedSong, setSelectedSong] = useState();

  const {
    data: songs,
    isLoading: isLoadingSearch,
    isError: isErrorSearch,
    error: searchError,
    refetch: fetchSongs,
  } = useSongs(searchTerm, index);

  const {
    data: songLyrics,
    isLoading: isLoadingLyrics,
    isError: isErrorLyrics,
    error: getLyricsError,
  } = useSongLyrics(selectedSong);

  function getQueryIndex(urlString) {
    const parsedURL = new URL(urlString);
    const value = new URLSearchParams(parsedURL.search);

    return value.get("index");
  }

  function loadNextSongs() {
    const index = getQueryIndex(songs.nextPageURL);

    setIndex(index);
    console.log(index);
  }

  function loadPrevSongs() {
    const index = getQueryIndex(songs.prevPageURL);

    setIndex(index);
  }

  function getSongLyrics(artist, title) {
    setSelectedSong({ artist, title });
  }

  useEffect(() => {
    console.log(songLyrics);
  });

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
    setSelectedSong();
  }

  function backPrevious() {
    setSelectedSong();
    fetchSongs();
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <section className="flex items-center justify-center flex-col my-7">
        {!selectedSong && (
          <>
            <SearchResultItems
              songs={songs?.formattedSongs}
              isLoadingSearch={isLoadingSearch}
              isErrorSearch={isErrorSearch}
              errorSearch={searchError}
              onGetLyrics={getSongLyrics}
            />

            <Pagination
              onNext={loadNextSongs}
              onPrev={loadPrevSongs}
              nextUrl={songs?.nextPageURL}
              prevUrl={songs?.prevPageURL}
            />
          </>
        )}

        {selectedSong && (
          <SongLyrics
            lyricsData={songLyrics?.lyrics}
            artist={selectedSong.artist}
            songTitle={selectedSong.title}
            onBack={backPrevious}
            isLoading={isLoadingLyrics}
            isError={isErrorLyrics}
            errorLyrics={getLyricsError}
          />
        )}
      </section>
    </>
  );
}

export default App;
