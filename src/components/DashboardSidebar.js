import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = ({children}) => {
    // testing to see if push is working
    return (
        <div className="drawer drawer-mobile bg-accent">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content gap-1">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <NavLink to="add-service">Add Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="add-admin">Add Admin</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;
