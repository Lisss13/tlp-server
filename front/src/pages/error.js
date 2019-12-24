import { Typography, Box } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import React from "react"
import { Layout } from "../components/templates"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    form: {
      borderTop: `1px solid ${theme.palette.divider}`,
      display: "flex",
      justifyContent: "center",
      paddingTop: "20px",
      paddingBottom: "10px",
    },
  })
)

export const ErrorPage = props => {
  const classes = useStyles(props)
  return (
    <Layout className={classes.root}>
      <Box className={classes.form}>
        <Typography variant="h5">
          Page not found. Http status code 404 error !
        </Typography>
      </Box>
    </Layout>
  )
}
