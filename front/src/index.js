import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import MyApp from "./pages"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import "./i18n"

ReactDOM.render(
  <BrowserRouter>
    <MyApp />
  </BrowserRouter>,
  document.getElementById("root")
)

serviceWorker.unregister()
