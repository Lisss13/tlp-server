import React from "react"
import { Typography } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { SpacingPaper } from "../atoms"
import { useTranslation } from "react-i18next"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    bottomTitle: {
      fontSize: "14px",
      color: theme.palette.primary.dark,
    },
    description: {
      fontSize: "14px",
      color: theme.palette.primary.main,
    },
    container: {
      marginTop: "20px",
    },
  })
)

/**
 * Header and article container component
 * @param props Props
 */
export const AboutContent = props => {
  const { t } = useTranslation()
  const classes = useStyles(props)
  return (
    <>
      <SpacingPaper className={classes.container}>
        <Typography variant="subtitle2" className={classes.description}>
          {t("about.description")}
        </Typography>
      </SpacingPaper>
    </>
  )
}
