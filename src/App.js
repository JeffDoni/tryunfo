import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const stateInicial = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
};

class App extends React.Component {
  state = {
    ...stateInicial,
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
        nome && img && description && card1 && card2 && card3 && total),
    });
  };

  onInputChange = ({ target }) => {
    const { value, name, checked } = target;
    const newCard = (name === 'cardTrunfo' ? checked : value);
    this.setState({
      [name]: newCard,
    }, this.validateInfo);
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
    // if (this.onSaveButtonClick.some((element) => element.cardTrunfo)) {
    //   this.setState({
    //     hasTrunfo: true,
    //   });
    // }

    this.setState((prevState) => ({
      onSaveButtonClick: [...prevState.onSaveButtonClick, newCard],
    }), () => {
      const { onSaveButtonClick } = this.state;
      onSaveButtonClick.some((element) => (
        element.cardTrunfo === true ? this.setState({ hasTrunfo: true })
          : (this.setState({ hasTrunfo: false }))
      ));
    });
    this.setState({ ...stateInicial });
  };

  render() {
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    //   cardTrunfo,
    // } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          // cardName={ cardName }
          // cardImage={ cardImage }
          // cardDescription={ cardDescription }
          // cardAttr1={ cardAttr1 }
          // cardAttr2={ cardAttr2 }
          // cardAttr3={ cardAttr3 }
          // cardRare={ cardRare }
          // cardTrunfo={ cardTrunfo }
          { ...this.state }
          onInputChange={ this.onInputChange }
        />

      </div>
    );
  }
}

export default App;
