import React from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { SpacingPaper } from "../atoms"
import { GoogleMap } from "./google-map"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginTop: 20,
    },
    boxItem: {
      padding: theme.spacing(1),
    },
    bottomTitle: {
      fontSize: "14px",
      paddingBottom: 10,
      color: theme.palette.primary.dark,
    },
    description: {
      fontSize: "14px",
      color: theme.palette.primary.main,
    },
  })
)

const getContent = data => {
  const result = data.pop()
  return result
}

/**
 * Contacts content component
 * @param props Props
 */
export const ContactContent = props => {
  const classes = useStyles(props)
  const content = props.content
  const data = content && getContent(content.map(i => i))

  return (
    <div className={classes.root}>
      <SpacingPaper>
        <Grid container spacing={3}>
          <Grid item xs>
            <Box className={classes.boxItem}>
              <Typography variant="h5" className={classes.bottomTitle} noWrap>
                {data && data.title}
              </Typography>
              <Typography variant="h5" className={classes.bottomTitle} noWrap>
                {data && data.subtitle}
              </Typography>
              <Typography variant="subtitle2" className={classes.description}>
                {data && data.text}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs>
            <GoogleMap />
          </Grid>
        </Grid>
      </SpacingPaper>
    </div>
  )
}
