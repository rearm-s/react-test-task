import styled from 'styled-components';

import * as variables from './variables';

export const StyledEmployee = styled.div`
  padding: 20px;

  ul {
    padding: 0;
  }

  li {
    display: inline-block;
    color: ${variables.linkColor};
    cursor: pointer;
  }
`;
