import {
  AppBar,
  Button,
  Drawer,
  Grid,
  Hidden,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import React, { useState } from "react"
import Language from "@material-ui/icons/Language"
import { CentredContainer } from "../atoms"
import { Navigation } from "./navigation"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      paddingBottom: 20,
      boxSizing: "content-box",
    },
    appBar: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      padding: 0,
      paddingRight: 0,
      backgroundColor: "white",
      boxSizing: "content-box",
      [theme.breakpoints.up("md")]: {
        width: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        minHeight: "70px",
      },
    },
    toolBar: {
      padding: 0,
      minHeight: "55px",
      boxSizing: "content-box",
    },
    toolBox: {
      display: "flex",
      width: "50%",
      boxSizing: "content-box",
    },
    rightToolBox: {
      justifyContent: "flex-end",
      boxSizing: "content-box",
    },
    logoIcon: {
      height: "45px",
      width: "auto",
      paddingLeft: "15px",
      paddingRight: "15px",
    },
    logoBox: {
      minHeight: "55px",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        boxShadow:
          "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      },
      "&:hover": {
        backgroundColor: "lightgray",
        color: "white",
        textDecoration: "none",
      },
    },
    langContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:first-child": {
        padding: 0,
      },
    },
    topButton: {
      height: "55px",
      position: "relative",
      display: "flex",
      alignItems: "center",
      color: theme.palette.primary.dark,
      paddingLeft: "15px",
      paddingRight: "10px",
      textDecoration: "none",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },

      "&::after": {
        content: '""',
        display: "block",
        width: 0,
        height: 0,
        borderTop: "29px solid transparent",
        borderBottom: "29px solid transparent",
        borderLeft: "10px solid #fff",
        position: "absolute",
        top: "44%",
        marginTop: "-25px",
        left: "100%",
        zIndex: 2,
      },
      "&::before": {
        content: '""',
        display: "block",
        width: 0,
        height: 0,
        borderTop: "29px solid transparent",
        borderBottom: "29px solid transparent",
        borderLeft: "10px solid #ccc",
        position: "absolute",
        top: "44%",
        marginTop: "-25px",
        marginLeft: "1px",
        left: "100%",
        zIndex: 1,
      },
      "&:hover:after": {
        borderLeft: "10px solid lightgray",
      },
      "&:hover": {
        backgroundColor: "lightgray",
        color: "white",
        textDecoration: "none",
      },
    },
    navIconHide: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    drawerPaper: {
      [theme.breakpoints.up("md")]: {
        position: "relative",
      },
    },
    content: {
      flexGrow: 1,
    },
    title: {
      paddingLeft: "5px",
      paddingRight: "5px",
      fontSize: 25,
      display: "flex",
      alignItems: "center",
      color: theme.palette.primary.contrastText,
      fontWeight: "bold",
    },
  })
)

/**
 * Responsive drawer
 * @see https://material-ui.com/demos/drawers/#responsive-drawer
 */
export const ResponsiveDrawer = props => {
  const { children } = props
  const classes = useStyles(props)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const lang = ["ru", "en", "de", "it"]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = lang => {
    i18n.changeLanguage(lang)
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <CentredContainer>
          <Toolbar className={classes.toolBar}>
            <Grid container>
              <Grid item xs={6} className={classes.toolBox}>
                <Link className={classes.logoBox} to="/contact">
                  <img
                    className={classes.logoIcon}
                    alt="icon"
                    src="/icons/logo/logo.png"
                  />
                </Link>
                <Link className={classes.topButton} to="/contact">
                  {t("link")}
                </Link>
              </Grid>
              <Grid
                item
                xs={6}
                className={`${classes.toolBox} ${classes.rightToolBox}`}
              >
                <Typography
                  variant="h2"
                  noWrap
                  align={"right"}
                  className={classes.title}
                >
                  {t("title")}
                </Typography>

                <div className={classes.langContainer}>
                  <Button onClick={handleClick}>
                    <Language />
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => handleClose()}
                  >
                    {lang.map(item => {
                      return (
                        <MenuItem key={item} onClick={() => handleClose(item)}>
                          {item}
                        </MenuItem>
                      )
                    })}
                  </Menu>
                </div>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={handleDrawerToggle}
                  className={classes.navIconHide}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </CentredContainer>
      </AppBar>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Navigation />
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor={"top"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Navigation />
        </Drawer>
      </Hidden>
      <main className={classes.content}>{children}</main>
    </div>
  )
}
