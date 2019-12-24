import { ThemeProvider } from "@material-ui/styles"
import React from "react"
import { MuiTheme } from "../theme/mui-theme"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { routes } from "../routes"

const MyApp = props => {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ))
  return (
    <Router>
      <ThemeProvider theme={MuiTheme}>
        <Switch>{routeComponents} </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default MyApp
