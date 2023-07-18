
import React from 'react';
import Link from 'next/link';

function Page() {
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Pdf</h1>
            </div>
            <section>
                <div className='row pb-0'>
                    <div className='col-lg-6'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-orange">Pdf</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><Link href="/responsibility" className='btn btn-light btn-sm' >Standard_Form_Patient_Rights_Responsibility_v1_(02-03-16)</Link></li>
                                    <li className="list-group-item"><Link href="/patient_assessment" className='btn btn-light btn-sm' >Standard_Patient_Assessment_v1_(9-24-15)</Link></li>
                                    <li className="list-group-item"><Link href="/hipaa_notice" className='btn btn-light btn-sm' >Standard_HIPAA_Notice_v1_(01-30-17)</Link></li>
                                    <li className="list-group-item"><Link href="/dme_certification" className='btn btn-light btn-sm' >Standard_DME_Certification_MS_v1_(12-07-16)</Link></li>
                                    <li className="list-group-item"><Link href="/patien_home_assessment" className='btn btn-light btn-sm' >Standard_Home_Assessment_2_v2_(9-25-15)</Link></li>
                                    <li className="list-group-item"><Link href="/deliveryreceipts" className='btn btn-light btn-sm' >Delivery Receipts</Link></li>
                                    <li className="list-group-item"><Link href="/signature" className='btn btn-light btn-sm' >Signature</Link></li>
                                    <li className="list-group-item"><Link href="/pickupExchange" className='btn btn-light btn-sm' >Pickup Exchange</Link></li>
                                    <li className="list-group-item"><Link href="/abn" className='btn btn-light btn-sm' >ABN</Link></li>
                                    <li className="list-group-item"><Link href="/writtenOrder" className='btn btn-light btn-sm' >Written Order Form</Link></li>
                                    <li className="list-group-item"><Link href="/pickupExchangeTicket" className='btn btn-light btn-sm' >Pickup Exchange Ticket</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Page;