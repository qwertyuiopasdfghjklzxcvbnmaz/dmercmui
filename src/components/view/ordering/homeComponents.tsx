import Link from "next/link";
function HomeComponents() {
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Ordering</h1>
            </div>
            <section>
                <div className='row pb-0'>
                    <div className='col-lg-3'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Ordering</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Doctors</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Insurance</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Notes</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >NPI Doctor Registry</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Order Import</Link></li>
                                    <li className="list-group-item"><Link href="/patientsearch" className='btn btn-light btn-sm' >Patients</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Pickup Exchanges</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Refferal Management</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Sales Orders</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Sales Orders Unconfirm</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Sales Orders Void</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Eligibility</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Commercial</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >History</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Ineligble Policies</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Medicare</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Queue Sales Order Stops</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Queue Sales Order Template Stops</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Same or Similar</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">POD Work List</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Review Delivery Order Status</Link></li>
                                    <li className="list-group-item"><Link href="/doctors" className='btn btn-light btn-sm' >Send Delivery Orders</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomeComponents;
