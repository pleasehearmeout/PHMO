import React from 'react'
import { Box } from 'bloomer'
import styled from 'styled-components'
import {
  Field,
  FieldBody,
  Label,
  TextArea,
  Control,
  Input,
  Button,
} from 'bloomer'
import Cleave from 'cleave.js/react'

const StyledFormWrapper = styled.div`
  margin: 40px;
  text-align: left;
`

const StyledSubmitButton = styled(Input)`
  background-color: '#00d1b2';
`

const Form = () => (
  <StyledFormWrapper>
    <Box>
      <form
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="#"
      >
        <Field>
          <Label>First Name</Label>
          <Control>
            <Input type="text" />
          </Control>
          <Label>Last Name</Label>
          <Control>
            <Input type="text" />
          </Control>
        </Field>

        <Field>
          <Label>Phone Number</Label>
          <Control>
            <Input type="text" />
          </Control>
        </Field>
        <Field>
          <Label>Email</Label>
          <Control>
            <Input type="text" />
          </Control>
        </Field>
        <Field>
          <Label>Incident Date</Label>
          <Control>
            <Input type="text" />
          </Control>
        </Field>
        <Field>
          <Label>Incident Location</Label>
          <Control>
            <Input type="text" />
          </Control>
        </Field>
        <Field>
          <Label>Your Story</Label>
          <Control>
            <TextArea placeholder={'Your message...'} />
          </Control>
        </Field>
        <Field isGrouped>
          <Control>
            <Button type="submit" isColor="primary">
              Submit
            </Button>
          </Control>
          <Control>
            <Button type="reset" isLink>
              Cancel
            </Button>
          </Control>
        </Field>
      </form>
    </Box>
  </StyledFormWrapper>
)

export default Form
