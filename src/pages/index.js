import React from 'react'
import Link from 'gatsby-link'
import { Container, Title } from 'bloomer'
import styled from 'styled-components'
import Form from '../components/Form'

const StyledTitleWrapper = styled.div`
	font-family: 'vollkorn';
	margin: 15px;
`

const StyledStatementWrapper = styled.div`
	font-family: 'open sans';
`

const IndexPage = () => (
	<Container hasTextAlign="centered">
		<Form />
	</Container>
)

export default IndexPage
