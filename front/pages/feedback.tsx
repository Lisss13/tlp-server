import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { AppContext } from "../components/AppContext"
import { FeedbackContent } from "../components/molecules"
import { FeedbackHeaderContainer } from "../components/organisms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { IPagePayload, PageActions } from "../store/page"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

function Feedback() {
  const classes = useStyles({})
  return (
    <Layout className={classes.root}>
      <FeedbackHeaderContainer>
        <FeedbackContent />
      </FeedbackHeaderContainer>
    </Layout>
  )
}

/**
 * Server side rendering
 */
Feedback.getInitialProps = async (ctx: AppContext) => {
  const pagePayload: IPagePayload = {
    selectedPage: Page.FEEDBACK,
  }
  ctx.store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
}

export default Feedback
