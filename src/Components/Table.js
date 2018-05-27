import React, { Component } from "react";
import Connect from "./apiConnect";

import "./styleTable.css";


class Table extends Component {
    constructor(props) {
        super(props)
        this.state = { prop: props, data: '' };
        this.connect = new Connect();
    }

    componentWillMount() {
        this.connect.getUsers().then(res => {
            this.setState({ data: res })
        })


    }

    sortByDesc() {
        let newArr = this.state.data.sort((a, b) => {
            if (a.name.first < b.name.first) { return 1; }
            if (a.name.first > b.name.first) { return -1; }
            return 0;
        })
        this.setState({ data: newArr });
    }

    render() {
        if (this.state.data) {
            return (
                <div className='main'>
                    <table className='uk-table uk-table-hover uk-table-middle uk-table-divider tableU'>
                        <thead>
                            <tr>
                                <th className="uk-table-shrink">Foto</th>
                                <th className="uk-table-expand" onClick={this.sortByDesc.bind(this)}>Name &#8593;&#8595;</th>
                                <th className="uk-table-expand">Phone + Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((item) => {
                                return <tr>
                                    <td><img className="uk-preserve-width uk-border-circle" alt="img" src={item.picture.medium}></img></td>
                                    <td className="uk-table-link">{item.name.first} <br /> {item.name.last}</td>
                                    <td className="uk-text-expand">Phone: {item.phone} <br /> Email: {item.email}</td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                </div>
            );
        }
        else { return (<div></div>) }

    }
}

export default Table;