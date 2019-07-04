import React from 'react';

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

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
   
    fetch('http://23.239.16.36:4000/', {
        mode: 'no-cors',
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        }),
        body: data,
    });
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