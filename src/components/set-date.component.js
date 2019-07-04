import React from 'react';
import axios from 'axios' // Libreria para hacer peticiones

const inputParsers = {
  date(input) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

class MyForm extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const start = form.start.value // Fecha inicio
    const end = form.end.value // Fecha final

    // Segundo metodo
    // con async / await 
    let { data } = await axios({
        url: 'http://localhost:4000',
        method: 'post',
        data: { start, end }
    })

    console.log(data) // datos encontrados
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <input
          name="start"
          type="text"
          data-parse="date"
        />

        <input
          name="end"
          type="text"
          data-parse="date"
        />

        <button>Send data!</button>
      </form>
    );
  }
}

export default MyForm;