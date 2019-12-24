import React from "react"
import { ContactHeader, ContactContent } from "../components/molecules"
import { Layout } from "../components/templates"
import * as axios from "axios"
import { withTranslation } from "react-i18next"

class ContactPage extends React.Component {
  state = {
    lang: "ru",
    data: [],
  }

  componentDidUpdate = async prevProps => {
    if (this.state.lang !== prevProps.i18n.language) {
      const result = await axios.get(
        `/contacts/${prevProps.i18n.language}.json`
      )
      this.setState({
        lang: prevProps.i18n.language,
        data: result.data.data,
      })
    }
  }

  render() {
    return (
      <Layout>
        <ContactHeader content={this.state.data} />
        <ContactContent content={this.state.data} />
      </Layout>
    )
  }
}

export default withTranslation()(ContactPage)
