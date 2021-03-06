import React from 'react'
import styled from 'styled-components'
import { Field, TextArea, Control, Input, Button, Title } from 'bloomer'
import TermsOfAgreement from './TermsOfAgreement'
import { STATES, NUMBER, DATE } from './constants'
import MaskedInput from 'react-text-mask'
import Autosuggest from 'react-autosuggest'
import {
	getSuggestionValue,
	getSuggestions,
	validator,
	validate
} from './utils'
import theme from './inputTheme.css'
import Loading from '../Loading'

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
	width: 85%;
`

const StyledTitleWrapper = styled.div`
	font-family: 'vollkorn';
	margin: 15px;
`

const StyledStatementWrapper = styled.div`
	font-family: 'open sans';
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
	width: 90%;
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

const ValidationMessage = styled.div`
	font-size: 10px;
	margin-top: 5px;
	color: red;
`

const renderSuggestion = suggestion => {
	return <span>{suggestion.label}</span>
}

class Form extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			number: '',
			email: '',
			date: '',
			story: '',
			city: '',
			selectedState: '',
			policeDistrict: '',
			agreed: false,
			isModalActive: false,
			officer: '',
			suggestions: [],
			isLoading: true,
			touched: {
				name: false,
				date: false,
				number: false,
				email: false,
				story: false,
				city: false,
				selectedState: false,
				officer: false,
				agreed: false
			}
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
		this.handleBlur = this.handleBlur.bind(this)
		this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
			this
		)
		this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
			this
		)
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoading: false })
		}, 300)
	}

	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value, STATES)
		})
	}

	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		})
	}

	onNameChange(event) {
		this.setState({ name: event.target.value })
	}

	onPhoneNumberChange(event) {
		this.setState({ number: event.target.value })
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

	onSelectedStateChange(event, { newValue, method }) {
		this.setState({ selectedState: newValue })
	}

	onPoliceDistrictChange(event) {
		this.setState({ policeDistrict: event.target.value })
	}

	onTermsClick() {
		this.setState({ isModalActive: false })
	}

	onOfficerNameChange(event) {
		this.setState({ officer: event.target.value })
	}

	handleBlur = field => event => {
		this.setState({
			touched: { ...this.state.touched, [field]: true }
		})
	}

	render() {
		const {
			name,
			date,
			email,
			city,
			selectedState,
			officer,
			story,
			agreed,
			number,
			suggestions
		} = this.state

		const errors = validator(
			name,
			email,
			date,
			city,
			selectedState,
			officer,
			story,
			number
		)

		const isDisabled = () => {
			return Object.keys(errors).some(x => errors[x]) || !agreed
		}

		const shouldMarkError = field => {
			const hasError = errors[field]

			const shouldShow = this.state.touched[field]

			return hasError ? shouldShow : false
		}

		const inputProps = {
			placeholder: '',
			value: selectedState,
			onChange: this.onSelectedStateChange,
			name: 'state',
			className: shouldMarkError('selectedState') ? 'error' : 'input',
			onBlur: this.handleBlur('selectedState')
		}

		return this.state.isLoading ? (
			<Loading />
		) : (
			<div>
				<StyledTitleWrapper>
					<Title isSize="1">Help us help you get justice.</Title>
				</StyledTitleWrapper>
				<StyledStatementWrapper>
					<Title isSize="6">Report police misconduct to us.</Title>
				</StyledStatementWrapper>
				<StyledFormWrapper>
					<StyledBox>
						<TermsOfAgreement
							onTermsClick={this.onTermsClick}
							isModalActive={this.state.isModalActive}
						/>
						<form
							name="report"
							method="POST"
							data-netlify="true"
							data-netlify-honeypot="bot-field"
						>
							<input type="hidden" name="form-name" value="report" />
							<FieldGroupTitle>Contact Info</FieldGroupTitle>
							<FieldGroupLine />
							<FieldGroup>
								<Field>
									<label>Full Name</label>
									<Control>
										<Input
											type="text"
											name="full-name"
											className={shouldMarkError('name') ? 'error' : ''}
											onBlur={this.handleBlur('name')}
											placeholder="First Last"
											onChange={this.onNameChange}
										/>
									</Control>
									{shouldMarkError('name') ? (
										<ValidationMessage>
											Please provide your full name
										</ValidationMessage>
									) : (
										''
									)}
								</Field>
								<Field>
									<label>Phone Number</label>
									<Control>
										<MaskedInput
											mask={NUMBER}
											className={shouldMarkError('number') ? 'error' : 'input'}
											onBlur={this.handleBlur('number')}
											name="phone-number"
											onChange={this.onPhoneNumberChange}
										/>
									</Control>
									{shouldMarkError('number') ? (
										<ValidationMessage>
											Please provide your phone number
										</ValidationMessage>
									) : (
										''
									)}
								</Field>
								<Field>
									<label>Email</label>
									<Control>
										<Input
											type="text"
											name="email"
											placeholder="youremail@gmail.com"
											onChange={this.onEmailChange}
											className={shouldMarkError('email') ? 'error' : ''}
											onBlur={this.handleBlur('email')}
										/>
									</Control>
									{shouldMarkError('email') ? (
										<ValidationMessage>
											Please provide your email
										</ValidationMessage>
									) : (
										''
									)}
								</Field>
							</FieldGroup>
							<br />
							<FieldGroupTitle>Report</FieldGroupTitle>
							<FieldGroupLine />
							<FieldGroup>
								<Field>
									<label>Incident Date</label>
									<Control>
										<MaskedInput
											mask={DATE}
											className={shouldMarkError('date') ? 'error' : 'input'}
											onBlur={this.handleBlur('date')}
											name="incident-date"
											placeholder="MM/DD/YYYY"
											onChange={this.onDateChange}
										/>
									</Control>
									{shouldMarkError('date') ? (
										<ValidationMessage>
											Please provide the incident date
										</ValidationMessage>
									) : (
										''
									)}
								</Field>
								<Field>
									<label>City</label>
									<Control>
										<Input
											type="text"
											name="city"
											onChange={this.onCityChange}
											className={shouldMarkError('city') ? 'error' : ''}
											onBlur={this.handleBlur('city')}
										/>
									</Control>
									{shouldMarkError('city') ? (
										<ValidationMessage>
											Please provide the incident city
										</ValidationMessage>
									) : (
										''
									)}
								</Field>
								<Field>
									<label>State</label>
									<Control>
										<Autosuggest
											suggestions={suggestions}
											onSuggestionsFetchRequested={
												this.onSuggestionsFetchRequested
											}
											onSuggestionsClearRequested={
												this.onSuggestionsClearRequested
											}
											getSuggestionValue={getSuggestionValue}
											renderSuggestion={renderSuggestion}
											inputProps={inputProps}
										/>
									</Control>
									{shouldMarkError('selectedState') ? (
										<ValidationMessage>
											Please provide the incident state
										</ValidationMessage>
									) : (
										''
									)}
								</Field>
								<Field>
									<label>Officer Name</label>
									<Control>
										<Input
											type="text"
											name="officer-name"
											onChange={this.onOfficerNameChange}
											className={shouldMarkError('officer') ? 'error' : ''}
											onBlur={this.handleBlur('officer')}
										/>
									</Control>
									{shouldMarkError('officer') ? (
										<ValidationMessage>
											Please provide the officer name
										</ValidationMessage>
									) : (
										''
									)}
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
											className={shouldMarkError('story') ? 'error' : ''}
											onBlur={this.handleBlur('story')}
										/>
									</Control>
									{shouldMarkError('story') ? (
										<ValidationMessage>
											Please provide your story
										</ValidationMessage>
									) : (
										''
									)}
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
												onBlur={this.handleBlur('agreed')}
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
									<Button
										type="submit"
										isColor="primary"
										disabled={isDisabled()}
									>
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
			</div>
		)
	}
}

export default Form
