import React from 'react';
import Link from 'next/link';

function Responsibility() {
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <div className='row pb-0 m-0 p-0'>
                    <div className='col-md-6 p-0'>
                        <h1>Standard Form Patient Rights Responsibility</h1>
                    </div>
                </div>
            </div>
            <section>

                <div className='row pb-0'>

                    <div className='col-lg-12'>
                        <div className='card p-2'>
                            <div className='card-body pdf-form p-2'>
                                <h1 className='mb-3 border-bottom border-secondary text- fw-bold'>Company Name</h1>
                                <h2 className='mb-3'>Patient Rights & Responsibilities</h2>
                                <h3 className='pdfhader p-1 text-14 fw-bold fst-italic'><i className='bi bi-square-fill text-blue'></i> As an individual receiving home care services, let it be known that you have the following rights:</h3>

                                <ol>
                                    <li>To select those who provide your home care services.</li>
                                    <li>To be provided with legitimate identification by any person or persons who enter your residence to provide home care services for you.</li>
                                    <li>To receive the appropriate or prescribed service in a professional manner without discrimination relative to your age, race, sex,
                                        religion, ethnic origin, sexual preference or physical/mental handicap.</li>
                                    <li>To be dealt with and treated with friendliness, courtesy and respect by each and every individual representing the company who
                                        provides treatment or services for you</li>
                                    <li>To assist in the development and planning of your home care program so that it is designed to satisfy, as best as possible to your
                                        current needs.</li>
                                    <li>To be provided with adequate information from which you can give your informed consent for the commencement of service, the continuation of
                                        service, the transfer of service to another home care provider, or the termination of service.</li>
                                    <li>To express concerns or grievances or recommend modifications to your home care services without fear of discrimination or reprisal.
                                        The Medicare hotline number is 1-866-238-9650.</li>
                                    <li>To request and receive complete and up-to-date information relative to your condition, treatment, alternative treatments and
                                        risks of treatment.</li>
                                    <li>To receive treatment and services within the scope of your home care plan, promptly and professionally, while being fully informed as
                                        to company policies, procedures and charges.</li>
                                    <li>To refuse treatment and services within the boundaries set by law, and to receive professional information relative to the ramifications
                                        or consequences that will or may result due to such refusal.</li>
                                    <li>To request and receive the opportunity to examine or review your medical records.</li>
                                </ol>

                                <h3 className='pdfhader p-1 text-14 fw-bold fst-italic'><i className='bi bi-square-fill text-blue'></i> As an individual receiving home care services, let it be known that you have the following responsibilities:</h3>
                                <ol>
                                    <li>To provide accurate and complete information and notify Punxsy/Rezk Medical Supply of any changes in status,
                                        including medical, change of address or insurance.</li>
                                    <li>To advise Punxsy/Rezk Medical Supply of any changes inphone number, address, physician, insurance company or payor source.</li>
                                    <li>To comply with Physician's prescribed treatment and be responsible for the outcomes if they do not follow the prescribed treatment.</li>
                                    <li>To make known whether you understand the products and services provided and what you are expected to do.</li>
                                    <li>To comply with the service plan and to communicate any change in the physician's order.</li>
                                    <li>To plan to any emergencies that may occur in the home.</li>
                                    <li>To respect the rights, professional integrity and dignity of those providing your care.</li>
                                    <li>To notify our staff if you wish to cancel services or change a scheduled visit.</li>
                                    <li>To follow any instructions, rules and regulations as provided by Punxzsy\Rezk Medical Supply.</li>
                                    <li>To properly store, clean and maintain your equipment as recommended by the manufacturer.</li>
                                    <li>To contact Punxsy\Rezk Medical Supply when equipment is not working properly and to allow Punxsy\Rezk Medical Supply staff access
                                        to equipment for repair and maintenance.</li>
                                    <li>To meet the financial obligations agreed to with Punxsy\Rezk Medical Supply.</li>
                                </ol>

                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='card pb-0 '>
                            <div className='card-header bg-blue2 text-white'> Signature of Patient or Patient's Representative</div>
                            <div className='card-body pb-0 mb-4 '>

                                <form className="row g-1">
                                    <div className="col-md-6">
                                        <div className='form-check text-12'>
                                            <input className="form-check-input" type="checkbox" id="hippa" />
                                            <label className="form-check-label" htmlFor="hippa"> &nbsp; X</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className='form-check text-12 '>
                                            <input className="form-check-input" type="checkbox" id="hippa" />
                                            <label className="form-check-label" htmlFor="hippa"> &nbsp; Y</label>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <textarea cols={3} rows={4} className="form-control form-control-sm" id="sign1" />
                                    </div>

                                    <div className="col-md-12">
                                        <div className='form-check text-12 '>
                                            <input className="form-check-input" type="checkbox" id="hippa" />
                                            <label className="form-check-label" htmlFor="hippa"> &nbsp; asndlasdnlas</label>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <textarea cols={3} rows={4} className="form-control form-control-sm" id="sign2" />
                                    </div>



                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='card pb-0 '>
                            <div className='card-header bg-blue2 text-white'> Patient</div>
                            <div className='card-body pb-0 mb-4 '>

                                <form className="row g-1">
                                    <div className="col-md-12">
                                        <label htmlFor="billingcontact" className="form-label">Printed Name of Patient Representative</label>
                                        <input type="text" className="form-control form-control-sm" id="billingcontact" />
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="relationshippatient" className="form-label">Relationship to Patient</label>
                                        <input type="text" className="form-control form-control-sm" id="relationshippatient" />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="address1" className="form-label">If not "Self," reason patient could not sign</label>
                                        <textarea cols={2} className="form-control form-control-sm" id="sign" />
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="city" className="form-label">Date</label>
                                        <input type="date" className="form-control form-control-sm" id="date" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>


                    <div className='col-lg-4'>
                        <div className='card pb-0 '>
                            <div className='card-header bg-blue2 text-white'> Company Representative</div>
                            <div className='card-body pb-0 mb-4 '>

                                <form className="row g-1">
                                    <div className="col-md-12">
                                        <label className="form-label">Signature</label>
                                        <textarea cols={3} rows={4} className="form-control form-control-sm" id="sign1" />
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="representativename" className="form-label">Name</label>
                                        <input type="text" className="form-control form-control-sm" id="representativename" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='text-center'>
                        <Link href="/orderentrylist" className='btn btn-success'><i className='bi bi-save'></i> Save</Link>&nbsp;
                        <button className='btn btn-secondary'><i className='bi bi-reply'></i> Reset</button>
                    </div>


                </div>
            </section>

        </main>
    )
}

export default Responsibility;