import React from 'react'
import Link from 'gatsby-link'
import { Container, Tabs, TabList, Tab, TabLink } from 'bloomer'

const AppHeader = () => (
	<Container isFluid style={{ marginTop: 10 }} hasTextAlign="centered">
		<Tabs isAlign="centered">
			<TabList>
				<Tab>
					<Link to="/">Report Misconduct</Link>
				</Tab>
				<Tab>
					<Link to="/how-it-works/">How it Works</Link>
				</Tab>
				<Tab>
					<Link to="/about/">Who We Are</Link>
				</Tab>
			</TabList>
		</Tabs>
	</Container>
)

export default AppHeader
