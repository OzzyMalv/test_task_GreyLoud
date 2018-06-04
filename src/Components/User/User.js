import React, { Component } from "react";

import './styleUser.css';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData: props.data.match.params.userName,
            data: ''
        };
    }

    componentWillMount() {
        let res = JSON.parse(localStorage.getItem('data'));
        this.setState({ data: res })
    }

    render() {
        return (
            <div className='cardInfo'>
                {this.state.data.filter(item => item.login.username === this.state.loginData).map((item) =>
                    (
                        <div className="uk-card uk-card-default cardUser" key={item.login.username}>
                            <div className="uk-card-header">
                                <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                                    <div className="overrideImgInfo">
                                        <img className="uk-preserve-width uk-border-circle" alt='img' src={item.picture.large}></img>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <div>{item.name.first}  {item.name.last}</div>
                                <div className="uk-text-truncate"> Phone: {item.phone} <br /> Email: {item.email}</div>
                                <div className="uk-text-truncate"> Login: {item.login.password} <br /> Username: {item.login.username}</div>
                                <div className="uk-text-truncate">
                                    <ul>
                                        <li>City: {item.location.city} </li>
                                        <li>State: {item.location.state} </li>
                                        <li>Street: {item.location.street} </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        )
    }

}

export default User