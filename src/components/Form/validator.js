export const validator = (name, email, date, city, state, officer, story) => {
	return {
		name: name == '',
		date: date == '',
		city: city == '',
		state: state == '',
		officer: officer == '',
		story: story == '',
		email: email == ''
	}
}
