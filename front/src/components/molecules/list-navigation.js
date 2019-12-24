import { ListItem, ListItemText } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import React from "react"
import { useRouteMatch } from "react-router-dom"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      width: "100%",
      height: "auto",
      textDecoration: "none",
      boxShadow:
        "0px 4px 0px 0px rgba(0,0,0,0.2), 0px 3px 1px 0px rgba(0,0,0,0.14), 0px 3px 3px 0px rgba(0,0,0,0.12)",
    },
    anchorLink: {
      width: "100%",
      height: "100%",
      textDecoration: "none",
    },
    listItemPrimary: {
      color: theme.palette.primary.contrastText,
      fontSize: "18px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
    },
    listItemSecondary: {
      color: theme.palette.primary.contrastText,
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
    deactive: {
      transition: "background-color 1.2s", // mouse out
      height: "100%",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
        transition: "background-color 0.4s", // mouse over
      },
    },
    active: {
      backgroundColor: theme.palette.secondary.main,
      height: "100%",
      "& span": {
        color: theme.palette.common.white,
      },
    },
  })
)

/**
 * React optimized <ListItem>
 * @param props Props
 */
export const ListNavigation = props => {
  const { href, primary, secondary, onClick } = props
  const classes = useStyles(props)
  const match = useRouteMatch({
    path: href,
    strict: true,
    exact: true,
  })
  const isActive = Boolean(match)

  return (
    <Link to={href} className={classes.root}>
      <div className={classes.anchorLink} onClick={onClick}>
        <ListItem
          alignItems="center"
          divider={true}
          className={
            isActive
              ? `${classes.listItem} ${classes.active}`
              : `${classes.listItem} ${classes.deactive}`
          }
        >
          <ListItemText
            primary={<span className={classes.listItemPrimary}>{primary}</span>}
            secondary={
              <span className={classes.listItemSecondary}>{secondary}</span>
            }
          />
        </ListItem>
      </div>
    </Link>
  )
}
