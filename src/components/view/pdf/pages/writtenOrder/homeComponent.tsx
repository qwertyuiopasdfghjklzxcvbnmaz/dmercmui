'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import Signature from '../signature/signature';
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
        //setFields({ ...fields, patientSignature: signUrl });
    }

    const _handleSubmit = (event: any) => {
        event.preventDefault();
        const dataFields = { ...fields };
        console.log(dataFields);
    }

    const _handleChangeServices = (event: any, index: number) =>{
        const fieldName: any = event.target.name;
        const value: any = event.target.value;
        const _fields = {...fields};
        /* @ts-ignore */
        _fields.equipments[index][fieldName] = value;
        setFields(_fields);
    }   

   

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <div className='row pb-0 m-0 p-0'>
                    <div className='col-md-6 p-0'>
                        <h1>Written Order</h1>
                    </div>
                </div>
            </div>
            <section>
                <div className='row pb-0'>
                    <div className='col-lg-12'>
                        <div className='card p-2'>
                            <div className='card-body pdf-form p-2'>
                                <div className='row g-1'>
                                <div className='col-md-6'>
                                    <h3 className='text-14 fw-bold border-bottom text-grey'>PROVIDER</h3>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Name: <span className='text-secondary'>{fields?.providerName}</span> </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Address: <span className='text-secondary'>{fields?.providerAddress}</span> </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Phone: <span className='text-secondary'>{fields?.providerPhone}</span> </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Fax: <span className='text-secondary'>{fields?.providerFax}</span> </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Doc ID: <span className='text-secondary'>{fields?.providerDocId}</span> </div>
                                <h3 className='text-14 fw-bold border-bottom text-grey'>PHYSICIAN</h3>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Name: <span className='text-secondary'>{fields?.physicianName}</span> </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Address: <span className='text-secondary'>{fields?.physicianAddress}</span> </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>License: <span className='text-secondary'>{fields?.physicianLicense}</span> </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Phone: <span className='text-secondary'>{fields?.physicianPhone}</span> </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>NPI: <span className='text-secondary'>{fields?.physicianNpi}</span> </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Fax: <span className='text-secondary'>{fields?.physicianFax}</span> </div>     
                                </div>

                                <div className='col-md-6'>
                                 <h3 className='text-14 fw-bold border-bottom text-grey'>PATIENT</h3>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Name: <span className='text-secondary'>{fields?.patientName}</span> </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Address: <span className='text-secondary'>{fields?.patientAddress}</span> </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Phone: <span className='text-secondary'>{fields?.patientPhone}</span> </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>DOB: <span className='text-secondary'>{fields?.patientDob}</span> </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Policy: <span className='text-secondary'>{fields?.patientPolicy}</span> </div>

                                 <h3 className='text-14 fw-bold border-bottom text-grey'>ORDER</h3>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Initial Date: <span className='text-secondary'>{fields?.orderInitialDate}</span> </div>
                                    
                                    <div className='fw-bold text-12 mb-1 ms-3'>Revised Date: <span className='text-secondary'>{fields?.orderRevisedDate}</span> </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Recertification Date: <span className='text-secondary'>{fields?.orderRecertificationDate}</span> </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Length of Need: 
                                    <input onChange={handleChange} value={fields?.orderLengthofNeed} name='orderLengthofNeed' type="text" className="pdfinput ms-1 me-1" id="" />
                                    </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Refill Authorized: 
                                    <input onChange={handleChange} value={fields?.refillAuthorized} name='refillAuthorized' type="text" className="pdfinput ms-1 me-1" id="" />
                                    </div>
                                    <div className='fw-bold text-12 mb-1 ms-3'>Prognosis: 
                                    <input onChange={handleChange} value={fields?.orderPrognosis} name='orderPrognosis' type="text" className="pdfinput ms-1 me-1" id="" />
                                    </div> 
                                </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className='card pb-0 '>
                            <div className='card-header bg-blue2 text-white'> DIAGNOSIS</div>
                            <div className='card-body p-0 m-1 teble-responsive'>
                            
                                <table className='table table-sm table-striped'>
                                    <thead>
                                        <tr>
                                            <th>ICD-10 Code</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {!!fields.diagnosis && fields.diagnosis.map((item, index)=> <tr key={index}>
                                            <td>{item.icd10Code}</td>
                                            <td>{item.description}</td>
                                        </tr>)}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className='card pb-0 '>
                            <div className='card-header bg-blue2 text-white'> EQUIPMENT/SERVICES</div>
                            <div className='card-body p-0 m-1 teble-responsive'>

                            <table className='table table-sm table-striped'>
                            <thead>
                                <tr>
                                    <th>Qty</th>
                                    <th>Proc. Code</th>
                                    <th>Ext. Allow</th>
                                    <th>Item Name/Narrative</th>
                                    <th>Frequency </th>
                                </tr>
                            </thead>
                            <tbody>
                                 {!!fields.equipments && fields.equipments.map((item, index)=> <tr key={index}>
                                    <td>{item.qty}</td>
                                    <td>{item.procCode}</td>
                                    <td>{item.extallow}</td>
                                    <td>{item.itemName} </td>
                                    <td>
                                        <div className='row g-1'>
                                            <div className='col-md-6'>
                                                <label className='form-label'>Count</label>
                                                <input onChange={(e) => _handleChangeServices(e, index)} value={item?.count} name='count' type="text" className="pdfinput me-1" id="" />
                                            </div>
                                            <div className='col-md-6'>
                                                <label className='form-label'>Interval</label>
                                                <input onChange={(e) => _handleChangeServices(e, index)} value={item?.interval} name='interval' type="text" className="pdfinput me-1" id="" />
                                            </div>
                                        </div>
                                        
                                        </td>
                                </tr>)}
                            </tbody>
                        </table>
                               
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className='card pb-0 '>

                            <div className='card-body p-2 mb-4 text-12'>

                                <p>Dear Physician,</p>
                                <p>
                                This information was provided to our office as part of the order intake process. Please review, correct, and provide additional. information If required.
Please sign, and mail/fax the reviewed form back to our office.<br />
Thank you
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className='card pb-0 '>
                            <div className='card-header bg-blue2 text-white'> ADDL. NOTE</div>
                            <div className='card-body p-2 mb-0 '>
                            <textarea onChange={handleChange} name='equipmentTrials' value={fields?.addnNote} cols={3} rows={4} className="form-control form-control-sm" id="comments" />
                              
                            </div>
                        </div>
                    </div>

                    <Signature
                        fields={fields}
                        handleChange={handleChange}
                    />

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