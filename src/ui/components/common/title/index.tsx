import StyledTitle from "./index.styled"

function ExtraLargeTitle(props: any){
    return (
        <StyledTitle.ExtraLarge>{props.children}</StyledTitle.ExtraLarge>
    )
}

function LargeTitle(props: any){
    return (
        <StyledTitle.Large>{props.children}</StyledTitle.Large>
    )
}

function MediumTitle(props: any){
    return (
        <StyledTitle.Medium>{props.children}</StyledTitle.Medium>
    )
}

function SmallTitle(props: any){
    return (
        <StyledTitle.Small>{props.children}</StyledTitle.Small>
    )
}

function ExtraSmallTitle(props: any){
    return (
        <StyledTitle.ExtraSmall>{props.children}</StyledTitle.ExtraSmall>
    )
}

const Title = () => <></>

Title.ExtraLarge = ExtraLargeTitle
Title.Large = LargeTitle
Title.Medium = MediumTitle
Title.Small = SmallTitle
Title.ExtraSmall = ExtraSmallTitle

export default Title