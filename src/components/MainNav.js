import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import 'styled-components/macro';

import logo from '../img/pronto-logo.svg';

function MainNav() {
  return (
    <Menu
      fixed="top"
      css={`
      height: 60px;
      `}
    >
      <Container>
        <Menu.Item as="a" header>
          <Image
            src={logo}
            size="tiny"
            css={`
            margin-right: 1em;
          `}
          />
          <span>Component Generator</span>
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>
      </Container>
    </Menu>
  );
}

export default MainNav;
