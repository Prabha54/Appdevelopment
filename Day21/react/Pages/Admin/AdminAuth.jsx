import { Outlet,Navigate } from "react-router-dom";

const AdminAuth =()=>{
    const Token = localStorage.getItem('authToken')!==null;
    const role = localStorage.getItem('xrole')==='ADMIN'
    return (
        Token && role ?<Outlet/> : <Navigate to='/login'></Navigate>

    )
}
export default AdminAuth;