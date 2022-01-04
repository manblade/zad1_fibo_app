import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
    show: false,
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({ index: '' });
    await this.fetchIndexes();
    await this.fetchValues();
  };

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const entries = [];

    var elements = this.state.seenIndexes.map(({ number }) => number);
    for (var i=0; i<elements.length; i++) {
      entries.push(
        <div>
          Dla liczby "k"={elements[i]}, wynik wynosi: {this.state.values[elements[i]]}
        </div>
      )
    }
    return entries;
  }
  
  showHideHistory() {
    var x = document.getElementById("history");
    if(x.style.display === "none") {
      x.style.display = "block";
    }
    else x.style.display = "none";
  }

  render() {
    return (
      <div>
        <header className="App-fibo App-header">
        <form onSubmit={this.handleSubmit}>
          <label>Wprowadź wartość "k": </label>
          <input type="number" min="0" max ="20"
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button>Oblicz</button>
        </form>

        <p><button onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Ukryj ' : 'Pokaz'} historie</button>
        </p>
        {
          this.state.show? <div id="history">
          <h3>10 ostatnich wprowadzonych wartości "k":</h3>
            {this.renderSeenIndexes()}
          <h3>10 ostatnich obliczonych wartości:</h3>
          {this.renderValues()}
        </div> : null
        }
        <p><a href="/">Wróć na stronę główna</a></p>
        </header>
      </div>
    );
  }
}

export default Fib;
