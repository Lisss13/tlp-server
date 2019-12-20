import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { AppContext } from "../components/AppContext"
import { ProductContent } from "../components/molecules"
import { ProductHeaderContainer } from "../components/organisms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { IPagePayload, PageActions } from "../store/page"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

function Product() {
  const classes = useStyles({})
  return (
    <Layout className={classes.root}>
      <ProductHeaderContainer>
        <ProductContent />
      </ProductHeaderContainer>
    </Layout>
  )
}

/**
 * Server side rendering
 */
Product.getInitialProps = async (ctx: AppContext) => {
  const pagePayload: IPagePayload = {
    selectedPage: Page.PRODUCT,
  }
  ctx.store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
}

export default Product
