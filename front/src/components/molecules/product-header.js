import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      color: theme.palette.primary.dark,
      padding: theme.spacing(2),
      textAlign: "center",
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
    paper: {
      padding: theme.spacing(2),
      minHeight: "160px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.primary.dark,
    },
    gridItem: {
      textAlign: "left",
    },
    gridImage: {
      maxWidth: "120px",
      height: "auto",
    },
    description: {
      fontSize: "14px",
      color: theme.palette.primary.main,
    },
  })
)

/**
 * Page header component
 * @param props Props
 */
export const ProductHeader = props => {
  const classes = useStyles(props)
  const { t } = useTranslation()

  return (
    <Paper square={true} className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs className={classes.gridItem}>
          <Typography
            variant="h3"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {t("product.headerTitle")}
          </Typography>
          <Paper className={classes.paper}>
            <img
              className={classes.gridImage}
              alt="img"
              src="/images/placeholder.svg"
            />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  )
}
