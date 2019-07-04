import React from 'react';
import axios from 'axios'

class MyForm extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const start = form.start.value // START DATE
    const end = form.end.value // END DATE

    let { data } = await axios({
        url: 'http://localhost:4000',
        method: 'post',
        data: { start, end }
    })

    console.log(data) // response data from api
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

        <button>Send Dates!</button>
      </form>
    );
  }
}

export default MyForm;