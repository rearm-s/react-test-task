import styled from 'styled-components';

import * as variables from './variables'

export const StyledWrapper = styled.div`
  width: ${variables.width};
  max-width: ${variables.maxWidth};
  margin: ${variables.margin};
  border: ${variables.border};
  height: ${variables.height};
`

export const StyledContainer = styled.div`
  padding-left: ${variables.paddingLeft};
  padding-right: ${variables.paddingRight};
`;

export const theme = {
    colors: {
        primary: `${variables.primary}`,
        secondary: `${variables.secondary}`,
    },
    media: {
        phone: `${variables.phone}`,
        tablet: `${variables.tablet}`,
        screen: `${variables.screen}`
    }
};
