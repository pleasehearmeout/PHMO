import React from 'react';
import Link from 'gatsby-link';
import { Container, Title, Subtitle } from 'bloomer';
import styled from 'styled-components';

const StyledTitleWrapper = styled.div`
	font-family: 'vollkorn';
	margin: 15px;
`;

const StyledQuoteWrapper = styled.div`
	align-items: center;
	padding: 2em;
	font-size: 1.5em;
	font-family: 'vollkorn';
	font-style: italic;
	overflow-wrap: break-word;
`;

const StyledStatementWrapper = styled.div`
	font-family: 'vollkorn';
	column-count: 2;
	column-gap: 50px;
`;

const AboutPage = () => (
	<Container isFluid style={{ marginTop: 10 }} hasTextAlign="centered">
		<StyledTitleWrapper>
			<Title isSize="2">Who We Are</Title>
		</StyledTitleWrapper>
		<StyledQuoteWrapper>
			Our mission is to make a safer environment for everyone by rebuilding<br />
			the broken trust between the two communities:<br />civilians and law
			enforcement officers.
		</StyledQuoteWrapper>

		<Container isFluid style={{ marginTop: 10 }} hasTextAlign="left">
			<StyledStatementWrapper>
				<b>P</b>lease Hear Me Out is a community policing ecosystem. We receive
				reports from individuals who believe they have been victims of police
				misconduct. Once the submitted report matches the guideline provided by
				the Department of Justice (DOJ) that address police misconduct, we send
				the reports to the appropriate institutions for you. We make sure that
				the report gets sent out to civil liberty organizations, law firms,
				government offices, and the appropriate police departments. We want to
				make sure that all your rights are protected and help your case get the
				proper attention that it deserves. In order to stay transparent with the
				community, we compile a comprehensive report from all the data and
				release it for the public to see. If you are a victim of police
				misconduct... <br /> <br />
				<b>Help us help you get justice.</b>
			</StyledStatementWrapper>
		</Container>
	</Container>
);

export default AboutPage;
