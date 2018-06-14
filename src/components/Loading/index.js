import React from 'react'
import styled from 'styled-components'

const ShowBox = styled.div`
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 5%;
`

const Loader = styled.div`
	margin: 0 auto;
	width: 100px;
	&:before {
		content: '';
		display: block;
		padding-top: 100%;
	}
`

const Loading = () => (
	<ShowBox>
		<Loader>
			<svg className="circular" viewBox="25 25 50 50">
				<circle
					className="path"
					cx="50"
					cy="50"
					r="20"
					fill="none"
					strokeWidth="2"
					strokeMiterlimit="10"
				/>
			</svg>
		</Loader>
	</ShowBox>
)

export default Loading
