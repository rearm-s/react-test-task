import styled, {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid #333;
  height: 100vh;
`

