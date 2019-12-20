import { Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { SpacingPaper } from "../atoms"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    bottomTitle: {
      fontSize: "16px",
      color: theme.palette.primary.dark,
    },
    description: {
      fontSize: "14px",
      color: theme.palette.primary.main,
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
export const AboutContent = function(props: Props) {
  const classes = useStyles(props)
  return (
    <>
      <SpacingPaper>
        <Typography variant="subtitle2" className={classes.description}>
          Lorem ipsum dolor sit amet.
        </Typography>
      </SpacingPaper>
    </>
  )
}
