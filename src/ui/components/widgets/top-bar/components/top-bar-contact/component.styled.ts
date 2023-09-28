import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .TopBarContact__Instagram,
  .TopBarContact__Whatsapp {
    display: contents;
  }
  
  .TopBarContact__Instagram:hover,
  .TopBarContact__Whatsapp:hover {
    cursor: pointer;
  }

  /* Instagram has its own gradient defined in the svg */
  .TopBarContact__Instagram:hover path {
    fill: url("#instagramGradient");
  }

  .TopBarContact__Whatsapp:hover {
    color: ${({ theme }) => theme.color.whatsapp};
  }
`