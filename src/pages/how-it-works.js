import React from 'react'
import Link from 'gatsby-link'
import { Container, Title, Image } from 'bloomer'
import styled from 'styled-components'

const StyledTitleWrapper = styled.div`
	font-family: vollkorn;
	padding-bottom: 130px;
`

const SecondPage = () => (
	<Container isFluid style={{ marginTop: 10 }} hasTextAlign="centered">
		<StyledTitleWrapper>
			<Title isSize="1">How it Works</Title>
		</StyledTitleWrapper>
		<Image isRatio="square" src="/how-it-works/mission3.svg" />
	</Container>
)

export default SecondPage
