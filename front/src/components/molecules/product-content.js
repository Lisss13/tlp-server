import React from "react"
import { Grid, Typography } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import { createStyles, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      paddingTop: 20,
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 20,
        paddingRight: 20,
      },
    },
    cardContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "50%",
        },
      },
    },
    card: {
      width: 280,
      height: 320,
    },
    cardTitle: {
      color: theme.palette.primary.dark,
    },
    grid: {
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      paddingBottom: "60px",
    },
  })
)

/**
 * Header and article container component
 * @param props Props
 */
export const ProductContent = props => {
  const classes = useStyles(props)
  const content = props.content

  return (
    <Grid className={classes.root} container spacing={3}>
      {content &&
        content.map(item => {
          return (
            <Grid key={item.id} className={classes.cardContainer} item xs>
              <Card className={classes.card}>
                <CardActionArea className={classes.button}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/images/placeholder.png"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.cardTitle}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
    </Grid>
  )
}
