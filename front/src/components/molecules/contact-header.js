import React from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import { makeStyles } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import { SpacingPaper } from "../atoms"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  )
}

function a11yProps(index) {
  return {
    id: `about-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    backgroundColor: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    borderRight: `1px solid ${theme.palette.divider}`,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  appBar: {
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  },
  paper: {
    minHeight: "112px",
  },
  boxItem: {
    padding: theme.spacing(1),
    border: "1px solid lightgray",
    textAlign: "left",
  },
  bottomTitle: {
    textAlign: "left",
    fontSize: "14px",
    color: theme.palette.primary.dark,
  },
  description: {
    textAlign: "left",
    fontSize: "14px",
    color: theme.palette.primary.main,
  },
  side: {
    padding: 0,
  },
  tabText: {
    minWidth: "100%",
  },
}))

const getHeader = data => {
  const result = data.slice(0, -1)
  return result
}

/**
 * Contacts header component
 * @param props Props
 */
export const ContactHeader = props => {
  const classes = useStyles(props)
  const [value, setValue] = React.useState(0)

  const content = props.content

  const handleChange = (_, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <AppBar position="static" className={classes.appBar}>
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              className={classes.tabs}
            >
              {content &&
                getHeader(content).map(item => (
                  <Tab
                    className={classes.tabText}
                    key={item.id}
                    label={item.title}
                    {...a11yProps(item.id)}
                  />
                ))}
            </Tabs>
          </AppBar>
        </Grid>
        <Grid item xs={8}>
          {content &&
            getHeader(content).map(item => (
              <TabPanel key={item.id} value={value} index={item.id - 1}>
                <SpacingPaper className={classes.paper}>
                  <Typography variant="h5" className={classes.bottomTitle}>
                    {item.subTitle}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className={classes.description}
                  >
                    {item.text}
                  </Typography>
                </SpacingPaper>
              </TabPanel>
            ))}
        </Grid>
      </Grid>
    </div>
  )
}
