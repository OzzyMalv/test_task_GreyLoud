import React from "react";
import "./styleCards.css";

const cards = (props) => {
    return (
        <div className='mainCards'>
            {props.data.map((item) =>
                (
                    <div className="uk-card uk-card-default overrideCard" key={item.login.username}>
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                                <div className="overrideImg">
                                    <img className="uk-preserve-width uk-border-circle" alt='img' src={item.picture.medium}></img>
                                </div>

                            </div>
                        </div>
                        <div className="uk-card-body">
                            <div>{item.name.first}  {item.name.last}</div>
                            <div className="uk-text-truncate"> Phone: {item.phone} <br /> Email: {item.email}</div>
                        </div>
                        <div className="uk-card-footer">
                            <a href={'/user/' + item.login.username} className="uk-button uk-button-text">Read more</a>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default cards