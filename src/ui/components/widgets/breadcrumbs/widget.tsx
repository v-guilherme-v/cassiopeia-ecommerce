/* eslint-disable multiline-ternary */
/* eslint-disable indent */

import styled, { css } from "styled-components"
import { Block, Text, Title } from "@components/common"
import { getViewPortsStyles } from "@theme/selectors"

export interface IBreadcrumbProps {
  name: string
  route?: string
}

export interface IBreadcrumbsProps {
  displayMode?: "title"
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

export default function Breadcrumbs (props: IBreadcrumbsProps): JSX.Element {
  const { breadcrumbs, displayMode } = props
  return (
    <StyledBreadcrumbs {...props } >
      <Block data-name="Breadcrumbs">
        {displayMode === "title" ? (
          <Block data-name="Breadcrumbs__TitleDisplay">
            <Block data-name="Breadcrumbs__TitleDisplay__Crumbs">
              { breadcrumbs.slice(0, breadcrumbs.length - 1).map((breadcrumb, index) => <Breadcrumb key={index} name={breadcrumb.name} />) }
            </Block>
            <Title.ExtraLarge data-name="Breadcrumbs__TitleDisplay__Title">
              {breadcrumbs[breadcrumbs.length - 1].name}
            </Title.ExtraLarge>
          </Block>
        ) : (
          breadcrumbs.map((breadcrumb, index) => <Breadcrumb key={index} name={breadcrumb.name} />)
        )}
      </Block>
    </StyledBreadcrumbs>
  )
}

const StyledBreadcrumbs = styled.div<IBreadcrumbsProps>`
  ${Block.Styled}[data-name="Breadcrumbs"],
  ${Block.Styled}[data-name="Breadcrumbs__TitleDisplay__Crumbs"] {
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

    ${props => {
      return props.displayMode !== "title" && css`
        & [data-name="Breadcrumb"]:last-child ${Text.Styled.Caption} {
          font-weight: ${({ theme }) => theme.font.weight.semibold};
        }
      `
    }}

    & [data-name="Breadcrumb"]:last-child::after {
      display: none;
    }
  }

  ${Title.Styled.ExtraLarge}[data-name="Breadcrumbs__TitleDisplay__Title"] {
    margin-top: 20px;
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