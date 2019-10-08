import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import 'styled-components/macro';

function ComponentButton({
  name, screenshot, onClick,
}) {
  return (
    <Button basic onClick={onClick}>
      <img
        src={screenshot}
        alt={`${name} Screenshot`}
        css={`
        margin-bottom: 10px;
      `}
      />
      {name}
    </Button>
  );
}

ComponentButton.propTypes = {
  name: PropTypes.string.isRequired,
  screenshot: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ComponentButton;
