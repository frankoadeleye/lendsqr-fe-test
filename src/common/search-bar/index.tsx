import "./styled.scss";
import Svgs from "src/assets/svgs";

const { SearchIcon } = Svgs;

type SearchbarProps = {
  type?: string;
  placeholder?: string;
};

function SearchBar({
  type = "text",
  placeholder = "Search for anything",
}: SearchbarProps) {
  return (
    <div className="search-bar-wrap">
      <input type={type} placeholder={placeholder} />
      <div className="search-bar-wrap__button">
        <img src={SearchIcon} alt="search" />
      </div>
    </div>
  );
}

export default SearchBar;
