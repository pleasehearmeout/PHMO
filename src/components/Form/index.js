import React from 'react'
import styled from 'styled-components'
import { Field, TextArea, Control, Input, Button } from 'bloomer'
import TermsOfAgreement from './TermsOfAgreement'
import { STATES } from './states'
import Select from 'react-select'
//import Cleave from 'cleave.js/react'

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

const FieldGroupLocation = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin-bottom: 15px;
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

const StyledSelect = styled(Select)`
	width: 200px;
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
			selectedState: '',
			policeDistrict: '',
			agreed: false,
			isModalActive: false,
			officerName: ''
		}

		this.onNameChange = this.onNameChange.bind(this)
		this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this)
		this.onEmailChange = this.onEmailChange.bind(this)
		this.onDateChange = this.onDateChange.bind(this)
		this.onStoryChange = this.onStoryChange.bind(this)
		this.onAgreementChange = this.onAgreementChange.bind(this)
		this.onCityChange = this.onCityChange.bind(this)
		this.onSelectedStateChange = this.onSelectedStateChange.bind(this)
		this.onPoliceDistrictChange = this.onPoliceDistrictChange.bind(this)
		this.onTermsClick = this.onTermsClick.bind(this)
		this.onOfficerNameChange = this.onOfficerNameChange.bind(this)
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

	onSelectedStateChange(newState) {
		this.setState({ selectedState: newState })
		if (newState) {
			console.log(`Selected: ${newState}`)
		}
	}

	onPoliceDistrictChange(event) {
		this.setState({ policeDistrict: event.target.value })
	}

	onTermsClick() {
		this.setState({ isModalActive: false })
	}

	onOfficerNameChange(event) {
		this.setState({ officerName: event.target.value })
	}

	render() {
		const { selectedState } = this.state

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
									<Input
										type="text"
										name="full-name"
										placeholder="First Last"
										onChange={this.onNameChange}
									/>
								</Control>
							</Field>
							<Field>
								<label>Phone Number</label>
								<Control>
									<Input
										type="text"
										name="phone-number"
										placeholder="XXX XXX XXX"
										onChange={this.onPhoneNumberChange}
									/>
								</Control>
							</Field>
							<Field>
								<label>Email</label>
								<Control>
									<Input
										type="text"
										name="email"
										placeholder="youremail@gmail.com"
										onChange={this.onEmailChange}
									/>
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
									<Input
										type="text"
										name="incident-date"
										placeholder="YYYY/MM/DD"
										onChange={this.onDateChange}
									/>
								</Control>
							</Field>
							<FieldGroupLocation>
								<div>
									<label>City</label>
									<Field>
										<Control>
											<Input
												type="text"
												name="city"
												onChange={this.onCityChange}
											/>
										</Control>
									</Field>
								</div>
								<FieldGroup>
									<label>State</label>
									<Field>
										<Control>
											<StyledSelect
												id="state-select"
												name="state"
												value={selectedState}
												onChange={this.onSelectedStateChange}
												options={STATES}
												autoFocus
												simpleValue
												clearable={true}
												searchable={true}
											/>
										</Control>
									</Field>
								</FieldGroup>
							</FieldGroupLocation>
							<label>Officer Name</label>
							<Field>
								<Control>
									<Input
										type="text"
										name="officer-name"
										onChange={this.onOfficerNameChange}
									/>
								</Control>
							</Field>
							<label>Police District</label>
							<Field>
								<Control>
									<Input
										type="text"
										name="police-district"
										placeholder="ex. 2nd, 6th etc."
										onChange={this.onPoliceDistrictChange}
									/>
								</Control>
							</Field>
							<Field>
								<label>The Story</label>
								<Control>
									<TextArea
										name="story"
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
