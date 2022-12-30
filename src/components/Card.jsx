import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
    } = this.props;
    return (
      <div className="card containerCard">
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="card-img-top imgStyle"
        />
        <div className="card-body">
          <h5 data-testid="name-card" className="card-title">{ cardName }</h5>
          <p data-testid="description-card" className="card-text">{ cardDescription }</p>
        </div>
        <div className="list-group list-group-flush att">

          <p data-testid="attr1-card" className="card-text">
            {' '}
            <span> SIZE.................................... </span>
            { cardAttr1 }

          </p>
          <p data-testid="attr2-card" className="card-text">
            <span>SPEED.................................... </span>
            { cardAttr2 }
          </p>
          <p data-testid="attr3-card" className="card-text">
            <span>FORCE.................................... </span>
            { cardAttr3 }
          </p>
          <p data-testid="rare-card" className="card-text">
            { cardRare }
          </p>
          {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
          {/* <h2>
          { hasTrunfo ? (
            <span>Você já tem um Super Trunfo em seu baralho</span>
          ) : (
            <span>Carta comum</span>
          )}
        </h2> */}
        </div>
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,

};

export default Card;
