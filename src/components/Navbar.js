import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar md:px-20 bg-base-100">
                    <div className="flex-1 px-2 mx-2 text-2xl">Clean Co.</div>
                    <div className="flex-none lg:hidden">
                        <label
                            htmlFor="my-drawer-3"
                            className="btn btn-square btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-6 h-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-x-2">
                            {/* <!-- Navbar menu content here --> */}
                            <li>
                                <NavLink
                                    className="rounded-lg hover:bg-primary hover:text-white"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="rounded-lg hover:bg-primary hover:text-white"
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="rounded-lg hover:bg-primary hover:text-white"
                                    to="/services"
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="rounded-lg hover:bg-primary hover:text-white"
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="rounded-lg hover:bg-primary hover:text-white"
                                    to="/login"
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li className="dropdown dropdown-hover dropdown-end">
                                <label
                                    tabindex="0"
                                    className="rounded-lg hover:bg-primary hover:text-white btn btn-outline btn-primary"
                                >
                                    BOOK NOW
                                </label>
                                <ul
                                    tabindex="0"
                                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a>Item 1</a>
                                    </li>
                                    <li>
                                        <a>Item 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">Theme</button>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <a>Sidebar Item 1</a>
                    </li>
                    <li>
                        <a>Sidebar Item 2</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
