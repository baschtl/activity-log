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
    <form>
      <input
        type="text"
        id="search-input"
        className="input input__lg"
        name="search"
        autoComplete="off"
        placeholder="Search for activities..."
        value={search}
        onChange={handleChange}
      />
    </form>
  );
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
