import React, { Component } from 'react';
import styled from 'styled-components';

import Connect from './apiConnect';
import Cards from './Cards/Cards';
import Tabs from './Tabs/Tabs';

const TableInfo = styled.table`
  margin: 0 auto;
  width: auto;
  cursor: pointer;
`;

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { prop: props, typeView: 'table', data: '', sortByDesc: true };
    this.connect = new Connect();
  }

  componentWillMount() {
    if (localStorage.getItem('data')) {
      let res = JSON.parse(localStorage.getItem('data'));
      this.setState({ data: res });
    } else {
      this.connect.getUsers().then(res => {
        this.setState({ data: res });
        localStorage.setItem('data', JSON.stringify(res)); /// (UNSAFE)
      });
    }
  }

  checkTabs = status =>
    status === 'cards'
      ? this.setState({ typeView: 'cards' })
      : this.setState({ typeView: 'table' });

  sortByDesc() {
    this.setState({ sortByDesc: !this.state.sortByDesc });
    let newArr = [...this.state.data];
    newArr.sort((a, b) => {
      if (a.name.first > b.name.first) {
        return 1;
      }
      if (a.name.first < b.name.first) {
        return -1;
      }
      return 0;
    });
    if (this.state.sortByDesc) {
      newArr.reverse();
    }
    this.setState({ data: newArr });
  }

  render() {
    if (this.state.data && this.state.typeView === 'table') {
      return (
        <div className="main">
          <Tabs checkTabs={this.checkTabs} />

          <TableInfo className="tableU uk-table uk-table-hover uk-table-middle uk-table-divider ">
            <thead>
              <tr>
                <th className="uk-table-shrink">Foto</th>
                <th
                  className="uk-table-expand"
                  onClick={this.sortByDesc.bind(this)}
                >
                  Name &#8593;&#8595;
                </th>
                <th className="uk-table-expand">Phone + Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(item => {
                return (
                  <tr key={item.login.username}>
                    <td>
                      <img
                        className="uk-preserve-width uk-border-circle"
                        alt="img"
                        src={item.picture.medium}
                      />
                    </td>
                    <td className="uk-table-link">
                      <a
                        className="uk-link-reset"
                        href={'/user/' + item.login.username}
                      >
                        {item.name.first} {item.name.last}
                      </a>
                    </td>
                    <td className="uk-text-expand">
                      Phone: {item.phone} <br /> Email: {item.email}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </TableInfo>
        </div>
      );
    } else if (this.state.typeView === 'cards') {
      return (
        <div>
          <Tabs checkTabs={this.checkTabs} />
          <Cards data={this.state.data} />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Page;
