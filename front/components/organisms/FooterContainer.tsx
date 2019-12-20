import {
  BottomNavigationAction,
  Box,
  Link,
  Typography,
} from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import FavoriteIcon from "@material-ui/icons/Favorite"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import RestoreIcon from "@material-ui/icons/Restore"
import { CentredContainer, SpacingPaper } from "../atoms"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    bottomContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    bottomTitle: {
      alignItems: "center",
      color: theme.palette.primary.dark,
      display: "flex",
      fontSize: "12px",
      height: "100%",
      letterSpacing: "0.5px",
    },
    bottomLink: {
      textDecoration: "underline",
    },
    bottomButton: {
      display: "flex",
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
export const FooterContainer = function(props: Props) {
  const classes = useStyles(props)
  return (
    <CentredContainer>
      <SpacingPaper>
        <Box className={classes.bottomContainer}>
          <Box className={classes.bottomButton}>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </Box>
          <Box>
            <Typography variant="h5" className={classes.bottomTitle}>
              © TLP Limited 2005-2019. All Rights Reserved. Content strictly
              protected by Copyscape.&nbsp;
              <Link href="/about" className={classes.bottomLink}>
                Privacy Policy.
              </Link>
              &nbsp;
              <Link href="/contact" className={classes.bottomLink}>
                Cookie Policy.
              </Link>
            </Typography>
          </Box>
        </Box>
      </SpacingPaper>
    </CentredContainer>
  )
}
