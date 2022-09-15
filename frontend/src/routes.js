import Home from "./pages/Home"
import Auth from "./pages/Auth"
import { LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE } from "./utils/consts"

export const publicRoutes = [
    {
        path:HOME_ROUTE,
        Component: Home
    },
    {
        path:LOGIN_ROUTE,
        Component: Auth
    },
    {
        path:REGISTRATION_ROUTE,
        Component: Auth
    }
]