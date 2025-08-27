import React from 'react';
import './Search.css';

interface SearchProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-container-fullwidth">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="ドラマタイトルを検索"
          value={searchTerm}
          onChange={onSearchChange}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default Search;
