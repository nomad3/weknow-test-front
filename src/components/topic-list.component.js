import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Topic = props => (
    <tr>
        <td>{props.topic.value}</td>
        <td>{props.count.value}</td>
    </tr>
)

export default class TopicList extends Component {

    constructor(props) {
        super(props);
        this.state = {topics: []};
    }

    topicList() {
        return this.state.topics.map(function(currentTopic, i) {
            return <Topic topics={currentTopic} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Topic List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                        <form onsubmit={this.formHandler(this.state.formFields)}>
          <strong>Username:</strong> <br /> <input type="text" name="username" placeholder="Nathaniel" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.username} /> <br />
          <strong>Email:</strong> <br /> <input type="email" name="email" placeholder="me@example.com" /> <br />
          <strong>Confirm Email:</strong> <br /> <input type="email" name="confirmemail" placeholder="me@example.com" /> <br />
          <strong>Password:</strong> <br /> <input type="password" name="password" placeholder="********" /> <br />
          <strong>Confirm Password:</strong> <br /> <input type="password" name="confirmpassword" placeholder="********" /> <br /><br />
          <button class="btn btn-primary">Register Account</button>
        </form>
                        </tr>
                        <tr>
                            <th>Topic</th>
                            <th>Count</th>

                        </tr>
                    </thead>
                    <tbody>
                        { this.topicList }
                    </tbody>
                </table>
            </div>
        )
    }
}
inputChangeHandler(e) {
    let formFields = {...this.state.formFields};
    formFields[e.target.name] = e.target.value;
    this.setState({
     formFields
    });
   }
 
   formHandler(formFields) {
    axios.post('/api/register', formFields)
      .then(function(response){
        console.log(response);
        //Perform action based on response
    })
      .catch(function(error){
        console.log(error);
        //Perform action based on error
      });
   }
 }
 
 export default Register