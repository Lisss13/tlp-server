import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { ProductHeader } from "../molecules"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
    contentsContainer: {
      paddingTop: "15px",
    },
  })
)

type Props = {
  /**
   * children
   */
  children: React.ReactNode
}

/**
 * Header and article container component
 * @param props Props
 */
export const ProductHeaderContainer = function(props: Props) {
  const { children } = props
  const classes = useStyles(props)
  return (
    <>
      <ProductHeader />
      <section className={classes.contentsContainer}>{children}</section>
    </>
  )
}
