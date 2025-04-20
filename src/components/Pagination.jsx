import Button from "./UI/Button";

import React from "react";

export default function Pagination({ onNext, onPrev, nextUrl, prevUrl }) {
  return (
    <div className="mt-6 space-x-8">
      {prevUrl !== undefined && (
        <Button onClick={onPrev} isNavigation>
          Prev
        </Button>
      )}
      {nextUrl !== undefined && (
        <Button onClick={onNext} isNavigation>
          Next
        </Button>
      )}
    </div>
  );
}
