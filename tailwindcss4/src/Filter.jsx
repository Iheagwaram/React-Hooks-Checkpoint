import React from "react";

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div className="flex gap-4 my-4">
      <input
        type="text"
        placeholder="Search by title..."
        className="border p-2"
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        className="border p-2"
        onChange={(e) => setFilterRating(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;