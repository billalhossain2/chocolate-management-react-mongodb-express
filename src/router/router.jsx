import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import AddChocolate from "../pages/AddChocolate";
import EditChocolate from "../pages/EditChocolate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/addChocolate",
    element: <AddChocolate></AddChocolate>,
  },
  {
    path: "/editChocolate/:chocolateId",
    element: <EditChocolate></EditChocolate>,
  },
]);

export default router;
