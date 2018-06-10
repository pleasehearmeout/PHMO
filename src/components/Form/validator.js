export const validator = (name, email, city, state, officer, story) => {
	return {
		name: name == '',
		city: city == '',
		state: state == '',
		officer: officer == '',
		story: story == '',
		email: email == ''
	}
}
