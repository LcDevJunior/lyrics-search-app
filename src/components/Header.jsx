import React from "react";
import SearchLyrics from "./SearchLyrics";

export default function Header({ onSearch }) {
  return (
    <header className="@container bg-header relative bg-cover bg-center bg-no-repeat h-90 flex  justify-center items-center">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="w-[85%] max-w-110 relative z-10 flex flex-col items-center gap-4">
        <h1 className="@md:text-4xl text-3xl font-bold text-white mb-4 ">
          Lyrics Search
        </h1>
        <SearchLyrics onSearch={onSearch} />
      </div>
    </header>
  );
}
