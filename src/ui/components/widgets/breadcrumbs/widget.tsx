import styled from "styled-components"
import { Block, Text } from "@components/common"
import { getViewPortsStyles } from "@theme/selectors"

export interface IBreadcrumbProps {
  name: string
  route?: string
}

export interface IBreadcrumbsProps {
  breadcrumbs: IBreadcrumbProps[]
}

function Breadcrumb (props: IBreadcrumbProps): JSX.Element {
  return (
    <Block data-name="Breadcrumb">
      <Text.Caption>
        { props.name }
      </Text.Caption>
    </Block>
  )
}

export default function Breadcrumbs ({ breadcrumbs }: IBreadcrumbsProps): JSX.Element {
  return (
    <StyledBreadcrumbs>
      <Block data-name="Breadcrumbs">
        { breadcrumbs.map((breadcrumb, index) => <Breadcrumb key={index} name={breadcrumb.name} />) }
      </Block>
    </StyledBreadcrumbs>
  )
}

const StyledBreadcrumbs = styled.div`
  & [data-name="Breadcrumbs"] {
    display: flex;
    padding: 18px 0;

    & [data-name="Breadcrumb"] ${Text.Styled.Caption} {
      user-select: none;
    }

    & [data-name="Breadcrumb"]::after {
      content: "/";
      padding: 0 12px;
      font-size: ${({ theme }) => theme.text.caption.fontSize};
      line-height: ${({ theme }) => theme.text.caption.lineHeight};
    }

    & [data-name="Breadcrumb"]:last-child ${Text.Styled.Caption} {
      font-weight: ${({ theme }) => theme.font.weight.semibold};
    }

    & [data-name="Breadcrumb"]:last-child::after {
      display: none;
    }
  }

  @media (min-width: ${(props) => getViewPortsStyles(props).medium}) {
    & [data-name="Breadcrumbs"] [data-name="Breadcrumb"] {
      cursor: pointer;
    }

    & [data-name="Breadcrumbs"] [data-name="Breadcrumb"]:last-child {
      cursor: default;
    }
  }
`