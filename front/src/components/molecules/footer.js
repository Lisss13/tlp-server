import React from "react"
import { BottomNavigationAction, Box, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import { CentredContainer, SpacingPaper } from "../atoms"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    bottomContainer: {
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
    bottomTitleContainer: {
      display: "flex",
      height: "100%",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column-reverse",
      },
    },
    bottomTitle: {
      color: theme.palette.primary.dark,
      fontSize: "12px",
      padding: "0 5px",
    },
    bottomLink: {
      textDecoration: "underline",
      padding: "0 5px",
      fontSize: "12px",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "10px",
        textAlign: "center",
      },
    },
    linkIcon: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    bottomButton: {
      display: "flex",
    },
  })
)

/**
 * Header and article container component
 * @param props Props
 */
export const FooterContainer = props => {
  const { t } = useTranslation()
  const classes = useStyles(props)

  return (
    <CentredContainer>
      <SpacingPaper>
        <Box className={classes.bottomContainer}>
          <Box>
            <div className={classes.bottomTitleContainer}>
              <Typography variant="h5" className={classes.bottomTitle}>
                {t("footer.description")}
              </Typography>
              <Link to="/about" className={classes.bottomLink}>
                {t("footer.privacy")}
              </Link>
              <Link to="/about" className={classes.bottomLink}>
                {t("footer.cookie")}
              </Link>
            </div>
          </Box>
          <Link to="/contact" className={classes.linkIcon}>
            <Box className={classes.bottomButton}>
              <BottomNavigationAction
                label="Nearby"
                icon={<LocationOnIcon />}
              />
            </Box>
          </Link>
        </Box>
      </SpacingPaper>
    </CentredContainer>
  )
}
