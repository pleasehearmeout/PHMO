export const validator = (
	name,
	email,
	date,
	city,
	state,
	officer,
	story,
	number
) => {
	return {
		name: name == '',
		city: city == '',
		date: date == '',
		state: state == '',
		officer: officer == '',
		story: story == '',
		email: email == '',
		number: number == ''
	}
}

const escapeRegexCharacters = str => {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export const getSuggestions = (value, usStates) => {
	const escapedValue = escapeRegexCharacters(value.trim())

	if (escapedValue === '') {
		return []
	}

	const regex = new RegExp('^' + escapedValue, 'i')

	return usStates.filter(state => regex.test(state.label))
}

export const getSuggestionValue = suggestion => {
	return suggestion.label
}
