import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Header from './components/Header';
import Filter from './components/Filter';
import './App.css';

const stateInicial = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardFilter: '',
};

class App extends React.Component {
  state = {
    ...stateInicial,
    filterTrunfo: false,
    hasTrunfo: false,
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    onSaveButtonClick: [],
  };

  validateInfo = () => {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const limit = 90;
    const power = 210;
    const nome = cardName.length > 0;
    const img = cardImage.length > 0;
    const description = cardDescription.length > 0;
    const card1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= limit;
    const card2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= limit;
    const card3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= limit;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const total = sum <= power;

    this.setState({
      isSaveButtonDisabled: !(
        nome
        && img
        && description
        && card1
        && card2
        && card3
        && total
      ),
    });
  };

  onInputChange = ({ target }) => {
    const { value, name, checked } = target;
    const newCard = name === 'cardTrunfo' ? checked : value;
    this.setState(
      {
        [name]: newCard,
      },
      this.validateInfo,
    );
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;
    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
        cardTrunfo: false,
      });
    }
    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState(
      (prevState) => ({
        onSaveButtonClick: [...prevState.onSaveButtonClick, newCard],
      }),
    );
    this.setState({ ...stateInicial });
  };

  deleteCard = (name, trunfo) => {
    const { onSaveButtonClick } = this.state;
    if (trunfo === true) {
      const cardNormal = onSaveButtonClick
        .filter((element) => element.cardTrunfo !== trunfo);
      this.setState({
        onSaveButtonClick: [...cardNormal],
        cardTrunfo: false,
        hasTrunfo: false,
      });
    } else {
      const card = onSaveButtonClick.filter((element) => element.cardName !== name);
      this.setState({
        onSaveButtonClick: [...card],
      });
    }
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      cardFilter: value,
    });
  };

  handleFilter = ({ target: { checked } }) => {
    this.setState({
      filterTrunfo: checked,
    });
  };

  render() {
    const { onSaveButtonClick, cardFilter, filterTrunfo } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <div>
            <h1>PR??-VISUALIZA????O</h1>
            <Card
              { ...this.state }
              onInputChange={ this.onInputChange }
            />
          </div>
        </div>
        <h2>TODAS AS CARTAS</h2>
        <Filter
          handleChange={ this.handleChange }
          handleFilter={ this.handleFilter }
          filterTrunfo={ filterTrunfo }
        />
        <div className="containerList">
          {
            onSaveButtonClick
              .filter((card) => card.cardName.includes(cardFilter)
              || card.cardRare === cardFilter)
              .filter((card) => (filterTrunfo ? card.cardTrunfo : card))
              .map(
                ({
                  cardName,
                  cardDescription,
                  cardAttr1,
                  cardAttr2,
                  cardAttr3,
                  cardImage,
                  cardRare,
                  cardTrunfo,
                }) => (
                  <section key={ cardName } className="alinhamento">

                    <Card
                      key={ cardName }
                      cardName={ cardName }
                      cardImage={ cardImage }
                      cardDescription={ cardDescription }
                      cardAttr1={ cardAttr1 }
                      cardAttr2={ cardAttr2 }
                      cardAttr3={ cardAttr3 }
                      cardRare={ cardRare }
                      cardTrunfo={ cardTrunfo }
                    />
                    <button
                      onClick={ () => this.deleteCard(cardName, cardTrunfo) }
                      data-testid="delete-button"
                      key={ cardName }
                      type="button"
                    >
                      Excluir

                    </button>

                  </section>
                ),
              )
          }
        </div>

      </div>
    );
  }
}

export default App;
