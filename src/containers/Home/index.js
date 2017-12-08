import React, { Component } from 'react';
import { observer } from "mobx-react"
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    componentWillMount() {
        this.setState({
            data: this.props.stores.Todo.list
        })
    }
    render() {
        console.log(this.props.stores.Todo.arr.slice(), 'ccc');
        return (
            <div>
                <button
                    onClick={() => this.props.stores.Todo.add('hello')}
                >
                    click
                </button>
                {this.props.stores.Todo.list}
                {this.props.stores.Todo.count}
            </div>

        );
    }
}
export default observer(Home);
