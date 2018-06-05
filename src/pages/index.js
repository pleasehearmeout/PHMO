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
    <StyledTitleWrapper>
      <Title isSize={1}>Help us help you get justice.</Title>
    </StyledTitleWrapper>
    <StyledStatementWrapper>
      <Title isSize="6">Report police misconduct to us.</Title>
    </StyledStatementWrapper>
    <div>
      <Form />
    </div>
  </Container>
)

export default IndexPage
