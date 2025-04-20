import axios from "axios";
import { API_ENDPOINTS } from "./api";

async function fetchSongs(urlString) {
  try {
    const response = await axios.get(urlString);
    return response;
  } catch (err) {
    console.error("Error fetching songs:", err.message);
    throw new Error(err.message); // let react-query handle errors
  }
}

export async function fetchSongLyrics(artist, songTitle) {
  let getLyricsURL = `${API_ENDPOINTS.getSongLyrics}?artist=${artist}&title=${songTitle}`;

  const response = await fetchSongs(getLyricsURL);

  return response.data;
}

export async function fetchSongsWithIndex(searchTerm, index) {
  let url = `${API_ENDPOINTS.loadSongs}?searchQuery=${searchTerm}`;

  if (index !== null) {
    url += `&index=${index}`;
  }

  const response = await fetchSongs(url);

  console.log(response);

  const nextPageURL = response.data.next;
  const prevPageURL = response.data.prev;

  const rawSongs = response.data.data;

  const formattedSongs = rawSongs.map(({ title, artist }) => ({
    title,
    artist: artist.name,
  }));

  return { formattedSongs, nextPageURL, prevPageURL };
}
