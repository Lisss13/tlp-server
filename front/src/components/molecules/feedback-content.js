import React from "react"
import { Paper, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginTop: 20,
      padding: theme.spacing(3),
    },
    title: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      fontSize: "16px",
      whiteSpace: "pre-wrap",
      lineHeight: 1.5,
      paddingLeft: 0,
      color: theme.palette.primary.dark,
    },
  })
)

/**
 * Header and article container component
 * @param props Props
 */
export const FeedbackContent = props => {
  const { t } = useTranslation()
  const classes = useStyles(props)

  return (
    <Paper square={true} className={classes.root}>
      <Typography variant="h3" color="inherit" noWrap className={classes.title}>
        {t("feedback.info")}
      </Typography>
    </Paper>
  )
}
