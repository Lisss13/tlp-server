import React from "react"
import { AboutHeader, AboutContent } from "../components/molecules"
import { Layout } from "../components/templates"
import * as axios from "axios"
import { withTranslation } from "react-i18next"

class AboutPage extends React.Component {
  state = {
    lang: "ru",
    question: [],
    post: [],
  }

  componentDidUpdate = async prevProps => {
    if (this.state.lang !== prevProps.i18n.language) {
      const post = await axios.get(`/post/${prevProps.i18n.language}.json`)
      const question = await axios.get(
        `/question/${prevProps.i18n.language}.json`
      )
      this.setState({
        lang: prevProps.i18n.language,
        post: post.data.data,
        question: question.data.data,
      })
    }
  }

  render() {
    return (
      <Layout>
        <AboutHeader post={this.state.post} question={this.state.question} />
        <AboutContent />
      </Layout>
    )
  }
}

export default withTranslation()(AboutPage)
