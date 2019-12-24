import React from "react"
import { HomeHeader, HomeContent } from "../components/molecules"
import { Layout } from "../components/templates"
import * as axios from "axios"
import { withTranslation } from "react-i18next"

class ContactPage extends React.Component {
  state = {
    lang: "ru",
    post: [],
  }

  componentDidUpdate = async prevProps => {
    if (this.state.lang !== prevProps.i18n.language) {
      const result = await axios.get(`/post/${prevProps.i18n.language}.json`)
      this.setState({
        lang: prevProps.i18n.language,
        post: result.data.data,
      })
    }
  }

  render() {
    return (
      <Layout>
        <HomeHeader />
        <HomeContent post={this.state.contact} />
      </Layout>
    )
  }
}

export default withTranslation()(ContactPage)
