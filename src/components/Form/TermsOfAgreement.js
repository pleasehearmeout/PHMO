import React from 'react'
import {
	Modal,
	ModalBackground,
	ModalCard,
	ModalCardHeader,
	Delete,
	ModalCardTitle,
	ModalCardBody,
	ModalCardFooter
} from 'bloomer'

class TermsOfAgreement extends React.Component {
	constructor(props) {
		super(props)

		this.onCancel = this.onCancel.bind(this)
	}

	onCancel() {
		this.props.onTermsClick()
	}

	render() {
		return (
			<Modal isActive={this.props.isModalActive}>
				<ModalBackground />
				<ModalCard>
					<ModalCardHeader>
						<ModalCardTitle>Terms of Service</ModalCardTitle>
						<Delete onClick={() => this.onCancel()} />
					</ModalCardHeader>
					<ModalCardBody>{/* Your Content  */}</ModalCardBody>
					<ModalCardFooter />
				</ModalCard>
			</Modal>
		)
	}
}

export default TermsOfAgreement
