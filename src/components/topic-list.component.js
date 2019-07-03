import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Topic = props => (
    <tr>
        <td>{props.topic.topic}</td>
        <td>{props.topic.count}</td>
    </tr>
)

export default class TopicList extends Component {

    constructor(props) {
        super(props);
        this.state = {topics: []};
    }

    componentDidMount() {
        fetch("http://23.239.16.36:4000/", {
            method: 'POST',
            headers: new Headers({
                        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': 'true',
                }),
            body: "start=2018-02-01&end=2018-03-01" // <-- Post parameters
            })
            .then((response) => response.text())
            .then(response => {
                this.setState({response: response.data});
            })
            .then((responseText) => {
            alert(responseText);
            })
            
            .catch(function (error) {
                console.log(error);
            })
    }

    topicList() {
        return this.state.topics.map(function(currentTopic, i) {
            return <Topic topic={currentTopic} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Topic List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Topic</th>
                            <th>Count</th>

                        </tr>
                    </thead>
                    <tbody>
                        { this.topicList() }
                    </tbody>
                </table>
            </div>
        )
    }
}