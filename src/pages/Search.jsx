import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const { keyword } = useParams();

  return (
    <main>
      search
      <p>{keyword}</p>
    </main>
  );
};

export default Search;
