import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  margin-right: -5px;

  > .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 100%;
  }
`;

function ComponentWrapper(props) {
  const { children } = props;
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  );
}

ComponentWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ComponentWrapper;
