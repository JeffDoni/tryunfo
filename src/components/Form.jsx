import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <h1>ADICIONE UMA NOVA CARTA</h1>
        <fieldset>
          <label htmlFor="cardName">
            Nome
            <input
              type="text"
              name="cardName"
              id="cardName"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              className="form-control"
            />
          </label>
          <label htmlFor="cardDescription">
            <p>Descrição</p>
            <textarea
              name="cardDescription"
              id="cardDescription"
              cols="30"
              rows="1"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              className="form-control"
            />
          </label>
          <label htmlFor="cardAttr1">
            <p>atrr01</p>
            <input
              maxLength={ 90 }
              minLength={ 1 }
              type="number"
              name="cardAttr1"
              id="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr2">
            <p>atrr02</p>
            <input
              maxLength={ 90 }
              minLength={ 1 }
              type="number"
              name="cardAttr2"
              id="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr3">
            <p>atrr03</p>
            <input
              maxLength={ 90 }
              minLength={ 1 }
              type="number"
              name="cardAttr3"
              id="cardAttr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardImage">
            <p>Imagem: </p>
            <input
              type="text"
              name="cardImage"
              id="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardRare">
            <select
              name="cardRare"
              id="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          {hasTrunfo ? (<p>Você já tem um Super Trunfo em seu baralho</p>)
            : (
              <label htmlFor="cardTrunfo" className="form-check-label">
                Super Trunfo:
                <input
                  type="checkbox"
                  name="cardTrunfo"
                  id="cardTrunfo"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  className="form-check-input"
                />
              </label>
            )}
          <button
            data-testid="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </fieldset>
      </form>

    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
  handleChange: PropTypes.func,
}.isRequired;
export default Form;
