import React from 'react';
import { Sidebar, Menu } from 'semantic-ui-react';
import 'styled-components/macro';

function SingleSidebar(props) {
  const { children, side, sidebar } = props;
  return (
    <Sidebar
      as={Menu}
      animation="push"
      direction={side}
      vertical
      visible={sidebar[side]}
      className="setting-sidebar"
    >
      {children}
    </Sidebar>
  );
}

export default SingleSidebar;
