import { Grid, Typography } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
    card: {
      maxWidth: 345,
    },
  })
)

type Props = {
  /**
   * children
   */
  children?: React.ReactNode
}

/**
 * Header and article container component
 * @param props Props
 */
export const ProductContent = function(props: Props) {
  const classes = useStyles(props)
  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item xs>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/static/images/placeholder.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lorem ipsum.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, condimentum libero accumsan, elit
                diam a nibh rutrum erat convallis. Lorem ipsum dolor sit amet.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/static/images/placeholder.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lorem accumsan.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, condimentum libero accumsan, elit
                diam a nibh rutrum erat convallis. Lorem ipsum dolor sit amet.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/static/images/placeholder.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lorem rutrum.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, condimentum libero accumsan, elit
                diam a nibh rutrum erat convallis. Lorem ipsum dolor sit amet.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  )
}
