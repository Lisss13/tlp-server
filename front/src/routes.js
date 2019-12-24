import HomePage from "./pages/home"
import { FeedbackPage } from "./pages/feedback"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"
import ProductPage from "./pages/product"
import { ErrorPage } from "./pages/error"

export const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
  {
    path: "/product",
    component: ProductPage,
  },
  {
    path: "/feedback",
    component: FeedbackPage,
  },
  {
    path: "*",
    component: ErrorPage,
  },
]
