import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { handleChange, handleFilter, filterTrunfo } = this.props;
    return (
      <div className="filter">
        <label htmlFor="cardFilter">
          Filtros de busca:
          <input
            type="text"
            name="cardFilter"
            id="cardFilter"
            placeholder="Nome da carta"
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
            className="form-select"
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
