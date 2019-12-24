import React from "react"
import { Container } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
  })
)

/**
 * Centred container md size without padding
 * @param props IProps
 */
export const CentredContainer = props => {
  const { children } = props
  const classes = useStyles(props)
  return (
    <Container maxWidth={"md"} className={classes.root}>
      {children}
    </Container>
  )
}
