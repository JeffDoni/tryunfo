import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="cardFilter" className="filter">
          <input
            type="text"
            name="cardFilter"
            id="cardFilter"
            onChange={ handleChange }
            data-testid="name-filter"
          />
        </label>
        <label htmlFor="cardRareFilter">
          <select
            name="cardRareFilter"
            id="cardRareFilter"
            data-testid="rare-filter"
            onChange={ handleChange }
          >
            <option value="">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
      </div>
    );
  }
}
Filter.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;

export default Filter;
