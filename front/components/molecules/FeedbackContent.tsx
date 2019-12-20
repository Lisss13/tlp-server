import { Paper, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 20,
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
  })
)

type Props = {
  /**
   * children
   */
  children?: React.ReactNode
}

/**
 * Header and article container component
 * @param props Props
 */
export const FeedbackContent = function(props: Props) {
  const classes = useStyles(props)
  return (
    <Paper square={true} className={classes.root}>
      <Typography variant="h3" color="inherit" noWrap className={classes.title}>
        Connecting with us!
      </Typography>
    </Paper>
  )
}
