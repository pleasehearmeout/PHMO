import React from 'react'
import Link from 'gatsby-link'
import { Container, Title, Subtitle } from 'bloomer'
import styled from 'styled-components'

const StyledTitleWrapper = styled.div`
	font-family: vollkorn;
	padding-bottom: 45px;
`

const StyledQuoteWrapper = styled.div`
	padding: 1.5em 1.5em 3em 1.5em;
	font-family: vollkorn;
	display: flex;
	flex-direction: column;
`

const StyledStatementWrapper = styled.div`
	font-family: 'open sans';
	padding: 0 1.5em 1.5em 1.5em;
`

const MissionTitle = styled.div`
	font-family: vollkorn;
	font-size: 35px;
	font-style: normal;
`

const MissionStatementWrapper = styled.div`
	display: flex;
	font-style: italic;
	flex-direction: column;
	align-items: left;
	font-size: 1.5em;
`

const Emphasis = styled.div`
	font-family: 'open sans';
	font-weight: bold;
	margin-top: 10px;
`

const AboutPage = () => (
	<Container isFluid style={{ marginTop: 10 }} hasTextAlign="centered">
		<StyledTitleWrapper>
			<Title isSize="1">Who We Are</Title>
		</StyledTitleWrapper>

		<Container isFluid style={{ marginTop: 10 }} hasTextAlign="left">
			<StyledQuoteWrapper>
				<MissionTitle>Our Mission</MissionTitle>
				<MissionStatementWrapper>
					<div>To create a safer environment</div>
					<div>by rebuilding the broken trust between two communities:</div>
					<div>civilians & law enforcement officers.</div>
				</MissionStatementWrapper>
			</StyledQuoteWrapper>
			<StyledStatementWrapper>
				Please Hear Me Out is a community policing ecosystem. We receive reports
				from individuals who believe they have been victims of police
				misconduct. Once the submitted report matches the guidelines provided by
				the Department of Justice (DOJ), we send it to civil liberty
				organizations, law firms, government offices, and the appropriate police
				departments for you. We want to make sure your rights are protected and
				help your case get the proper attention it deserves. If you are a victim
				of police misconduct...
				<Emphasis>Help us help you get justice.</Emphasis>
			</StyledStatementWrapper>
		</Container>
	</Container>
)

export default AboutPage
