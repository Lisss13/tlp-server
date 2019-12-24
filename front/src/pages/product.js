import React from "react"
import { ProductHeader, ProductContent } from "../components/molecules"
import { Layout } from "../components/templates"
import * as axios from "axios"
import { withTranslation } from "react-i18next"

class ContactPage extends React.Component {
  state = {
    lang: "ru",
    product: [],
  }

  componentDidUpdate = async prevProps => {
    if (this.state.lang !== prevProps.i18n.language) {
      const result = await axios.get(`/product/${prevProps.i18n.language}.json`)
      this.setState({
        lang: prevProps.i18n.language,
        product: result.data.data,
      })
    }
  }

  render() {
    return (
      <Layout>
        <ProductHeader />
        <ProductContent content={this.state.product} />
      </Layout>
    )
  }
}

export default withTranslation()(ContactPage)
