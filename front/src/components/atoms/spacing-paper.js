import React from "react"
import { Paper } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    root: props => ({
      padding: props.noPadding === true ? theme.spacing(0) : theme.spacing(2),
      boxShadow:
        "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    }),
  })
)
/**
 * Paper with spacing
 * @param props IProps
 */
export const SpacingPaper = props => {
  const { children, className } = props
  const classes = useStyles(props)
  return (
    <Paper className={`${classes.root} ${className}`} elevation={6}>
      {children}
    </Paper>
  )
}
