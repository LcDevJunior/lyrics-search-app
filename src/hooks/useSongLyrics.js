// hooks/useSongLyrics.js
import { useQuery } from "@tanstack/react-query";
import { fetchSongLyrics } from "../fetchSongs";

export function useSongLyrics(selectedSong) {
  return useQuery({
    queryKey: [
      "songLyrics",
      { artist: selectedSong?.artist, title: selectedSong?.title },
    ],
    queryFn: ({ queryKey }) =>
      fetchSongLyrics(queryKey[1].artist, queryKey[1].title),
    enabled: !!selectedSong,
  });
}
