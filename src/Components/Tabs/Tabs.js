import React from "react";
import styled from 'styled-components';

const TabsView = styled.div`
    display: flex;
    justify-content: center;
`;

class Tabs extends React.Component {

    render() {
        return (
            <TabsView>
                <div uk-margin='true'>
                    <div className="uk-button uk-button-default" onClick={() => { this.props.checkTabs('table') }}>Table</div>
                    <div className="uk-button uk-button-default" onClick={() => { this.props.checkTabs('cards') }}>Cards</div>
                </div>
            </TabsView>
        )
    }
}
export default Tabs;