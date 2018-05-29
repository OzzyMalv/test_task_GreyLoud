import React, { Component } from "react";
import styled from 'styled-components';

import Connect from "./apiConnect";
import Cards from './Cards';
// import Tabs from './Tabs'


// import "./styleTable.css";
import "./styleTabs.css";

const TableUka = styled.div`
    margin: 0 auto;
    width: auto;
    cursor: pointer;
`;

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = { prop: props, typeView: 'table', data: '', sortByDesc: true };
        this.connect = new Connect();
    }

    componentWillMount() {
        this.connect.getUsers().then(res => {
            this.setState({ data: res })
        })


    }
    checkTabs(status) {
        status === 'cards' ? this.setState({ typeView: 'cards' }) : this.setState({ typeView: 'table' });


    }


    sortByDesc() {
        this.setState({ sortByDesc: !this.state.sortByDesc });
        let newArr = [];
        if (this.state.sortByDesc) {
            newArr = this.state.data.sort((a, b) => {
                if (a.name.first < b.name.first) { return 1; }
                if (a.name.first > b.name.first) { return -1; }
                return 0;
            })
        } else {
            newArr = this.state.data.sort((a, b) => {
                if (a.name.first > b.name.first) { return 1; }
                if (a.name.first < b.name.first) { return -1; }
                return 0;
            })

        }
        this.setState({ data: newArr });

    }

    render() {
        if ((this.state.data) && (this.state.typeView === 'table')) {
            return (
                <div className='main'>
                    {/* <Tabs data={this.state} />  */}
                    <div className="tabsView">
                        <div uk-margin='true'>
                            <div className="uk-button uk-button-default" onClick={this.checkTabs.bind(this, 'table')}>Table</div>
                            <div className="uk-button uk-button-default" onClick={this.checkTabs.bind(this, 'cards')}>Cards</div>

                        </div>
                    </div>
                    <TableUka>
                        <table className='tableU uk-table uk-table-hover uk-table-middle uk-table-divider '>
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
                                        <td className="uk-table-link">{item.name.first}  {item.name.last}</td>
                                        <td className="uk-text-expand">Phone: {item.phone} <br /> Email: {item.email}</td>
                                    </tr>;
                                })}
                            </tbody>
                        </table>
                    </TableUka>
                </div>
            );
        } else if (this.state.typeView === 'cards') {
            return (
                <div>
                    <div className="tabsView">
                        <div uk-margin='true'>
                            <div className="uk-button uk-button-default" onClick={this.checkTabs.bind(this, 'table')}>Table</div>
                            <div className="uk-button uk-button-default" onClick={this.checkTabs.bind(this, 'cards')}>Cards</div>

                        </div>
                    </div>
                    <Cards data={this.state.data} />
                </div>
            );
        }
        else { return (<div></div>) }

    }
}

export default Table;