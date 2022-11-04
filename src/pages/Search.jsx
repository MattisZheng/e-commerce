import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const { keyword } = useParams();

  const [results, setResults] = useState([]);

  return <main>{keyword}</main>;
};

export default Search;
