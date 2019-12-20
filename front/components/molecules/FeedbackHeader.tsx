import { Button, Grid, Paper, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import React from "react"
import { useSelector } from "react-redux"
import { selectedPageSelector } from "../../store/page"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.dark,
      padding: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    },
    form: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
    },
    title: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      fontSize: "16px",
      padding: theme.spacing(1),
      paddingLeft: 0,
      color: theme.palette.primary.dark,
    },
    field: {
      width: "100%",
    },
    fieldMulti: {
      width: "100%",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "flex-end",
    },
    buttonText: {
      color: theme.palette.common.white,
      fontSize: 16,
    },
  })
)

type Props = {}

/**
 * Page header component
 * @param props Props
 */
export const FeedbackHeader = function(props: Props) {
  const classes = useStyles(props)
  const selectedPage = useSelector(selectedPageSelector)
  return (
    <Paper square={true} className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {selectedPage.pageTitle}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.field}
              label="Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.field}
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Subject"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.fieldMulti}
              label="Your message..."
              multiline
              rowsMax="8"
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.buttonContainer} item xs={12}>
            <Button variant="contained" color="secondary">
              <Typography
                variant="subtitle2"
                color="inherit"
                noWrap
                className={classes.buttonText}
              >
                Submit
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}
