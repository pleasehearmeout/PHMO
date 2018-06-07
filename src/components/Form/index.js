import React from 'react'
import styled from 'styled-components'
import { Field, TextArea, Control, Input, Button, Label } from 'bloomer'
import Cleave from 'cleave.js/react'
import TermsOfAgreement from './TermsOfAgreement'

const StyledFormWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 50px;
`

const StyledBox = styled.div`
	text-align: left;
	background-color: #fafafa;
	border-radius: 5px;
	box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
	color: #4a4a4a;
	display: block;
	padding: 1.25rem;
	width: 65%;
`

const TermsOfServiceWrapper = styled.div`
	margin: 20px 0 30px 0;
`

const TextWrapper = styled.div`
	display: inline;
	padding: 5px 0 5px 5px;
`

const LinkWrapper = styled.div`
	text-decoration: underline;
	display: inline;
	padding: 5px;
	border-radius: 6px;
	&:hover {
		background-color: #efefef;
	}
`

const FieldGroup = styled.div`
	padding: 0 15px 0 15px;
`

const FieldGroupTitle = styled.div`
	font-size: 25px;
	margin: 0 0 5px 0;
`

const FieldGroupLine = styled.div`
	content: ' ';
	display: block;
	border-bottom: 1px solid #efefef;
	margin-bottom: 8px;
`

class Form extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			phoneNumber: '',
			email: '',
			date: '',
			story: '',
			city: '',
			state: '',
			agreed: false,
			isModalActive: false,
			officerName: '',
			victimName: ''
		}

		this.onNameChange = this.onNameChange.bind(this)
		this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this)
		this.onEmailChange = this.onEmailChange.bind(this)
		this.onDateChange = this.onDateChange.bind(this)
		this.onStoryChange = this.onStoryChange.bind(this)
		this.onAgreementChange = this.onAgreementChange.bind(this)
		this.onCityChange = this.onCityChange.bind(this)
		this.onStateChange = this.onStateChange.bind(this)
		this.onTermsClick = this.onTermsClick.bind(this)
		this.onOfficerNameChange = this.onOfficerNameChange.bind(this)
		this.onVictimNameChange = this.onVictimNameChange.bind(this)
	}

	onNameChange(event) {
		this.setState({ name: event.target.value })
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

	onCityChange(event) {
		this.setState({ city: event.target.value })
	}

	onStateChange(event) {
		this.setState({ state: event.target.value })
	}

	onTermsClick() {
		this.setState({ isModalActive: false })
	}

	onOfficerNameChange(event) {
		this.setState({ officerName: event.target.value })
	}

	onVictimNameChange(event) {
		this.setState({ victimName: event.target.value })
	}

	render() {
		return (
			<StyledFormWrapper>
				<StyledBox>
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
						<FieldGroupTitle>Contact Info</FieldGroupTitle>
						<FieldGroupLine />
						<FieldGroup>
							<Field>
								<label>Full Name</label>
								<Control>
									<Input type="text" onChange={this.onNameChange} />
								</Control>
							</Field>
							<Field>
								<label>Phone Number</label>
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
								<label>Email</label>
								<Control>
									<Input type="text" onChange={this.onEmailChange} />
								</Control>
							</Field>
						</FieldGroup>
						<br />
						<FieldGroupTitle>Report</FieldGroupTitle>
						<FieldGroupLine />
						<FieldGroup>
							<Field>
								<label>Incident Date</label>
								<Control>
									<Cleave
										className="input"
										placeholder="YYYY/MM/DD"
										options={{ date: true, datePattern: ['Y', 'm', 'd'] }}
										onChange={this.onDateChange}
									/>
								</Control>
							</Field>
							<label>State</label>
							<Field>
								<Control>
									<Input type="text" onChange={this.onStateChange} />
								</Control>
							</Field>
							<label>City</label>
							<Field>
								<Control>
									<Input type="text" onChange={this.onCityChange} />
								</Control>
							</Field>
							<label>Officer Name - optional</label>
							<Field>
								<Control>
									<Input type="text" onChange={this.onOfficerNameChange} />
								</Control>
							</Field>
							<label>Victim Name - optional</label>
							<Field>
								<Control>
									<Input type="text" onChange={this.onVictimNameChange} />
								</Control>
							</Field>
							<Field>
								<label>The Story</label>
								<Control>
									<TextArea
										placeholder={'Tell us more about what happened...'}
										onChange={this.onStoryChange}
									/>
								</Control>
							</Field>
						</FieldGroup>
						<Field>
							<Control>
								<TermsOfServiceWrapper>
									<TextWrapper>
										<input
											type="checkbox"
											checked={this.state.agreed}
											onChange={this.onAgreementChange}
										/>
									</TextWrapper>
									{'   '}
									<TextWrapper>I agree to the </TextWrapper>
									<LinkWrapper
										onClick={() => this.setState({ isModalActive: true })}
									>
										<a>terms of service</a>
									</LinkWrapper>
								</TermsOfServiceWrapper>
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
				</StyledBox>
			</StyledFormWrapper>
		)
	}
}

export default Form
