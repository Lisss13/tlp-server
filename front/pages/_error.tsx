import { Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { AppContext } from "../components/AppContext"
import { SpacingPaper } from "../components/atoms"
import { Layout } from "../components/templates"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

type Props = {
  httpStatusCode: number
}

function Error(props: Props) {
  const { httpStatusCode } = props
  const classes = useStyles(props)
  return (
    <Layout className={classes.root}>
      <SpacingPaper>
        <Typography variant="h5">
          Http status code {httpStatusCode} error !
        </Typography>
      </SpacingPaper>
    </Layout>
  )
}

/**
 * Server side rendering
 */

Error.getInitialProps = async (ctx: AppContext): Promise<Props> => {
  const statusCode = ctx.res.statusCode
    ? ctx.res.statusCode
    : ctx.err
    ? ctx.err.statusCode
    : 404
  return {
    httpStatusCode: statusCode,
  }
}

export default Error
