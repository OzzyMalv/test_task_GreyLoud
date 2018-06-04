import React from 'react';
import styled from 'styled-components';

const TabsView = styled.div`
  display: flex;
  justify-content: center;
`;

const Tabs = props => (
  <TabsView>
    <div uk-margin="true">
      <div
        className="uk-button uk-button-default"
        onClick={() => props.checkTabs('table')}
      >
        Table
      </div>
      <div
        className="uk-button uk-button-default"
        onClick={() => props.checkTabs('cards')}
      >
        Cards
      </div>
    </div>
  </TabsView>
);
export default Tabs;
