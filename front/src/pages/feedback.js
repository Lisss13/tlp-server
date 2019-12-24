import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { FeedbackHeader, FeedbackContent } from "../components/molecules"
import { Layout } from "../components/templates"

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  })
)

export const FeedbackPage = () => {
  const classes = useStyles({})

  return (
    <Layout className={classes.root}>
      <FeedbackHeader />
      <FeedbackContent />
    </Layout>
  )
}
