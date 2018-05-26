import React, { Component } from "react";
import Connect from "./apiConnect";

import "./styleTable.css";

const columns = ["id"];

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = { data: props, users: '' };
        this.connect = new Connect();
    }

    componentWillMount() {
        this.setState({ users: this.connect.getUsers() })
    }
    // .results["0"].picture.thumbnail
    render() {
        // console.log(this.state);
        console.log(this.state)
        return (
            <div className='main'>
                <table className='uk-table tableU'>
                    <thead columns={columns} />
                    <caption>Users</caption>
                    <tbody>
                        <tr>
                            <th>Table Heading</th>
                            <th>Table Heading</th>
                            <th>Table Heading</th>
                        </tr>
                        <tr>
                            <th>Table Heading</th>
                            <th>Table Heading</th>
                            <th>Table Heading</th>
                        </tr>
                        <tr>
                            <th>Table Heading</th>
                            <th>Table Heading</th>
                            <th>Table Heading</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;