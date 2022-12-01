import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          <input type="text" data-testid="name-input" name="name" id="name" />
        </label>
        <label htmlFor="textarea">
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="number">
          <input
            type="number"
            data-testid="attr1-input"
            name="number"
            id="number"
          />
        </label>
        <label htmlFor="number">
          <input
            type="number"
            data-testid="attr2-input"
            name="number"
            id="number"
          />
        </label>
        <label htmlFor="number">
          <input
            type="number"
            data-testid="attr3-input"
            name="number"
            id="number"
          />
        </label>
        <input type="text" data-testid="image-input" name="name" id="name" />
        <label htmlFor="select">
          <select name="select" id="select" data-testid="rare-input">
            <option value="normal"> </option>
            <option value="raro"> </option>
            <option value="muito raro"> </option>
          </select>
        </label>
        <label htmlFor="checkbox">
          <input type="checkbox" name="checkbox" data-testid="trunfo-input" />
        </label>
        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}

export default Form;
