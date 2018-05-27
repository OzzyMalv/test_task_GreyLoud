import React, { Component } from "react";

import "./styleTabs.css";
class Tabs extends Component {
    render() {
        return (
            <div className="tabsView">
                <div uk-margin="true">
                    {/* <a class="uk-button uk-button-default" href="#">Link</a> */}
                    <button className="uk-button uk-button-default">Table</button>
                    <button className="uk-button uk-button-default">Cards</button>

                </div>




            </div>
        )
    }

}

export default Tabs