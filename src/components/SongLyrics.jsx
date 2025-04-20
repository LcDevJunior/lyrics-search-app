import Loading from "./UI/Loading";

export default function SongLyrics({
  lyricsData,
  artist,
  songTitle,
  isLoading,
  isError,
  errorLyrics,
  onBack,
}) {
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 my-4">
        <p>An error occurred: {errorLyrics?.message || "Unknown error"}</p>
      </div>
    );
  }

  if (lyricsData) {
    return (
      <div className="relative max-w-2xl w-[90%] mx-auto bg-white p-6 rounded shadow-xl ">
        <button
          onClick={onBack}
          className="absolute -left-10 top-0 cursor-pointer text-black bg-fuchsia-400"
        >
          Back
        </button>
        <h2 className="text-xl text-balance font-bold mb-6 text-center">
          {artist} – {songTitle}
        </h2>
        <pre className="whitespace-pre-wrap text-gray-800 leading-relaxed">
          {lyricsData}
        </pre>
      </div>
    );
  }

  return null;
}
