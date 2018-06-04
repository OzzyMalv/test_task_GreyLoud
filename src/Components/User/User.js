import React, { Component } from "react";
import styled from 'styled-components';


const CardInfo = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`;

const CardUser = styled.div`
    margin: 20px;
    width: 100%;
    max-width: 400px;
`;

const ImgInfo = styled.div`
     margin: 0 auto;
`;



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
            <CardInfo>
                {this.state.data.filter(item => item.login.username === this.state.loginData).map((item) =>
                    (
                        <CardUser className="uk-card uk-card-default" key={item.login.username}>
                            <div className="uk-card-header">
                                <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                                    <ImgInfo>
                                        <img className="uk-preserve-width uk-border-circle" alt='img' src={item.picture.large}></img>
                                    </ImgInfo>
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
                        </CardUser>
                    )
                )}
            </CardInfo>
        )
    }

}

export default User