import "../styles/CoinInputSearch.css";

import { useDispatch } from "react-redux";
import { setCoinToSearch } from "../redux/coinReducer";

const CoinInputSearch = () => {
  const dispatch = useDispatch();

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search Cryptocurrency..."
      onChange={(e) => dispatch(setCoinToSearch(e.target.value))}
    />
  );
};

export default CoinInputSearch;
