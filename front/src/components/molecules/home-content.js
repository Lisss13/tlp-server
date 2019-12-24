import React from "react"
import { Box, Divider, Grid, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { SpacingPaper } from "../atoms"
import { useTranslation } from "react-i18next"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    title: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      fontSize: "14px",
      padding: theme.spacing(1),
      paddingLeft: 0,
      color: theme.palette.primary.contrastText,
    },
    divider: {
      margin: "15px 0",
    },
    container: {
      marginTop: "20px",
    },
    paper: {
      padding: theme.spacing(2),
      minHeight: "160px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.primary.contrastText,
    },
    gridItem: {
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    gridIcon: {
      height: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& svg": {
        fontSize: "70px",
        color: theme.palette.primary.main,
      },
    },
    gridImage: {
      height: "70px",
      width: "auto",
      padding: "20px",
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

    boxItem: {
      padding: theme.spacing(1),
      border: "1px solid lightgray",
    },
  })
)

const getPosts = data => {
  const result = data.slice(0, 2)
  return result
}

/**
 * Header and article container component
 * @param props Props
 */
export const HomeContent = props => {
  const { t } = useTranslation()
  const classes = useStyles(props)
  const { post } = props

  return (
    <Box>
      <SpacingPaper className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={3} className={classes.gridItem}>
            <Typography
              variant="h3"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {t("home.contentContainer.firstTitle")}
            </Typography>
            <Box className={classes.gridIcon}>
              <img
                className={classes.gridImage}
                alt="img"
                src="/icons/home/quality.png"
              />
            </Box>
          </Grid>
          <Grid item xs={3} className={classes.gridItem}>
            <Typography
              variant="h3"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {t("home.contentContainer.secondTitle")}
            </Typography>
            <Box className={classes.gridIcon}>
              <img
                className={classes.gridImage}
                alt="img"
                src="/icons/home/medicine.png"
              />
            </Box>
          </Grid>
          <Grid item xs={3} className={classes.gridItem}>
            <Typography
              variant="h3"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {t("home.contentContainer.thirdTitle")}{" "}
            </Typography>
            <Box className={classes.gridIcon}>
              <img
                className={classes.gridImage}
                alt="img"
                src="/icons/home/warehouse.png"
              />
            </Box>
          </Grid>
          <Grid item xs={3} className={classes.gridItem}>
            <Typography
              variant="h3"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {t("home.contentContainer.fourthTitle")}
            </Typography>
            <Box className={classes.gridIcon}>
              <img
                className={classes.gridImage}
                alt="img"
                src="/icons/home/delivery.png"
              />
            </Box>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Typography variant="h5" className={classes.bottomTitle}>
          {t("home.description")}
        </Typography>
      </SpacingPaper>
      <SpacingPaper className={classes.container}>
        <Grid container spacing={3}>
          {post &&
            getPosts(post).map(item => {
              return (
                <Grid key={item.id} item xs>
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
    </Box>
  )
}
