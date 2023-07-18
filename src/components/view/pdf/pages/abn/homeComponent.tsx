'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import SignatureModal from './signatureModal';
import {initalFields, floatFields, integerFields} from './config';
import CustomDatepicker from '../../../../common/datepickerComponent';

function Home() {
    const [fields, setFields] = useState({ ...initalFields });

    
    const _modalOpen = (event: any) =>{
        event.preventDefault();
        /* @ts-ignore */
        window.$('#exampleModal').modal('show');
      }

      const handleChange = (event: any) => {
        const fieldName: any = event.target.name;
        const input: any = event.target.value;
        const type: any = event.target.type;
        /* @ts-ignore */
        let fieldValue = fields[fieldName];
        if (integerFields.indexOf(event.target.name) !== -1) {
            if (isNaN(parseFloat(input))) {
                fieldValue = null;
            } else {
                fieldValue = parseInt(input, 10);
            }
        } else if (floatFields.indexOf(event.target.name) !== -1) {
            if (input.length === 0) {
                fieldValue = input;
            }
        } else if(type === 'checkbox'){
            /* @ts-ignore */
            fieldValue = !fields[fieldName];
        } else {
            fieldValue = input;
        }
        setFields({ ...fields, [fieldName]: fieldValue });
    }

    const handleChangeSign = (signUrl: string) =>{
        setFields({ ...fields, patientSignature: signUrl });
    }

    const _handleSubmit = (event: any) => {
        event.preventDefault();
        const dataFields = { ...fields };
        console.log(dataFields);
    }

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <div className='row pb-0 m-0 p-0'>
                    <div className='col-md-6 p-0'>
                        <h1>ABN</h1>
                    </div>
                </div>
            </div>
            <section>
                <div className='row pb-0'>
                    <div className='col-lg-12'>
                        <div className='card p-2'>
                            <div className='card-body pdf-form p-2'>
                                <div className='float-start'>
                                    <div className='fw-bold text-12 mb-1'>A. Notifier: <span className='text-orange'>{fields?.notifier}
                                    </span></div>
                                    <div className='fw-bold text-12'>Date of Issuance: <span className='text-orange'>{fields?.actualDeliveryDateTime}
                                    </span></div>
                                </div>
                                <div className='float-end'>
                                    <div className='fw-bold text-12 mb-1'>B. Patient Name: <span className='text-orange'>{fields?.patientFirstName+ ' ' + fields?.patientMiddleName+ ' ' + fields?.patientLastName}
                                    </span></div>
                                    <div className='fw-bold text-12 float-end'>C. Identification Number: <span className='text-orange'>{fields?.patientIdNo}
                                    </span></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className='card pb-0 '>
                            <div className='card-header bg-blue2 text-white'> Advance Beneficiary Notice of Noncoverage (ABN)</div>
                            <div className='card-body pb-0 m-1 '>
                                <p className='text-13'>
                                    <span className='fw-bold'>NOTE:</span> If Medicare does not pay for the D. Item below, you may have to pay. Medicare does not pay for everything, even some care that
                                    you or your health care provider have good reason to think you need. We expect Medicare may not pay for the D. Item below.
                                </p>
                                { fields?.equipment &&
                                <>
                                    <div className="row g-1">
                                        <div className="col-md-4">
                                            <label htmlFor="name" className="form-label">D. Equipment </label>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="patientid" className="form-label">E. Reason Medicare May Not Pay</label>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="address1" className="form-label">F. Est. Cost</label>
                                        </div>
                                    </div>
                                    {
                                        fields.equipment.map((item, key) =>  <div key={key} className="row g-1">
                                        <div className="col-md-4">
                                            <input value={item.procCode} type="text" className="form-control form-control-sm" />
                                        </div>
                                        <div className="col-md-4">
                                            <input value={item.reason} type="text" className="form-control form-control-sm" />
                                        </div>
                                        <div className="col-md-4">
                                            <input value={item.chargeAmount} type="text" className="form-control form-control-sm mb-1" />
                                        </div>
                                    </div>)
                                    }
                                </>
                                }
                                <div className="row g-1 mt-3 pdf-form">
                                    <p className='text-13 fw-bold m-0'>WHAT YOU NEED TO DO NOW:</p>

                                    <ul>
                                        <li>Read this notice, so you can make an informed decision about your care.</li>
                                        <li>Ask us any questions that you may have after you finish reading.</li>
                                        <li>Choose an option below about whether to receive the D. Item listed above.</li>
                                    </ul>

                                    <p className='text-13'><span className='fw-bold'>Note:</span> If you choose Option 1 or 2, we may help you to use any other insurance that you might have, but Medicare cannot require
                                        us to do this.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className='card pb-0 '>

                            <div className='card-body p-2 mb-4 '>

                                <form className="row g-1">
                                    <div className="col-md-12 pdf-form ">
                                        <p className='text-13 fw-bold'>G. Options: Check only one box. We cannot choose a box for you</p>
                                        <p className='text-13'></p>

                                        <ul className='text-14 p-0'>
                                            <li><input  className="form-check-input" onChange={handleChange} checked={'option1' === fields?.paymentOption} type="radio" name="paymentOption" id="paymentOption" value="option1" /> <span className='fw-bold'>OPTION 1.</span> I want the D. Item listed above. You may ask to be paid now, but I also want Medicare billed for an official decision on payment, which
                                                is sent to me on a Medicare Summary Notice (MSN). I understand that if Medicare doesn’t pay, I am responsible for payment, but <span className='fw-bold'>I can appeal to
                                                    Medicare </span> by following the directions on the MSN. If Medicare does pay, you will refund any payments I made to you, less co-pays or deductibles.
                                            </li>

                                            <li><input className="form-check-input" onChange={handleChange} checked={'option2' === fields?.paymentOption} type="radio" name="paymentOption" id="paymentOption" value="option2" /> <span className='fw-bold'>OPTION 2.</span> I want the D. Item listed above, but do not bill Medicare. You may ask to be paid now as I am responsible for payment. <span className='fw-bold'>I cannot
                                                appeal if Medicare is not billed</span>.
                                            </li>

                                            <li><input className="form-check-input" onChange={handleChange} checked={'option3' === fields?.paymentOption} type="radio" name="paymentOption" id="paymentOption" value="option3" /> <span className='fw-bold'>OPTION 3.</span> I don’t want the D. Item listed above. I understand with this choice I am not responsible for payment, and <span className='fw-bold'>I cannot appeal to see if
                                                Medicare would pay.</span>
                                            </li>
                                        </ul>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='card pb-0 '>

                            <div className='card-body p-3 mb-4 '>

                                <div className="col-md-12 pdf-form ">
                                    <p className='text-13 fw-bold'>H. Additional Information</p>
                                    <p className='text-13'>
                                    </p>
                                </div>

                                <form className="row g-1">
                                    <div className="col-md-12 pdf-form ">
                                        <p className='text-13'><span className='fw-bold'>This notice gives our opinion, not an official Medicare decision.</span> If you have other questions on this notice or Medicare billing, call
                                            1-800-MEDICARE (1-800-633-4227/TTY: 1-877-486-2048).
                                        </p>
                                        <p className='text-13'>Signing below means that you have received and understand this notice. You also receive a copy.
                                        </p>

                                        <div className="row g-1">
                                            <div className="col-md-5">
                                                <label htmlFor="signature" className="form-label">I. Signature:</label>{" "}
                                                <button onClick={_modalOpen} className=' btn btn-sm btn-primary'><i className='bi bi-plus'></i> Add </button>
                                                 {/* @ts-ignore */}
                                                <SignatureModal getSignUrl={handleChangeSign} />
                                            </div>

                                            <div className="col-md-3">
                                                {/* <label htmlFor="date" className="form-label">Date</label>
                                                <input type="date" className="form-control form-control-sm" id="date" /> */}
                                                <CustomDatepicker
                                                    title="Date"
                                                    name="currentDate"
                                                    value={fields?.currentDate}
                                                    onChange={handleChange}
                                                    divClassName="form-check-label text-12"
                                                />
                                            </div>
                                        </div>

                                        <p className='text-13 fw-bold text-center mt-3'>CMS does not discriminate in its programs and activities. To request this publication in an <br />
                                            alternative format, please call: 1-800-MEDICARE or email: AltFormatRequest@cms.hhs.gov
                                        </p>

                                        <p className='text-13'>
                                            According to the Paperwork Reduction Act of 1995, no persons are required to respond to a collection of information unless it displays a
                                            valid OMB control number. The valid OMB control number for this information collection is 0938-0566. The time required to complete this
                                            information collection is estimated to average 7 minutes per response, including the time to review instructions, search existing data
                                            resources, gather the data needed, and complete and review the information collection. If you have comments concerning the accuracy of
                                            the time estimate or suggestions for improving this form, please write to:<br />
                                            CMS, 7500<br />
                                            Security Boulevard, Attn: PRA Reports Clearance Officer<br />
                                            Baltimore, Maryland 21244-1850.
                                        </p>

                                        <p className='text-13 mt-2'>
                                            Form CMS-R-131 (Exp. 06/30/2023) Form Approved OMB No. 0938-0566
                                        </p>

                                        <div className='text-12 text-secondary fst-italic mt-5'>
                                            Name: Plott, Debra <br />
                                            Order #: 737689
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <Link onClick={_handleSubmit} href="#" className='btn btn-success'><i className='bi bi-save'></i> Save</Link>&nbsp;
                        <button className='btn btn-secondary'><i className='bi bi-reply'></i> Reset</button>
                    </div>
                </div>
            </section>
           
        </main>
    )
}

export default Home;