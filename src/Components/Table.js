import React, { Component } from "react";

import "./styleTable.css";

const columns = ["id"];

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = { data: props };
    }

    render() {
        return (
            <table>
                <thead columns={columns} />
                <tbody>
                    <tr>
                        <td>We have</td>
                    </tr>
                    <tr>
                        <td>We have</td>
                    </tr>
                    <tr>
                        <td>We have</td>
                    </tr>
                    <tr>
                        <td>We have</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;