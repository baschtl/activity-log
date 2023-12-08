import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm(props) {
  const [search, setSearch] = React.useState('');

  const handleChange = (e) => {
    e.preventDefault();

    const query = e.target.value;
    setSearch(query);
    props.onSearch(query);
  };

  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          id="search-input"
          className="input"
          name="search"
          autoComplete="off"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
