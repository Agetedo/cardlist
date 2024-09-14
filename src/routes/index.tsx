/* eslint-disable react-refresh/only-export-components */
import React from "react";
import PathConstants from "./pathConstants";

const HomePage = React.lazy(() => import("../pages/HomePage"))
const Episode01Page = React.lazy(() => import("../pages/Episode01Page"))
const Episode02Page = React.lazy(() => import("../pages/Episode02Page"))
const Episode03Page = React.lazy(() => import("../pages/Episode03Page"))

const routes = [
  { path: PathConstants.HOMEPAGE, element: <HomePage /> },
  { path: PathConstants.EPISODE01PAGE, element: <Episode01Page /> },
  { path: PathConstants.EPISODE02PAGE, element: <Episode02Page /> },
  { path: PathConstants.EPISODE03PAGE, element: <Episode03Page /> },
]
export default routes;