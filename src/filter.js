import React from "react";

const NameFilter = ({ value, onClick = () => {} }) => (
  <div className="name-filter">
    <input
      className="filter-text"
      value={value}
      type="text"
      onChange={event => {
        onClick(event.target.value);
      }}
    />
    <input className="filter-button" type="button" value="Search" />
  </div>
);

export default NameFilter;
