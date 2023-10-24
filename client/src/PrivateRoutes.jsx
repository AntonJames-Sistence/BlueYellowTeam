import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = true;
    // let auth = true;
    return (
        auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes