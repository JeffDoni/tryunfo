import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const stateInicial = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  // hasTrunfo:false,
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  state = {
    ...stateInicial,
  };

  onInputChange = ({ target }) => {
    const { value, name, type, checked } = target;
    this.setState({
      [name]: type === 'checked' ? checked : value,
    });
  };

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
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form { ...this.state } onInputChange={ this.onInputChange } />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
        />
      </div>
    );;

  }
}

export default App;