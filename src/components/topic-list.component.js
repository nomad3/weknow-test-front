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
        axios.get('http://localhost:4000/')
            .then(response => {
                this.setState({topics: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    topicList() {
        return this.state.topics.map(function(currentTopic, i) {
            return <Todo todo={currentTopic} key={i} />;
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