// hooks/useSongs.js
import { useQuery } from "@tanstack/react-query";
import { fetchSongsWithIndex } from "../fetchSongs";

export function useSongs(searchTerm, index) {
  return useQuery({
    queryKey: ["songs", { searchTerm, index }],
    queryFn: ({ queryKey }) =>
      fetchSongsWithIndex(queryKey[1].searchTerm, queryKey[1].index),
    enabled: searchTerm !== "",
  });
}

// data: songs,
// isLoading: isLoadingSearch,
// isError: isErrorSearch,
// error: searchError,
// refetch: fetchSongs,
