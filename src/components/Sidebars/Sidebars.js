import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Sidebar, Menu, Icon, Image, Header, Form, Input, Divider,
} from 'semantic-ui-react';
import 'styled-components/macro';

import logo from '../../img/pronto-logo.svg';
import { GlobalContext } from '../../contexts/global/GlobalContext';
import SingleSidebar from './SingleSidebar';
import * as Component from '../Component';
import getGeneratedPageURL from '../../utils/generate-page-url';

function Sidebars({ children }) {
  const [sidebar, setSidebar] = useState({
    left: true,
    right: true,
  });
  function handleSidebar(side) {
    setSidebar({
      ...sidebar,
      [side]: !sidebar[side],
    });
  }

  const {
    components, parseShortcode, parsedHTML, currentShortcode, setting, setSetting, setCurrentJS, setCurrentCSS, currentCSS, currentJS
  } = useContext(GlobalContext);
  function handleTargetURL(e) {
    setSetting({
      ...setting,
      targetURL: e.target.value,
    });
  }

  const [newShortcode, setNewShortcode] = useState('');
  const [src, setSrc] = useState('');
  const [css, setCSS] = useState('');
  const [js, setJS] = useState('');

  const handleReload = (shortcode, css, js) => {
    parseShortcode(shortcode);
    setCurrentCSS(css);
    setCurrentJS(js);
  };

  useEffect(() => {
    setSrc(getGeneratedPageURL({
      html: parsedHTML,
      setting,
      css,
      js,
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parsedHTML, setting])

  useEffect(() => {
    setNewShortcode(currentShortcode);
    setCSS(currentCSS);
    setJS(currentJS);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCSS, currentJS, currentShortcode]);

  return (
    <Sidebar.Pushable>
      <SingleSidebar
        side="left"
        sidebar={sidebar}
      >
        <Menu.Item as="a">
          <Image
            src={logo}
            size="medium"
          />
        </Menu.Item>
        <Menu.Item as="a" onClick={() => handleSidebar('left')} className="btn-close">
          <Icon name="close" />
        </Menu.Item>
        <Menu.Item>
          <Form>
            <Form.Field id="target-site" label="Target Site" control={Input} placeholder="Target Site" value={setting.targetURL} onChange={handleTargetURL} />
          </Form>
        </Menu.Item>
        <Menu.Item css={`
          border-bottom: 1px solid rgba(34,36,38,.1);
          height: 80%;
          overflow: auto;
          &::before {
            content: none !important;
          }
        `}
        >
          <Divider horizontal fitted>
            <Header as="h4">Components</Header>
          </Divider>
          <Component.Wrapper>
            {
              components.map(({ name, screenshot, shortcode, css, js }) => <Component.Button key={name} name={name} screenshot={screenshot} onClick={() => handleReload(shortcode, css, js)} />)
            }
          </Component.Wrapper>
        </Menu.Item>
      </SingleSidebar>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          src,
          setSrc,
          setNewShortcode,
          newShortcode,
          css,
          setCSS,
          js,
          setJS,
          handleReload,
          currentShortcode,
          currentCSS,
          currentJS
        });
      })}
    </Sidebar.Pushable>
  );
}

Sidebars.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Sidebars;
