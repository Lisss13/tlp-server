import React from "react"
import { Box, List, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { CentredContainer } from "../atoms"
import { ListNavigation } from "../molecules"
import { useTranslation } from "react-i18next"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    navHeaderContainer: {
      [theme.breakpoints.up("md")]: {
        minHeight: "55px",
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.secondary.main,
      boxShadow: theme.shadows[2],
      zIndex: theme.zIndex.drawer + 1,
    },
    navHeaderText: {
      fontWeight: "bold",
      fontSize: "18px",
      color: theme.palette.common.white,
      paddingLeft: "15px",
    },
    toolbar: theme.mixins.toolbar,
    list: {
      display: "flex",
      flexDirection: "row",
      padding: 0,
      border: 0,
      width: "100%",
    },
    listItem: {
      boxShadow:
        "0px 4px 0px 0px rgba(0,0,0,0.2), 0px 3px 1px 0px rgba(0,0,0,0.14), 0px 3px 3px 0px rgba(0,0,0,0.12)",
      height: "100%",
      display: "flex",
      alignItems: "flex-start",
      border: "none",
    },
  })
)

const pages = [
  {
    id: 0,
    path: "/",
    title: "home.title",
    subTitle: "home.subTitle",
  },
  {
    id: 1,
    path: "/about",
    title: "about.title",
    subTitle: "about.subTitle",
  },
  {
    id: 2,
    path: "/contact",
    title: "contact.title",
    subTitle: "contact.subTitle",
  },
  {
    id: 3,
    path: "/product",
    title: "product.title",
    subTitle: "product.subTitle",
  },
  {
    id: 4,
    path: "/feedback",
    title: "feedback.title",
    subTitle: "feedback.subTitle",
  },
]

/**
 * Side navigation component
 * @param props Props
 */
export const Navigation = function(props) {
  const classes = useStyles(props)
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <Box className={classes.navHeaderContainer}>
        <CentredContainer>
          <Typography variant="h6" className={classes.navHeaderText}>
            {t("navTitle")}
          </Typography>
        </CentredContainer>
      </Box>
      <CentredContainer>
        <List className={classes.list}>
          {pages.map((page, index) => {
            return (
              <ListNavigation
                key={index}
                href={page.path}
                primary={t(page.title)}
                secondary={t(page.subTitle)}
              />
            )
          })}
        </List>
      </CentredContainer>
    </div>
  )
}
