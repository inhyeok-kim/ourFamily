import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
  } from "react-router-dom";
import Error from "../Pages/Error";
import AdminLayout from "../Layout/AdminLayout";
  
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<AdminLayout />}
            errorElement={<Error />}
        >
            <Route
                path="hi"
                element={<div>hi</div>}
            >
            </Route>
        </Route>
    )
);

export default router;