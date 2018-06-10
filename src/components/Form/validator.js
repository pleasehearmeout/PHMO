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
