import React from "react";
import "./styleTabs.css";

class Tabs extends React.Component {

    render() {
        return (
            <div className="tabsView">
                <div uk-margin='true'>
                    <div className="uk-button uk-button-default" onClick={() => { this.props.checkTabs('table') }}>Table</div>
                    <div className="uk-button uk-button-default" onClick={() => { this.props.checkTabs('cards') }}>Cards</div>
                </div>
            </div>
        )
    }
}
export default Tabs;