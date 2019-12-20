import { Box, Divider, Grid, Typography } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel"
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import { makeStyles, Theme, withStyles } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import React from "react"
import { SpacingPaper } from "../atoms"

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

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

function TabPanel(props: TabPanelProps) {
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
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

function a11yProps(index: any) {
  return {
    id: `about-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    backgroundColor: theme.palette.common.white,
  },
  boxItem: {
    padding: theme.spacing(1),
    border: "1px solid lightgray",
  },
  bottomTitle: {
    fontSize: "16px",
    color: theme.palette.primary.dark,
  },
  description: {
    fontSize: "14px",
    color: theme.palette.primary.main,
  },
  expansionHeader: {
    fontSize: "14px",
    color: theme.palette.primary.dark,
  },
}))

export const AboutHeader = props => {
  const classes = useStyles(props)
  const [value, setValue] = React.useState(0)

  const tabsHandleChange = (_, newValue: number) => {
    setValue(newValue)
  }
  const [expanded, setExpanded] = React.useState<string | false>("panel1")

  const expandHandleChange = (panel: string) => (_, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }
  return (
    <div className={classes.root}>
      <Divider />
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={tabsHandleChange}
          className={classes.tabs}
        >
          <Tab label="Lorem ipsum" {...a11yProps(0)} />
          <Tab label="Nulla fusce" {...a11yProps(1)} />
          <Tab label="Curabitur morbi" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SpacingPaper>
          <Grid container spacing={3}>
            <Grid item xs>
              <Box className={classes.boxItem}>
                <Typography variant="h5" className={classes.bottomTitle}>
                  Lorem ipsum.
                </Typography>
                <Typography variant="h5" className={classes.bottomTitle} noWrap>
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="subtitle2" className={classes.description}>
                  Lorem ipsum dolor sit amet, condimentum libero accumsan, elit
                  diam a nibh rutrum erat convallis. Lorem ipsum dolor sit amet,
                  condimentum libero accumsan, elit diam a nibh rutrum erat
                  convallis. Lorem ipsum dolor sit amet, condimentum libero
                  accumsan, elit diam a nibh rutrum erat convallis. Lorem ipsum
                  dolor sit amet, condimentum libero accumsan, elit diam a nibh
                  rutrum erat convallis.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs>
              <Box className={classes.boxItem}>
                <Typography variant="h5" className={classes.bottomTitle}>
                  Lorem ipsum.
                </Typography>
                <Typography variant="h5" className={classes.bottomTitle} noWrap>
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="subtitle2" className={classes.description}>
                  Lorem ipsum dolor sit amet, condimentum libero accumsan, elit
                  diam a nibh rutrum erat convallis. Lorem ipsum dolor sit amet,
                  condimentum libero accumsan, elit diam a nibh rutrum erat
                  convallis. Lorem ipsum dolor sit amet, condimentum libero
                  accumsan, elit diam a nibh rutrum erat convallis. Lorem ipsum
                  dolor sit amet, condimentum libero accumsan, elit diam a nibh
                  rutrum erat convallis. Lorem ipsum dolor sit amet, condimentum
                  libero accumsan, elit diam a nibh rutrum erat convallis.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </SpacingPaper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <ExpansionPanel
            square
            expanded={expanded === "panel1"}
            onChange={expandHandleChange("panel1")}
          >
            <ExpansionPanelSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Lorem ipsum dolor sit amet</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            square
            expanded={expanded === "panel2"}
            onChange={expandHandleChange("panel2")}
          >
            <ExpansionPanelSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur.</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            square
            expanded={expanded === "panel3"}
            onChange={expandHandleChange("panel3")}
          >
            <ExpansionPanelSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SpacingPaper>
          <Grid container spacing={3}>
            <Grid item xs>
              <Box className={classes.boxItem}>
                <Typography variant="h5" className={classes.bottomTitle}>
                  Lorem ipsum.
                </Typography>
                <Typography variant="h5" className={classes.bottomTitle} noWrap>
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="subtitle2" className={classes.description}>
                  Lorem ipsum dolor sit amet, condimentum libero accumsan, elit
                  diam a nibh rutrum erat convallis. Lorem ipsum dolor sit amet,
                  condimentum libero accumsan.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs>
              <Box className={classes.boxItem}>
                <Typography variant="h5" className={classes.bottomTitle}>
                  Lorem ipsum.
                </Typography>
                <Typography variant="h5" className={classes.bottomTitle} noWrap>
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="subtitle2" className={classes.description}>
                  Lorem ipsum dolor sit amet, condimentum libero accumsan, elit
                  diam a nibh rutrum erat convallis. Lorem ipsum dolor sit amet,
                  condimentum libero accumsan, elit diam a nibh rutrum erat
                  convallis. Lorem ipsum dolor sit amet, condimentum libero
                  accumsan, elit diam a nibh rutrum erat convallis. Lorem ipsum
                  dolor sit amet, condimentum libero accumsan, elit diam a nibh
                  rutrum erat convallis. Lorem ipsum dolor sit amet, condimentum
                  libero accumsan, elit diam a nibh rutrum erat convallis. Lorem
                  ipsum dolor sit amet, condimentum libero accumsan, elit diam a
                  nibh rutrum erat convallis. Lorem ipsum dolor sit amet,
                  condimentum libero accumsan.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </SpacingPaper>
      </TabPanel>
    </div>
  )
}
