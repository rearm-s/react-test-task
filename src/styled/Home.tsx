import styled from 'styled-components';

export const StyledHome = styled.div`
  box-sizing: border-box;
  padding: 20px;
  @media ${props => props.theme.media.phone} {
    // do something
  }
  @media ${props => props.theme.media.tablet} {
    // do something
  }
  @media ${props => props.theme.media.screen} {
    // do something
  }
`;

