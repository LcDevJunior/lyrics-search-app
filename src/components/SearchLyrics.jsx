import React from "react";

export default function SearchLyrics({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const searchValue = formData.get("searchQuery").trim().toLowerCase();

    if (!searchValue) return;

    onSearch(searchValue);

    e.target.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full bg-white  rounded-full flex"
    >
      <input
        name="searchQuery"
        placeholder="Enter Artist or Song Name"
        type="text"
        className="w-5/7 @md:px-6 @md:py-2.5 px-4 py-2 focus:outline-0 text-lg @md:placeholder:text-lg placeholder:text-base"
      />
      <button className="bg-fuchsia-400  text-white w-2/7 rounded-full font-semibold px-6 cursor-pointer m-1 hover:bg-fuchsia-600 transition duration-300 ease-in-out">
        Search
      </button>
    </form>
  );
}
