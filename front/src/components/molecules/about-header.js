import React from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel"
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import { SpacingPaper } from "../atoms"
import { useTranslation } from "react-i18next"

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel)

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary)

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails)

const TabPanel = props => {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  )
}

const a11yProps = index => {
  return {
    id: `about-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    boxShadow:
      "0px 0px 4px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)",
  },
  tabs: {
    backgroundColor: theme.palette.common.white,
  },
  tab: {
    paddingTop: 18,
    paddingBottom: 18,
  },
  boxItem: {
    padding: theme.spacing(1),
    border: "1px solid lightgray",
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
  partnerDescription: {
    fontSize: "14px",
    paddingLeft: 20,
    color: theme.palette.primary.main,
  },
  expansionHeader: {
    fontSize: "14px",
    color: theme.palette.primary.dark,
  },
  partnerContainer: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  partnerRow: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: "20px",
  },
  partnerIcon: {
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      fontSize: "70px",
      color: theme.palette.primary.main,
    },
  },
  gridImage: {
    height: "100%",
  },
}))

export const AboutHeader = props => {
  const { t } = useTranslation()
  const classes = useStyles(props)
  const { question, post } = props
  const [value, setValue] = React.useState(0)

  const tabsHandleChange = (_, newValue) => {
    setValue(newValue)
  }
  const [expanded, setExpanded] = React.useState(false)

  const expandHandleChange = panel => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Tabs
          value={value}
          onChange={tabsHandleChange}
          className={classes.tabs}
        >
          <Tab
            className={classes.tab}
            label={t("contact.tabFirst")}
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tab}
            label={t("contact.tabSecond")}
            {...a11yProps(1)}
          />
          <Tab
            className={classes.tab}
            label={t("contact.tabThird")}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SpacingPaper>
          <Grid container spacing={3}>
            {post &&
              post.map(item => {
                return (
                  <Grid key={item.id} item xs={6}>
                    <Box className={classes.boxItem}>
                      <Typography
                        variant="h5"
                        className={classes.bottomTitle}
                        noWrap
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        className={classes.description}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </Grid>
                )
              })}
          </Grid>
        </SpacingPaper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {question &&
          question.map((item, index) => {
            return (
              <ExpansionPanel
                key={item.id}
                square
                expanded={expanded === `"panel" ${index}`}
                onChange={expandHandleChange(`"panel" ${index}`)}
              >
                <ExpansionPanelSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>{item.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>{item.text}</Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            )
          })}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SpacingPaper>
          <Grid container spacing={3} className={classes.partnerContainer}>
            <Box className={classes.partnerRow}>
              <Box className={classes.partnerIcon}>
                <img
                  className={classes.gridImage}
                  alt="img"
                  src="/images/placeholder.png"
                />
              </Box>
              <Typography
                variant="subtitle1"
                className={classes.partnerDescription}
              >
                {t("about.partner.firstPartner")}
              </Typography>
            </Box>
            <Box className={classes.partnerRow}>
              <Box className={classes.partnerIcon}>
                <img
                  className={classes.gridImage}
                  alt="img"
                  src="/images/placeholder.png"
                />
              </Box>
              <Typography
                variant="subtitle1"
                className={classes.partnerDescription}
              >
                {t("about.partner.secondPartner")}
              </Typography>
            </Box>
            <Box className={classes.partnerRow}>
              <Box className={classes.partnerIcon}>
                <img
                  className={classes.gridImage}
                  alt="img"
                  src="/images/placeholder.png"
                />
              </Box>
              <Typography
                variant="subtitle1"
                className={classes.partnerDescription}
              >
                {t("about.partner.thirdPartner")}
              </Typography>
            </Box>
          </Grid>
        </SpacingPaper>
      </TabPanel>
    </div>
  )
}
