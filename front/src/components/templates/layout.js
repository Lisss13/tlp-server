import { createStyles, makeStyles } from "@material-ui/core/styles"
import * as React from "react"
import { ResponsiveDrawer } from "../organisms"
import { CentredContainer } from "../atoms"
import { FooterContainer } from "../molecules"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100%",
    },
  })
)

export const Layout = props => {
  const { children, className } = props
  const classes = useStyles(props)
  return (
    <section className={`${classes.root} ${className}`}>
      {/* <Head>
        <title>LAYUOT HEADER</title>
      </Head> */}
      <ResponsiveDrawer>
        <CentredContainer>
          <article>{children}</article>
        </CentredContainer>
      </ResponsiveDrawer>
      <FooterContainer />
    </section>
  )
}
