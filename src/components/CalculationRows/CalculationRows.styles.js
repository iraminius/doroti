import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media print {
    align-items: flex-start;
    break-inside: avoid;

    [data-row-result="0"] {
      display: none;
    }
  }
`;
