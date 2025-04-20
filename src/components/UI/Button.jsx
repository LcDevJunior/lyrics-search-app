import React from "react";

export default function Button({ children, isNavigation, ...props }) {
  let navigationClass = "px-6 py-2";
  return (
    <button
      {...props}
      className={`bg-purple-500 cursor-pointer shrink-0 rounded-full text-sm text-white font-semibold ${
        isNavigation ? navigationClass : "px-2 py-1"
      } hover:bg-purple-600 transition-colors ease-linear duration-200`}
    >
      {children}
    </button>
  );
}
