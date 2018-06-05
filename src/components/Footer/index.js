import React from 'react'
import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'

const AppFooter = () => (
  <Footer id="footer">
    <Container>
      <Content>
        <Columns>
          <Column isFull>
            <p>
              Made with<Icon hasTextColor="danger" className="fa fa-heart" />
            </p>
          </Column>
        </Columns>
        <Content isSize="small">
          <p />
        </Content>
      </Content>
    </Container>
  </Footer>
)

export default AppFooter
