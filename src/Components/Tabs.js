import React from "react";
import { withState } from "recompose";
import "./styleTabs.css";

// const status = 'table'

function checkTabs(status) {
    // status === 'cards' ? this.setState({ typeView: 'cards' }) : this.setState({ typeView: 'table' });
    console.log(status);

}





const Tabs = ({ tabs, setTabs }) => {
    return (
        <div className="tabsView">
            <div uk-margin='true'>
                <div className="uk-button uk-button-default" onClick={checkTabs('table')}>Table</div>
                <div className="uk-button uk-button-default" onClick={checkTabs('cards')}>Cards</div>

            </div>
        </div>
    )
}




export default withState('tabs', 'setTabs', true)(Tabs);