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
                        <h1>Pickup Exchange Ticket</h1>
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
                                        <h3 className='text-13 fw-bold text-grey'>HAPPY DOCTORS GROUPPRACTICE</h3>
                                        <p className=' text-13 fw-bold  p-0 mb-1'>123 address1, apt 000, city1, wa 
                                        <br />
                                        981010000
                                        </p>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='fw-bold text-12 mb-1'>Date: <span className='text-secondary'>{fields?.currentDate}</span> </div>
                                        <div className='fw-bold text-12 mb-1'>Order: <span className='text-secondary'>{fields?.pickupExchangeId}</span> </div>
                                        <div className='fw-bold text-12 mb-1'>Customer ID: <span className='text-secondary'>{fields?.patientIdNo}</span> </div>
                                        <div className='fw-bold text-12 mb-1'>Document ID: <span className='text-secondary'>{fields?.documentId}</span> </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='fw-bold text-12 mb-1'>Patient: <span className='text-secondary'>{fields?.patientFirstName}</span> <span className='text-secondary'>{fields?.patientLastName}</span> </div>
                                        <div className='fw-bold text-12 mb-1'>Bill To: <span className='text-secondary'>{fields?.patientBillingAddressLine1}, {fields?.patientBillingAddressLine2}<br /> {fields?.patientBillingAddressState}, {fields.patientBillingAddressCity}, {fields.patientBillingAddressZip}</span> </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='fw-bold text-12 mb-1'>Pickup/Exchange Address: <span className='text-secondary'>2330 NW FLANDERS ST STE 101, PORTLAND, <br /> OR 97210-3400, PORTLAND, Oregon, 97210-3400 </span> </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                   

                    <div className='col-lg-12'>
                        <div className='card pb-0 '>
                            <div className='card-header bg-blue2 text-white'> Comments or Special Instructions 
                            <span className='float-end text-11'>item has been exchanged aginst the request</span>
                            </div>
                            <div className='card-body p-0 m-1 teble-responsive'>
                            
                                <table className='table table-sm table-striped'>
                                    <thead>
                                        <tr>
                                            <th>Pickup/Exchange Date </th>
                                            <th>CSR</th>
                                            <th>BRANCH</th>
                                            <th>WAREHOUSE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        <tr>
                                            <td>{fields?.pickupExchangeActualDateTime}</td>
                                            <td></td>
                                            <td>{fields?.branchName}</td>
                                            <td>{fields?.inventoryLocationName}</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                                
                            </div>

                            
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className='card pb-0 '>
                            <div className='card-body p-0 m-1 teble-responsive'>

                            <table className='table table-sm table-striped'>
                            <thead>
                                <tr>
                                    <th>Qty</th>
                                    <th>Type</th>
                                    <th>ITEM</th>
                                    <th>INVOICE </th>
                                    <th>BILLED </th>
                                    <th className=''>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {!!fields.pickupExchangeItems && fields.pickupExchangeItems.map((item, index)=> <tr key={index}>
                                    <td>{item.quantity}</td>
                                    <td>{item.itemPickupExchangeType}</td>
                                    <td>{item.itemNo} {item.itemName} {item.pickupItemSerialNo} {item.pickupItemAssetNo} <br />
                                        <label className='form-label fw-bold mt-2 border-bottom'>Exchange Items:</label> <br />
                                        {item.itemNo} {item.itemName} {item.pickupItemSerialNo} <input type="text" className="pdfinput" id="" /> <button className='btn btn-sm'><i className='bi bi-check-circle-fill text-success'></i></button>  <button className='btn btn-sm'><i className='bi bi-x-circle-fill text-danger'></i></button> <button className='btn btn-sm fw-bold'><i className='text-primary text-bolder'>Validate</i></button>(Delivered)

                                    </td>
                                    <td> -- </td>
                                    <td> --</td>
                                    <td> 
                                    <input type="text" className="form-control form-control-sm text-11" id="" />
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>
                               
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