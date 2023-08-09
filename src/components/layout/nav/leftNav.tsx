import React from 'react'
import Link from "next/link";

function LeftNav() {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link className="nav-link " href="/dashboard">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" href="/search">
                        <i className="bi bi-search"></i>
                        <span>Search</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/ordering">
                        <i className="ri-caravan-line"></i>
                        <span>Ordering</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/todo">
                        <i className="ri-caravan-line"></i>
                        <span>Todo</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/npi">
                        <i className="ri-caravan-line"></i>
                        <span>NPI</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/test">
                        <i className="ri-caravan-line"></i>
                        <span>Test Redux</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/item">
                        <i className="ri-caravan-line"></i>
                        <span>Item</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/pdf">
                        <i className="ri-caravan-line"></i>
                        <span>PDF</span>
                    </Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" href="/signature">
                        <i className="ri-caravan-line"></i>
                        <span>Signature</span>
                    </Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" href="/autofrom">
                        <i className="ri-caravan-line"></i>
                        <span>Auto From</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default LeftNav;