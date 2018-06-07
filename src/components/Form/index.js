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
	Button
} from 'bloomer'
import Cleave from 'cleave.js/react'
import TermsOfAgreement from './TermsOfAgreement'

const StyledFormWrapper = styled.div`
	margin: 40px;
	text-align: left;
`

const StyledTermsOfServiceWrapper = styled.div`
	margin: 20px 0 30px 0;
`

const StyledTextWrapper = styled.div`
	display: inline;
	padding: 5px 0 5px 5px;
`

const StyledLinkWrapper = styled.div`
	text-decoration: underline;
	display: inline;
	padding: 5px;
	border-radius: 6px;
	&:hover {
		background-color: #f5f5f5;
	}
`

class Form extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			firstName: '',
			lastName: '',
			phoneNumber: '',
			email: '',
			date: '',
			story: '',
			location: '',
			agreed: false,
			isModalActive: false
		}

		this.onFirstNameChange = this.onFirstNameChange.bind(this)
		this.onLastNameChange = this.onLastNameChange.bind(this)
		this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this)
		this.onEmailChange = this.onEmailChange.bind(this)
		this.onDateChange = this.onDateChange.bind(this)
		this.onStoryChange = this.onStoryChange.bind(this)
		this.onAgreementChange = this.onAgreementChange.bind(this)
		this.onLocationChange = this.onLocationChange.bind(this)
		this.onTermsClick = this.onTermsClick.bind(this)
	}

	onFirstNameChange(event) {
		this.setState({ firstName: event.target.value })
	}

	onLastNameChange(event) {
		this.setState({ lastName: event.target.value })
	}

	onPhoneNumberChange(event) {
		this.setState({ phoneNumber: event.target.rawValue })
	}

	onEmailChange(event) {
		this.setState({ email: event.target.value })
	}

	onDateChange(event) {
		this.setState({ date: event.target.value })
	}

	onStoryChange(event) {
		this.setState({ story: event.target.value })
	}

	onAgreementChange(event) {
		this.setState({ agreed: event.target.checked })
	}

	onLocationChange(event) {
		this.setState({ location: event.target.value })
	}

	onTermsClick() {
		this.setState({ isModalActive: false })
	}

	render() {
		return (
			<StyledFormWrapper>
				<Box>
					<TermsOfAgreement
						onTermsClick={this.onTermsClick}
						isModalActive={this.state.isModalActive}
					/>
					<form
						method="post"
						data-netlify="true"
						data-netlify-honeypot="bot-field"
						action="#"
					>
						<Field>
							<Label>First Name</Label>
							<Control>
								<Input type="text" onChange={this.onFirstNameChange} />
							</Control>
						</Field>
						<Field>
							<Label>Last Name</Label>
							<Control>
								<Input type="text" onChange={this.onLastNameChange} />
							</Control>
						</Field>
						<Field>
							<Label>Phone Number</Label>
							<Control>
								<Cleave
									className="input"
									options={{
										blocks: [3, 3, 4],
										delimeter: ' ',
										numericOnly: true
									}}
									onChange={this.onPhoneNumberChange}
								/>
							</Control>
						</Field>
						<Field>
							<Label>Email</Label>
							<Control>
								<Input type="text" onChange={this.onEmailChange} />
							</Control>
						</Field>
						<Field>
							<Label>Incident Date</Label>
							<Control>
								<Cleave
									className="input"
									placeholder="YYYY/MM/DD"
									options={{ date: true, datePattern: ['Y', 'm', 'd'] }}
									onChange={this.onDateChange}
								/>
							</Control>
						</Field>
						<Field>
							<Label>Incident Location</Label>
							<Control>
								<Input type="text" onChange={this.onLocationChange} />
							</Control>
						</Field>
						<Field>
							<Label>Your Story</Label>
							<Control>
								<TextArea
									placeholder={'Tell us more about what happened...'}
									onChange={this.onStoryChange}
								/>
							</Control>
						</Field>
						<Field>
							<Control>
								<StyledTermsOfServiceWrapper>
									<StyledTextWrapper>
										<input
											type="checkbox"
											checked={this.state.agreed}
											onChange={this.onAgreementChange}
										/>
									</StyledTextWrapper>
									{'   '}
									<StyledTextWrapper>I agree to the </StyledTextWrapper>
									<StyledLinkWrapper
										onClick={() => this.setState({ isModalActive: true })}
									>
										<a>terms of service</a>
									</StyledLinkWrapper>
								</StyledTermsOfServiceWrapper>
							</Control>
						</Field>
						<Field isGrouped>
							<Control>
								<Button type="submit" isColor="primary">
									Submit
								</Button>
							</Control>
							<Control>
								<Button type="reset" isOutlined>
									Cancel
								</Button>
							</Control>
						</Field>
					</form>
				</Box>
			</StyledFormWrapper>
		)
	}
}

export default Form
