import React from 'react';
import Link from "next/link";

function Header() {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <Link href="/" className="logo d-flex align-items-center">
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">SunTree</span>
                </Link>
                <i className="bi bi-list toggle-sidebar-btn"/>

                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                    </form>
                </div>

            </div>

            <nav className="header-nav ms-auto">

                <ul className="d-flex align-items-center">
                    <li className="nav-item dropdown">
                        <Link className="nav-link nav-icon" href="/" data-bs-toggle="dropdown">
                            <i className="bi bi-bell"></i>
                            <span className="badge bg-primary badge-number">2</span>
                        </Link>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                            <li className="dropdown-header">
                                You have 2 new notifications
                                <Link href="/"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="notification-item">
                                <i className="bi bi-exclamation-circle text-warning"></i>
                                <div>
                                    <h4>Lorem Ipsum</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>30 min. ago</p>
                                </div>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="notification-item">
                                <i className="bi bi-x-circle text-danger"></i>
                                <div>
                                    <h4>Atque rerum nesciunt</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>1 hr. ago</p>
                                </div>
                            </li>
                        </ul>

                    </li>

                    <li className="nav-item dropdown pe-3">
                        <Link className="nav-link nav-profile d-flex align-items-center pe-0" href="/" data-bs-toggle="dropdown">
                            <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header pull-left">
                                <h6>Kevin Anderson</h6>
                                <span>UI Developer</span>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <Link className="dropdown-item d-flex align-items-center" href="/">
                                    <i className="bi bi-person"></i>
                                    <span>My Profile</span>
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <Link className="dropdown-item d-flex align-items-center" href="/">
                                    <i className="bi bi-gear"></i>
                                    <span>Account Settings</span>
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link className="dropdown-item d-flex align-items-center" href="/">
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span>Sign Out</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header