import styled from "styled-components"
import { Text } from "@components/common"
import { getColorStyles } from "@theme/selectors"

export default styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-bottom: 1rem;
  color: ${props => getColorStyles(props).white};

  .Footer__SocialMedias {
    display: flex;
    gap: 1.25rem;
  }
  
  .SocialMedia__Facebook,
  .SocialMedia__Instagram,
  .SocialMedia__Whatsapp {
    display: contents;
    cursor: pointer;
  }
  
  .SocialMedia__Instagram:hover path {
    fill: url("#instagramGradient");
  }

  .SocialMedia__Whatsapp:hover {
    color: ${ ({ theme }) => theme.color.whatsapp };
  }
  
  .SocialMedia__Facebook:hover {
    color: ${ ({ theme }) => theme.color.facebook };
  }

  ${Text.Styled.Caption} {
    cursor: pointer;
  }
`