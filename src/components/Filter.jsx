import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { handleChange, handleFilter, filterTrunfo } = this.props;
    return (
      <div>
        <label htmlFor="cardFilter" className="filter">
          <input
            type="text"
            name="cardFilter"
            id="cardFilter"
            onChange={ handleChange }
            disabled={ filterTrunfo }
            data-testid="name-filter"
          />
        </label>
        <label htmlFor="cardRareFilter">
          <select
            name="cardRareFilter"
            id="cardRareFilter"
            data-testid="rare-filter"
            onChange={ handleChange }
            disabled={ filterTrunfo }
          >
            <option value="">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="filterTrunfo">
          Super Trunfo:
          <input
            type="checkbox"
            name="filterTrunfo"
            id="filterTrunfo"
            data-testid="trunfo-filter"
            onChange={ handleFilter }
            disabled={ filterTrunfo }
          />
        </label>
      </div>
    );
  }
}
Filter.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;

export default Filter;
